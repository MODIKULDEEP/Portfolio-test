import { JsonValue } from "type-fest";

export type BlogPost = {
  author: string | null;
  bannerImage: JsonValue;
  content: string | null;
  createdAt: Date;
  cta: string | null;
  id: string;
  images: JsonValue;
  publishedAt: Date | null;
  title: string | null;
  updatedAt: Date;
  viewCount: number | null;
};
