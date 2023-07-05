import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Instrument } from "@/types/instrumentType";

const useUpdateInstrument = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (instrumentData: Instrument) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (instrumentData: Instrument) => {
        const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}instrument/update/${instrumentData.id}`;

        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const session = await getSession();
            // @ts-ignore
            const token = session?.accessToken;

            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "id": instrumentData.id,
                    "name": instrumentData.name,
                    "id_category": instrumentData.id_category,
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
export default useUpdateInstrument;
