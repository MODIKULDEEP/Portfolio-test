import { BlogPostWhereUniqueInput } from "./BlogPostWhereUniqueInput";
import { BlogPostUpdateInput } from "./BlogPostUpdateInput";

export type UpdateBlogPostArgs = {
  where: BlogPostWhereUniqueInput;
  data: BlogPostUpdateInput;
};
