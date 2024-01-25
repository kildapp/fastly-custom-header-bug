import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const response = NextResponse.next()
    response.headers.set('x-hello-from-middleware', 'hello')
    return response
}