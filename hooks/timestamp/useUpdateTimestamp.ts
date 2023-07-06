import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Timestamp } from "@/types/timestampType";

const useUpdateTimestamp = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (timestampData: Timestamp) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (timestampData: Timestamp) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}timestamp/update/${timestampData.id}`;

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
          name: timestampData.name,
          description: timestampData.description,
          value: timestampData.value,
          videoId: timestampData.videoId,
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

export default useUpdateTimestamp;
