import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {getSession} from "next-auth/react";
import {MessageReaction} from "@/types/messageReactionType";

const useCreateMessageReaction = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (messageReactionData: MessageReaction) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}messageReaction/create`;

    const fetchData = useCallback(async (messageReactionData: MessageReaction) => {
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
                    "is_liked": messageReactionData.is_liked,
                    "is_flagged": messageReactionData.is_flagged,
                    "userId": messageReactionData.userId,
                    "messageId": messageReactionData.messageId,
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

export default useCreateMessageReaction;
