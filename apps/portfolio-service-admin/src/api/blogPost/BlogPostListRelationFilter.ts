import { BlogPostWhereInput } from "./BlogPostWhereInput";

export type BlogPostListRelationFilter = {
  every?: BlogPostWhereInput;
  some?: BlogPostWhereInput;
  none?: BlogPostWhereInput;
};
