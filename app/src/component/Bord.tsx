import { Box, Container, Center, Spacer, Heading,Text} from "@yamada-ui/react";
import React  from "react"


type BordProps = {
    num: string;
    name: string;
    title: string;
    article: string;
    date: string;
}

export default function Bord({num, name, title,article,date}: BordProps) {
    return(
        <Box boxShadow="xs" color="Black" width="45%" height="50%" margin="2.5%" background="#FBFBFB" rounded="md">
        <Container>
        <Center >
            <Text>{num}</Text> {/* 番号*/}
            <Spacer />
            <Text>{name}</Text> {/* ユーザーID*/}
        </Center>
            <Heading size="lg" borderBottom="1px solid">{title}</Heading> {/*記事のタイトル*/}
            <Text size="md">{article}</Text>{/*概要*/}
            <Text textAlign="right" color="#d3d5da">{date}</Text> {/* 日付*/}
        </Container>
        </Box>
    )
}