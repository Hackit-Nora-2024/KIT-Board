import React, { useState }  from "react"
import { Box, Spacer, Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"
import Bord from "@/component/Bord";
import Modal from "@/component/Modal";
import ArticlePostForm from "@/component/ArticlePostForm";
import { Database } from "@/types/supabase";

const BordPage = async() =>{
    type PostDataType = Database["public"]["Tables"]["posts"]["Row"]
    const fetchPostData = await fetch("http://localhost:3000/api/article", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const postData = await fetchPostData.json() as PostDataType[]
    return(
        <div>
        <Box p="md" bg="black" position="fixed" width="100%">
        <Flex gap="wrap">
        <Text color="white" fontSize="4xl">タイトル</Text>
        <Spacer/>
        <Menu>
            <MenuButton
                as={Button}
                >Menu
            </MenuButton>
                <MenuList>
                <MenuItem>Set status</MenuItem>
                <MenuItem>Edit Profile</MenuItem>
                <MenuItem>Preferences</MenuItem>
            </MenuList>
        </Menu>
        </Flex>
        </Box>
    
        <Flex wrap="wrap" paddingTop="5%">
            {postData.map((post,idx) => {
                return <Bord name={"@user_name"} title={post.title} article={post.content} date={post.created_at} key={idx}/>
            })}
        </Flex>
        <Modal></Modal>
        </div>

    )
}
export default BordPage;