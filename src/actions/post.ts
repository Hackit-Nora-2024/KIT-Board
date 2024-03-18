import { ClientSupabase } from "@/libs/supabase"

export default function ServerPost(formData: FormData){
    const PostData = formData
    /* console.log(PostData.get("title")?.toString(), PostData.get("content")?.toString()) */
    if(!ClientSupabase) throw new Error("Supabase Client is not initialized") 
    ClientSupabase.auth.getUser().then((res) => {
        const UserId = res.data.user?.id as string
        const NumberOnlyID = UserId.replaceAll("-", "")
        const response = ClientSupabase.from("posts")
        .insert({
            title : PostData.get("title")?.toString() || "No Title",
            content: PostData.get("content")?.toString() || "No Content",
            user_id: parseInt(NumberOnlyID)
        }).single()
        response.then((res) => {
            if(res.error) throw res.error
            const ResponseData = {
                status: res.status,
                statusText: res.statusText,
                error: res.error
            }
            return ResponseData
        })

    })
}