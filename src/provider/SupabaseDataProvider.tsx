"use client"
import { ClientSupabase, PostData } from "@/libs/supabase.client";
import { User } from "@supabase/supabase-js";
import { createContext,useState } from "react";

export const UserDataContext = createContext<User | null>(null);
export const PostDataContext = createContext<PostData[] | null>([]);

export default function SupabaseDataProvider({children}:{children:React.ReactNode}) {
    const [userData,setUserData] = useState<User | null>(null)
    const [postData,setPostData] = useState<PostData[] | null>([])
    
    ClientSupabase.from('posts').select().order("created_at",{ascending: true}).then((result) => {setPostData(result.data)})
    ClientSupabase.auth.getUser().then((result) => {setUserData(result.data.user)})
    return(
        <UserDataContext.Provider value={userData}>
            <PostDataContext.Provider value={postData}>
                {children}
            </PostDataContext.Provider>
        </UserDataContext.Provider>
    )
}