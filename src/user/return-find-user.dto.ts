import { BaseEntity } from "../common";

export const PROFILE_PROVIDER = {
  GOOGLE: "google",
  APPLE: "apple",
  KAKAO: "kakao",
  NAVER: "naver",
  ETC: "etc",
} as const;

export const PROFILE_PROFILE_ARRAY = Object.values(PROFILE_PROVIDER);
export type ProfileProvider = typeof PROFILE_PROFILE_ARRAY[number];

class UserProfile extends BaseEntity {
  id!: number;

  nickname?: string;

  provider!: ProfileProvider;

  phone_number?: string;

  save_money!: number;

  userId!: number;
}

export class User extends BaseEntity {
  id!: number;

  email!: string;

  profile!: UserProfile;
}
