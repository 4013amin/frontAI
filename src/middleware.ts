// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const pathname = request.nextUrl.pathname

  // if not login redirect to login page
  if (pathname.startsWith('/panel') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // if login redirect to panel page
  if (
    (pathname === '/login') &&
    token
  ) {
    return NextResponse.redirect(new URL('/panel', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/panel/:path*',
    '/login',
  ],
}
