import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { TopicReaction } from "@/types/topicReactionType";

const useUpdateTopicReaction = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (messageReactionData: TopicReaction) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (messageReactionData: TopicReaction) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}topicReaction/update/${messageReactionData.topicId}`;

    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const session = await getSession();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const token = session?.accessToken;

      const config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          is_liked: messageReactionData.is_liked,
          is_flagged: messageReactionData.is_flagged,
          userId: messageReactionData.userId,
          topicId: messageReactionData.topicId,
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

export default useUpdateTopicReaction;
