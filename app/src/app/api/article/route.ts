import { Database } from "@/types/supabase"
import { createClient } from "@supabase/supabase-js"
import { NextRequest } from "next/server"
const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

async function POST(req: NextRequest) {
    const PostData = req.formData()
    const user = await supabase.auth.getUser()
    const response = supabase.from("posts")
        .insert({
            author_icon_url: user.data.user?.user_metadata.avatar_url,
            post_tags: PostData.post_tags, 
            post_text: PostData.post_text,
            post_time: new Date().toISOString()
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

