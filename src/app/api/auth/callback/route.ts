"use server"
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

async function getCookieData() {
  const cookieData = cookies()
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData)
    }, 1000)
  )
}

export async function GET(req: NextRequest) {
  const cookieStore = await getCookieData() as ReadonlyRequestCookies
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(new URL("/bordpage", req.url))
}