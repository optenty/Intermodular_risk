export interface IUser {
  nickname?: string;
  nombre?: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  token?: string;
  roles?: string;
  // userError?: string;
}

