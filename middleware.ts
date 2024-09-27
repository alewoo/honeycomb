import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from 'utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  console.log('Middleware hit, host:', host)
  const url = request.nextUrl.clone()

  // Handle subdomain routing
  if (host === 'partner.startup.exchange') {
    url.pathname = `/partner${url.pathname}`
    return NextResponse.rewrite(url)
  }

  if (host === 'admin.startup.exchange') {
    url.pathname = `/admin${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // Update session for all other routes
  const response = await updateSession(request)

  // If updateSession returns a response, return it
  if (response) return response

  // Otherwise, continue with the request
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
