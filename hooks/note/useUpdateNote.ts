import {useCallback, useState} from "react";
import {fetchWrapper} from "@/utils/fetchWrapper";
import { getSession } from "next-auth/react";
import { Note } from "@/types/noteType";

/**
 * Update Note of a lesson 
 * @returns 
 */
export const useUpdateNoteByLesson = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (noteData: Note) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (noteData: Note) => {
        const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}note/update/${noteData.userId}/${noteData.courseId}/${noteData.lessonId}`;

        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const session = await getSession();
            const token = session?.accessToken;

            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    "id": noteData.id,
                    "userId": noteData.userId,
                    "courseId": noteData.courseId,
                    "lessonId": noteData.lessonId,
                    "content": noteData.content,
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

/**
 * Update merged notes of a course
 * @returns 
 */
export const useUpdateNoteByCourse = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (noteData: Note) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (noteData: Note) => {
        const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}note/update/${noteData.userId}/${noteData.courseId}`;

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
                    "id": noteData.id,
                    "userId": noteData.userId,
                    "courseId": noteData.courseId,
                    "lessonId": noteData.lessonId,
                    "content": noteData.content,
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

/**
 * Update Notes of a User
 * @returns 
 */
export const useUpdateNoteByUser = <T>(): {
    data: T | null;
    error: any;
    isLoading: boolean;
    fetchData: (noteData: Note) => Promise<void>;
} => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (noteData: Note) => {
        const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}note/update/${noteData.userId}/${noteData.courseId}/${noteData.lessonId}`;

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
                    "id": noteData.id,
                    "userId": noteData.userId,
                    "courseId": noteData.courseId,
                    "lessonId": noteData.lessonId,
                    "content": noteData.content,
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