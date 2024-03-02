import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import AccountView from "@/component/AccountInfoView";

export default async function Account(){
    const supabase = createServerComponentClient<Database>({cookies})
    const {data: {user}} = await supabase.auth.getUser()
    return (
        <></>
    )
}