"use server"
import { Database } from "@/types/supabase"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const ServerSupabase = createServerComponentClient<Database>({cookies})

export {ServerSupabase}
