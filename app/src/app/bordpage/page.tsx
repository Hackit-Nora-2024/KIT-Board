import React  from "react"
import { Box, Container, Center, Spacer, Heading,Text, Button, Menu, MenuButton, MenuItem, MenuList} from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react"

import Bord from "@/component/Bord";

const BordPage = () =>{
    return(
        <div>
        <Box p="md" bg="black" >
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
        </Box>
        <Flex gap="wrap" width="100%">

        <Bord num={"a"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
        <Bord num={"a"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>

        <Bord num={"a"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
        <Bord num={"a"} name={"a"} title={"a"} article={"a"} date={"a"}></Bord>
        </Flex>
        
        </div>
    )
}
export default BordPage;