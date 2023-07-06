import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Section } from "@/types/sectionType";

const useCreateSection = <T>(): {
  data: T | null;
  error: Error | null | unknown;
  isLoading: boolean;
  fetchData: (sectionData: Section) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}section/create`;

  const fetchData = useCallback(async (sectionData: Section) => {
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
          name: sectionData.name,
          order: sectionData.order,
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

export default useCreateSection;
