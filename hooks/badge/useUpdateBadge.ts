import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Badge } from "@/types/badgeType";

const useUpdateBadge = <T>(): {
  data: T | null;
  error: any;
  isLoading: boolean;
  fetchData: (badgeData: Badge) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (badgeData: Badge) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}badge/update/${badgeData.id}`;

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
          id: badgeData.id,
          name: badgeData.name,
          description: badgeData.description,
          points: badgeData.points,
          display_img: badgeData.display_img,
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
export default useUpdateBadge;
