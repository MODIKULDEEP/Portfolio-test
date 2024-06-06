export type Comment = {
  author: string | null;
  authorComment: string | null;
  content: string | null;
  contentComment: string | null;
  createdAt: Date;
  createdAtComment: Date | null;
  id: string;
  post: string | null;
  postComment: string | null;
  updatedAt: Date;
};
