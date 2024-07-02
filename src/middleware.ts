import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

export default async function Middleware(req: NextRequest) {
  const session = await auth()

  if (!session) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*', '/((?!api/auth).*)', '/((?!signin).*)'],
}
