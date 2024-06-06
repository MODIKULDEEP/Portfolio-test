import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  nameUser: string | null;
  passwordUser: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
