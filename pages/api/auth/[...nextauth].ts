import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {fetchWrapper} from "@/utils/fetchWrapper";
import {router} from "next/client";

interface User {
    access_token: string
}

export default NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'jsmith@example.com',
                },
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials: any, req) {
                try {
                    const jsonData = {
                        email: credentials?.email,
                        password: credentials?.password,
                    }

                    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT}user/login`
                    const config = {
                        method: 'POST',
                        body: JSON.stringify(jsonData),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                    const user: any = await fetchWrapper(endpoint, config)
                    console.log('API response data:', user)
                    if (user) {
                        return user
                    }
                } catch (error: any) {
                    console.log('API response status:', error?.status)
                    throw new Error(error?.message)
                }

                return null
            }


        }),
    ],

    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return !!user;
        },
        async jwt({token, account, profile, user}) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                const typeUser = user as any;
                token.accessToken = typeUser.token
                console.log(token, 'toto')
            }
            return token
        },

        async session({session, token, user}: any) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            console.log(session)
            return session
        }
    },

    theme: {
        colorScheme: 'auto',
        brandColor: '',
        logo: '/vercel.svg',
    },
    debug: process.env.NODE_ENV === 'development',
})
