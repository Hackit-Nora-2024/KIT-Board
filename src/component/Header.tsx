import { Box, Flex, Spacer, Menu, MenuButton, Button, MenuList, MenuItem,Text} from '@yamada-ui/react';
import React from 'react';

export default function  Header() {
  return (
    <div>
      <Box p="md" bg="black" position="fixed" width="100%">
        <Flex gap="wrap">
        <Text color="white" fontSize="4xl">タイトル</Text>
        <Spacer/>
        <Menu>
            <MenuButton
                as={Button}
                backgroundColor="primary" color="white">Menu
            </MenuButton>
                <MenuList>
                <MenuItem>アカウント</MenuItem>
                <MenuItem>
                    <Button width="100%">LogOut</Button>
                    {/* ボタンと同じ役割です。 */}
                </MenuItem>
            </MenuList>
        </Menu>
        </Flex>
        </Box >
    </div>
  );
}
