export type TopicReaction = {
  id?: number;
  is_liked: boolean;
  is_flagged: boolean;
  userId: number;
  topicId: number;
};
