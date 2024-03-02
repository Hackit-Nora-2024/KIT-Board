"use server"
import { Database } from "@/types/supabase"
import { createServerComponentClient,createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const ServerSupabase = createServerComponentClient<Database>({cookies})
const ClientSupabase = createClientComponentClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
})
export {ServerSupabase,ClientSupabase}

