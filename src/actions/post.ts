"use server"
import { ServerSupabase } from "@/libs/supabase.server"

async function ServerPost(formData: FormData){
    const PostData = formData
    /* console.log(PostData.get("title")?.toString(), PostData.get("content")?.toString()) */
    if(!ServerSupabase) throw new Error("Supabase Client is not initialized") 
    const user = await ServerSupabase.auth.getUser()
    const UserId = user.data.user?.id as string
    const NumberOnlyID = UserId.replaceAll("-", "")
    const response = await ServerSupabase.from("posts")
        .insert({
            title : PostData.get("title")?.toString() || "No Title",
            content: PostData.get("content")?.toString() || "No Content",
            user_id: parseInt(NumberOnlyID)
        }).single()
    if(response.error) throw new Error(response.error.message)
    return response.data
}

export default ServerPost