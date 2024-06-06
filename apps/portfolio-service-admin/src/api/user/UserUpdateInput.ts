import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  nameUser?: string | null;
  password?: string;
  passwordUser?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
