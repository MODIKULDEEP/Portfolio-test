import { BlogPost as TBlogPost } from "../api/blogPost/BlogPost";

export const BLOGPOST_TITLE_FIELD = "title";

export const BlogPostTitle = (record: TBlogPost): string => {
  return record.title?.toString() || String(record.id);
};
