import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "author";

export const CommentTitle = (record: TComment): string => {
  return record.author?.toString() || String(record.id);
};
