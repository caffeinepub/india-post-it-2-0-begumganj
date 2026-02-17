import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Profile {
    username: string;
    owner?: Principal;
    description: string;
}
export interface UserProfile {
    bio: string;
    name: string;
}
export interface ProfileRating {
    ratedBy: Principal;
    timestamp: Time;
    rating: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createProfile(username: string, description: string): Promise<void>;
    deleteProfile(username: string): Promise<void>;
    deleteRating(username: string): Promise<void>;
    getAllProfileRatings(): Promise<Array<[string, ProfileRating]>>;
    getAllProfiles(): Promise<Array<[string, Profile]>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getProfile(username: string): Promise<Profile | null>;
    getRating(username: string): Promise<ProfileRating | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitRating(username: string, rating: bigint): Promise<void>;
    updateProfile(username: string, description: string): Promise<void>;
}
