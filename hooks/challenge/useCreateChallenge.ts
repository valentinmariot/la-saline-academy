import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {getSession} from "next-auth/react";
import { Challenge } from "@/types/challengeType";

const useCreateChallenge = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (challenge: Challenge) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}challenge/create`;

    const fetchData = useCallback(async (challenge: Challenge) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const session = await getSession();
            const token = session?.accessToken;

            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "name": challenge.name,
                    "date_start": challenge.date_start,
                    "date_end": challenge.date_end,
                    "description": challenge.description,
                    "hashtag": challenge.hashtag,
                    "instrumentId": challenge.instrumentId,
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
export default useCreateChallenge;
