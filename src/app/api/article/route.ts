"use server"
import { Database } from "@/types/supabase"
import { ServerSupabase } from "@/libs/supabase"
import { NextRequest, NextResponse } from "next/server"
/*const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)*/

async function POST(req: NextRequest) {
    const PostData = await req.formData()
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

    const ResponseData = {
        status: (await response).status,
        statusText: (await response).statusText,
        error: (await response).error
    }
    // return ResponseData
}

async function GET() {
    const result = await ServerSupabase.from("posts").select()
    if(result.error) throw result.error
    return Response.json(result.data)
}

async function DELETE(req: NextRequest) {
    const formRequest = await req.formData()
    const postId = formRequest.get("id")?.toString()
    const result = await ServerSupabase.from("posts").delete().match({id: postId})
    if(result.error) throw result.error
    return console.info("Delete Success!")
}

export { POST, GET, DELETE }

