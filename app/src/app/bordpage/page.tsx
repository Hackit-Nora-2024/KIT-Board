import React  from "react"
import { Box, Container, Center, Spacer, Heading,Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"
import { ScrollArea } from "@yamada-ui/react"
import Bord from "@/component/Bord";

const BordPage = () =>{
    return(
        <body>
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
            <Bord num={"No.001"} name={"@user_name"} title={"AIによって生成された文章"} article={"青い空の下で、風は静かに吹き抜ける。木々がそよぎ、鳥たちがさえずる。太陽は穏やかに輝き、草原は緑色に輝いている。人々は笑顔で手を振り合い、幸せな時を過ごしている。夢や希望が空に舞い、未来への道を切り拓いている。"} date={"a"}></Bord>
            <Bord num={"No.002"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.003"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.004"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.004"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.004"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.004"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
            <Bord num={"No.004"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
        </Flex>
        </body>
    )
}
export default BordPage;