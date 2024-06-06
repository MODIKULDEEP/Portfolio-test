import { InputJsonValue } from "../../types";

export type BlogPostUpdateInput = {
  author?: string | null;
  bannerImage?: InputJsonValue;
  content?: string | null;
  cta?: string | null;
  images?: InputJsonValue;
  publishedAt?: Date | null;
  title?: string | null;
  viewCount?: number | null;
};
