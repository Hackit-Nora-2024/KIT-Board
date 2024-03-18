'use client'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from "@/types/supabase"

export default function AuthForm() {
    const supabase = createClientComponentClient<Database>()
    const router = useRouter()
    const handler = async() => {
        const { data: session } = await supabase.auth.getSession()
        if (session) {
            const result = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'http://localhost:3000/api/auth/callback'
                }
            })
            if (result.error) {
                console.error("ログイン時に",result.error)
            } else {
                router.push(`${process.env.FIRST_REDIRET}`)
            }
        }
    }

    return (
        <>
            <button onClick={handler}>
                Sign In
            </button>
        </>
    )
}