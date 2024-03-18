import { Database } from "@/types/supabase"
import { createClient } from "@supabase/supabase-js"
import { NextRequest } from "next/server"
const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

async function POST(req: NextRequest) {
    const PostData = await req.formData()
    const user = await supabase.auth.getUser()
    const UserId = user.data.user?.id as string
    const NumberOnlyID = UserId.replaceAll("-", "")
    const response = await supabase.from("posts")
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
    return ResponseData
}
function GET() {}
function DELETE() {}

export { POST, GET, DELETE }

