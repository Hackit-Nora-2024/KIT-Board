import Header from '@/component/Header';
import { Button, Flex, Input, Label,} from '@yamada-ui/react';
import React from 'react';

function importform() {
    return (
        <div>
        <Header></Header>
            <Flex flexDir="column" paddingTop="10%"padding="10%">
            <Label fontSize="2xl">FullName</Label>
            <Input id="fullName" type="text" value=""/>
            <Label fontSize="2xl">UserName</Label>
            <Input id="UserName" type="text" value=""/>
            <Label fontSize="2xl">Websute</Label>
            <Input id="Website" type="text" value=""/>

            <Button type="submit" fontSize="2xl" marginTop="10%" >sub mit</Button>

            </Flex>
        </div>
)}
export default importform;