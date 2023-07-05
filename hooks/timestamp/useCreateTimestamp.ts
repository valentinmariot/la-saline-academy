import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {getSession} from "next-auth/react";
import {Timestamp} from "@/types/timestampType";

const useCreateTimestamp = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (timestampData: Timestamp) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}timestamp/create`;

    const fetchData = useCallback(async (timestampData: Timestamp) => {
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
                    "name": timestampData.name,
                    "description": timestampData.description,
                    "value": timestampData.value,
                    "videoId": timestampData.videoId,
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

export default useCreateTimestamp;
