import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize(credentials: any, req) {
        if(credentials.email === process.env.CREDENTIALS_EMAIL! && credentials.password === process.env.CREDENTIALS_PASSWORD!) {
          return {
            id: 'admin',
            name: 'Ivan Danyliuk',
            email: process.env.CREDENTIALS_EMAIL!
          }
        } else {
          return null;
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    })
  ],
  secret: process.env.GITHUB_CLIENT_SECRET!,
});

export { handler as GET, handler as POST };