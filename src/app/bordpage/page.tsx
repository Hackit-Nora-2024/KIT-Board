"use client";
import React, { useContext }  from "react"
import { Box, Spacer, Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"
import Bord from "@/component/Bord";
import Modal from "@/component/Modal";
import ArticlePostForm from "@/component/ArticlePostForm";
import { Database } from "@/types/supabase";
import Header from "@/component/navbar";
import { PostDataContext } from "@/provider/SupabaseDataProvider";
import { ClientSupabase } from "@/libs/supabase.client";
import { useRouter } from "next/router";


function BordPage(){
    const router = useRouter()  
    const postDatus = useContext(PostDataContext)
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
                <MenuItem onClick={() => {
                    ClientSupabase.auth.signOut()
                    router.push("/")
                }}>
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
        </Flex>
        <Modal></Modal>
        </div>
    )
}
export default BordPage;