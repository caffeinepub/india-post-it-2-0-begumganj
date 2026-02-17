import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Migration "migration";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// Explicit migration function for persistent data evolution.
(with migration = Migration.run)
actor {
  // Profile Data Types
  public type ProfileRating = {
    rating : Nat;
    timestamp : Time.Time;
    ratedBy : Principal;
  };

  public type Profile = {
    username : Text;
    description : Text;
    owner : ?Principal;
  };

  public type UserProfile = {
    name : Text;
    bio : Text;
  };

  // Authorization system and roles
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Persistent storage for profiles and ratings
  let profiles = Map.empty<Text, Profile>();
  let profileRatings = Map.empty<Text, ProfileRating>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management (required by frontend)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Profile management
  public shared ({ caller }) func createProfile(username : Text, description : Text) : async () {
    // Only authenticated users can create profiles
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create profiles");
    };

    // Validate input
    if (username == "" or description == "") {
      Runtime.trap("Username and description cannot be empty!");
    };

    // Check if profile already exists
    switch (profiles.get(username)) {
      case (?_) {
        Runtime.trap("Profile with this username already exists!");
      };
      case null {};
    };

    let profile : Profile = {
      username;
      description;
      owner = ?caller;
    };
    profiles.add(username, profile);
  };

  public query ({ caller }) func getProfile(username : Text) : async ?Profile {
    // Only authenticated users can view profiles
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    profiles.get(username);
  };

  public shared ({ caller }) func updateProfile(username : Text, description : Text) : async () {
    // Only authenticated users can update profiles
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update profiles");
    };

    // Validate input
    if (description == "") {
      Runtime.trap("Description cannot be empty!");
    };

    // Verify the profile exists and check ownership
    switch (profiles.get(username)) {
      case null {
        Runtime.trap("Profile does not exist!");
      };
      case (?existingProfile) {
        // Only owner or admin can update
        if (existingProfile.owner != ?caller and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Only the profile owner or admin can update this profile");
        };

        let updatedProfile : Profile = {
          username = existingProfile.username;
          description;
          owner = existingProfile.owner;
        };
        profiles.add(username, updatedProfile);
      };
    };
  };

  public shared ({ caller }) func deleteProfile(username : Text) : async () {
    // Only admins can delete profiles
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete profiles");
    };

    // Verify the profile exists
    switch (profiles.get(username)) {
      case null {
        Runtime.trap("Profile does not exist!");
      };
      case (?_) {
        profiles.remove(username);
        // Also remove associated ratings
        profileRatings.remove(username);
      };
    };
  };

  // Profile rating logic
  public shared ({ caller }) func submitRating(username : Text, rating : Nat) : async () {
    // Only authenticated users can submit ratings
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit ratings");
    };

    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5!");
    };

    // Verify the profile exists
    switch (profiles.get(username)) {
      case null {
        Runtime.trap("Profile does not exist!");
      };
      case (?profile) {
        // Prevent users from rating their own profiles
        if (profile.owner == ?caller) {
          Runtime.trap("Cannot rate your own profile!");
        };

        let profileRating : ProfileRating = {
          rating;
          timestamp = Time.now();
          ratedBy = caller;
        };
        profileRatings.add(username, profileRating);
      };
    };
  };

  public query ({ caller }) func getRating(username : Text) : async ?ProfileRating {
    // Only authenticated users can view ratings
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view ratings");
    };
    profileRatings.get(username);
  };

  public query ({ caller }) func getAllProfileRatings() : async [(Text, ProfileRating)] {
    // Only authenticated users can view all ratings
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view all ratings");
    };
    profileRatings.toArray();
  };

  public query ({ caller }) func getAllProfiles() : async [(Text, Profile)] {
    // Only authenticated users can view all profiles
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view all profiles");
    };
    profiles.toArray();
  };

  public shared ({ caller }) func deleteRating(username : Text) : async () {
    // Only admins can delete ratings
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete ratings");
    };

    switch (profileRatings.get(username)) {
      case null {
        Runtime.trap("Rating does not exist!");
      };
      case (?_) {
        profileRatings.remove(username);
      };
    };
  };
};
