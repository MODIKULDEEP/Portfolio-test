import { BlogPostWhereInput } from "./BlogPostWhereInput";
import { BlogPostOrderByInput } from "./BlogPostOrderByInput";

export type BlogPostFindManyArgs = {
  where?: BlogPostWhereInput;
  orderBy?: Array<BlogPostOrderByInput>;
  skip?: number;
  take?: number;
};
