import { NextRequest, NextResponse } from 'next/server';

import { appPaths } from '@/configs/appPaths';
import { cookiesUser } from '@/containers/auth/configs';

const authPaths = [appPaths.auth.login, appPaths.auth.setNewPassword];

export async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);

    const user = request.cookies.get(cookiesUser)?.value;

    if (authPaths.includes(request.nextUrl.pathname)) {
        if (!user)
            return NextResponse.next({
                request: {
                    headers: requestHeaders
                }
            });
        return NextResponse.redirect(new URL(appPaths.meals, request.url));
    }

    if (!user) {
        return NextResponse.redirect(new URL(appPaths.auth.login, request.url));
    }

    if (request.nextUrl.pathname === appPaths.home) {
        return NextResponse.redirect(new URL(appPaths.meals, request.url));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|webp|svg|ico|gif)$).*)']
};
