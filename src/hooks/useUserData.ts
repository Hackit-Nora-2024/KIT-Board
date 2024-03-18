import {useState,use} from "react"
import { ClientSupabase } from "@/libs/supabase"
import { User } from "@supabase/supabase-js"

export default function useUserData(jwt?: string){
    const [UserData,setUserData] = useState<User | null>(null)
    ClientSupabase.auth.getUser().then(res => setUserData(res.data.user))
    return UserData
}