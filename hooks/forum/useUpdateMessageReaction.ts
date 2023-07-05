import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";

const useUpdateMessageReaction = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (messageReactionData: any) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (messageReactionData: any) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}messageReaction/update/${messageReactionData.messageId}`;

    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const session = await getSession();
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
          messageId: messageReactionData.messageId,
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

export default useUpdateMessageReaction;
