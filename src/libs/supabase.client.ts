import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const ClientSupabase = createClientComponentClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
})

async function useInAllPostData(){
    const result = await ClientSupabase.from('posts').select()
    return result.data
}

async function useInUserData(){
    const result = await ClientSupabase.auth.getUser()
    return result.data.user
}

type PostData = Database["public"]["Tables"]["posts"]["Row"]
export {ClientSupabase,useInAllPostData,useInUserData,type PostData}