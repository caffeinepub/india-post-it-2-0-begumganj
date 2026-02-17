import Map "mo:core/Map";
import Principal "mo:core/Principal";

module {
  // Old Profile type (without owner field)
  type OldProfile = {
    username : Text;
    description : Text;
  };

  // Old Actor state
  type OldActor = {
    profiles : Map.Map<Text, OldProfile>;
  };

  // New Profile type (with owner field)
  type NewProfile = {
    username : Text;
    description : Text;
    owner : ?Principal;
  };

  // New Actor state
  type NewActor = {
    profiles : Map.Map<Text, NewProfile>;
  };

  // Migration function
  public func run(old : OldActor) : NewActor {
    let newProfiles = old.profiles.map<Text, OldProfile, NewProfile>(
      func(_username, oldProfile) {
        { oldProfile with owner = null };
      }
    );
    { profiles = newProfiles };
  };
};
