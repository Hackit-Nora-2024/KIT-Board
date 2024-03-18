import { ServerSupabase } from "@/libs/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
    "use server"
    const PostData = await request.formData()
    const user = await ServerSupabase.auth.getUser()
    const UserId = user.data.user?.id as string
    const NumberOnlyID = UserId.replaceAll("-", "")
    const response = await ServerSupabase.from("posts")
        .insert({
            title : PostData.get("title")?.toString() || "No Title",
            content: PostData.get("content")?.toString() || "No Content",
            user_id: parseInt(NumberOnlyID)
        }).single()
    
    if((await response).error) throw (await response).error
    return Response.json(response.data)
    
}

export async function GET(request: Request) {
    "use server"
    const result = await ServerSupabase.from("posts").select()
    if(result.error) throw result.error
    return Response.json(result.data)
}

export async function DELETE(request: Request) {
    "use server"
    const formRequest = await request.formData()
    const postId = formRequest.get("id")?.toString()
    const result = await ServerSupabase.from("posts").delete().match({id: postId})
    if(result.error) throw result.error
    return Response.json(result.status)
}



