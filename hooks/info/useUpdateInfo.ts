import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Info } from "@/types/infoType";

const useUpdateInfo = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (infoData: Info) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (infoData: Info) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}info/update/${infoData.id}`;

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
          name: infoData.name,
          icon: infoData.icon,
          content: infoData.content,
          date_start: infoData.date_start,
          date_end: infoData.date_end,
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

export default useUpdateInfo;
