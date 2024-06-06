import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  bannerImage?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  cta?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  viewCount?: SortOrder;
};
