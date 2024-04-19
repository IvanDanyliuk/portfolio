import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    if(req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.email !== process.env.CREDENTIALS_EMAIL!) {
      return NextResponse.rewrite(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.email === process.env.CREDENTIALS_EMAIL!,
    },
    secret: process.env.GITHUB_CLIENT_SECRET!
  }
);

export const config = {
  matcher: ['/admin', '/admin/:path*']
};