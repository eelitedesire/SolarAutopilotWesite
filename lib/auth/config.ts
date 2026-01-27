import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.log('Missing credentials')
          return null
        }

        const validUsername = process.env.ADMIN_USERNAME
        const validPassword = process.env.ADMIN_PASSWORD

        console.log('Login attempt:', credentials.username)
        console.log('Valid username:', validUsername)
        console.log('Password exists:', !!validPassword)

        if (credentials.username !== validUsername) {
          console.log('Username mismatch')
          return null
        }

        if (credentials.password !== validPassword) {
          console.log('Password mismatch')
          return null
        }
        
        return {
          id: '1',
          name: 'Admin',
          email: 'admin@solarautopilot.com',
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
