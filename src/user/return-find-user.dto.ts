import { BaseEntity } from "../common";

export const PROFILE_PROVIDER = {
  GOOGLE: "google",
  APPLE: "apple",
  KAKAO: "kakao",
  NAVER: "naver",
  ETC: "etc",
} as const;

type ValueOf<T> = T[keyof T];
export type ProfileProvider = ValueOf<typeof PROFILE_PROVIDER>;

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
