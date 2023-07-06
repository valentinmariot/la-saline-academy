import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";

const useUpdateUser = <T>(): {
  data: T | null;
  error: Error | null | unknown;
  isLoading: boolean;
  fetchData: (userData: any) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (userData: any) => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}user/update/${userData.id}`;

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
          id: userData.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
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
