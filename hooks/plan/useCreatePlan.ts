import { useCallback, useState } from "react";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Plan } from "@/types/planType";

const useCreatePlan = <T>(): {
  data: T | null;
  error: Error | null | unknown;
  isLoading: boolean;
  fetchData: (planData: Plan) => Promise<void>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}plan/create`;

  const fetchData = useCallback(async (planData: Plan) => {
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
          name: planData.name,
          description: planData.description,
          price: planData.price,
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

export default useCreatePlan;
