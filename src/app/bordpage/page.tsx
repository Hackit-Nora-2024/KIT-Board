"use client";
import React, { useContext }  from "react"
import { Box, Spacer, Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"
import Bord from "@/component/Bord";
import Modal from "@/component/Modal";
import ArticlePostForm from "@/component/ArticlePostForm";
import { Database } from "@/types/supabase";
import Header from "@/component/navbar";

export const dynamic = 'force-dynamic'


async function BordPage(){
    /*type PostDataType = Database["public"]["Tables"]["posts"]["Row"]
    const fetchPostData = await fetch("http://localhost:3000/api/article", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const postData = await fetchPostData.json() as PostDataType[]*/
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
                <MenuItem>
                    <Button>LogOut</Button>
                    {/* ボタンと同じ役割です。 */}
                </MenuItem>
            </MenuList>
        </Menu>
        </Flex>
        </Box>
    
        <Flex wrap="wrap" paddingTop="5%">
            {postDatus !== null && postDatus.map((post,idx) => {
                return <Bord name={"@user_name"} title={post.title} article={post.content} date={post.created_at} key={idx}/>
            })}
        </Flex> */}
        </div>
    )
}
export default BordPage;