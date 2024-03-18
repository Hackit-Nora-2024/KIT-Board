import React, { useState }  from "react"
import { Box, Spacer, Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"
import Bord from "@/component/Bord";
import Modal from "@/component/Modal";
import ArticlePostForm from "@/component/ArticlePostForm";
import { Database } from "@/types/supabase";
import Header from "@/component/navbar";

const BordPage = async() =>{
    /* type PostDataType = Database["public"]["Tables"]["posts"]["Row"]
    const fetchPostData = await fetch("http://localhost:3000/api/article", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const postData = await fetchPostData.json() as PostDataType[] */
    return(
        <div>
        <Header></Header>
    
        {/* <Flex wrap="wrap" paddingTop="5%">
            {postData.map((post,idx) => {
                return <Bord name={"@user_name"} title={post.title} article={post.content} date={post.created_at} key={idx}/>
            })}
        </Flex> */}
        <Modal></Modal>
        </div>
    )
}
export default BordPage;