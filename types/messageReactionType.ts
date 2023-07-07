export type MessageReaction = {
  id?: number;
  is_liked: boolean;
  is_flagged: boolean;
  userId: number;
  messageId: number;
};
