import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { TopicReaction } from "@/types/topicReactionType";

const useCreateTopicReaction = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (topicReactionData: TopicReaction) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}topicReaction/create`;

  const fetchData = useCallback(async (topicReactionData: TopicReaction) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const session = await getSession();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const token = session?.accessToken;

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          is_liked: topicReactionData.is_liked,
          is_flagged: topicReactionData.is_flagged,
          userId: topicReactionData.userId,
          topicId: topicReactionData.topicId,
        }),
      };
      const result = await fetchWrapper<T>(endpoint, config);
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, error, isLoading, fetchData };
};

export default useCreateTopicReaction;
