import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Challenge } from "@/types/challengeType";

const useUpdateUser = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (challengeData: Challenge) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (challengeData: Challenge) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}challenge/update/${challengeData.id}`;

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
          id: challengeData.id,
          name: challengeData.name,
          date_start: challengeData.date_start,
          date_end: challengeData.date_end,
          description: challengeData.description,
          hashtag: challengeData.hashtag,
          instrumentId: challengeData.instrumentId,
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
export default useUpdateUser;
