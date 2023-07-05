import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {getSession} from "next-auth/react";
import { Badge } from "@/types/badgeType";

const useCreateBadge = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (badge: Badge) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}badge/create`;

    const fetchData = useCallback(async (badge: Badge) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const session = await getSession();
            // @ts-ignore
            const token = session?.accessToken;

            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "name": badge.name,
                    "description": badge.description,
                    "points": badge.points,
                    "display_img": badge.display_img,
                })
            };
            const result = await fetchWrapper<T>(endpoint, config);
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);
    return {data, error, isLoading, fetchData};
};
export default useCreateBadge;
