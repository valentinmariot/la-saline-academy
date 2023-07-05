import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {UserData} from "@/types/user";

const useRegister = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (userData: UserData) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}user/create`

    const fetchData = useCallback(async (userData: UserData) => {
        setIsLoading(true);
        setError(null);
        setData(null);

        try {
            const config = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "firstname": userData.firstname,
                    "lastname": userData.lastname,
                    "email": userData.email,
                    "password": userData.password,
                    "roleId": userData.roleId,
                    "planId": userData.planId
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

export default useRegister;
