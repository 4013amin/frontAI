// middleware.ts
import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value
  const pathname = request.nextUrl.pathname

  //   if not login redirect to login page
  if (pathname.startsWith("/panel") && !authToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  //   if login redirect to panel page
  if (
    (pathname.startsWith("/auth")) && authToken
  ) {
    return NextResponse.redirect(new URL("/panel", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/panel/:path*",
    "/auth/:path"
  ]
}