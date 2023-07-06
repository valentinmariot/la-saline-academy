import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import {getSession} from "next-auth/react";
import { Note } from "@/types/noteType";

/**
 * Delete Note in lesson of a course 
 * @param noteData Type Note
 * @returns 
 */
const useDeleteNote = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (noteData: Note) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (noteData: Note) => {
        const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}note/deleteById/${noteData.userId}/${noteData.courseId}/${noteData.lessonId}`;
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const session = await getSession();
            const token = session?.accessToken;
            const config = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
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

export default useDeleteNote;
