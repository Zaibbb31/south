import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect the thank-you route
  if (request.nextUrl.pathname.startsWith('/thank-you')) {
    const hasSubmitted = request.cookies.get('form_submitted');
    
    // If the user hasn't submitted the form, redirect to the contact page
    if (!hasSubmitted || hasSubmitted.value !== 'true') {
      return NextResponse.redirect(new URL('/contact', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/thank-you'],
};
