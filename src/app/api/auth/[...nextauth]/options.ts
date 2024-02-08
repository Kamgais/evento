import { authenticate } from '@/lib/authenticate';
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'


export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials) {
              const user = await authenticate(credentials);
              console.log(user)
              return {
                id: user.id,
                name: user.username,
                email: '',
                image: ''
              }
            }
        })
    ],
    
}