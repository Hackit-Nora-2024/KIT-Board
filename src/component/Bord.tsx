import { Box, Container, Center, Spacer, Heading,Text, useMediaQuery} from "@yamada-ui/react";
import React  from "react"
type BordProps = {
    name: string;
    title: string;
    article: string;
    date: string;
}

export default function Bord({name, title,article,date}: BordProps) {
    const [isLage] = useMediaQuery(
        ["(min-width: 1280px)"]
    )
    return(
        <Box boxShadow="xs" color="Black" width={isLage?"45%":"100%"} height="50%" margin="2.5%" background="#FBFBFB" rounded="md">
        <Container>
            <Text>{name}</Text> {/* ユーザーID*/}
            <Heading size="lg" borderBottom="1px solid">{title}</Heading> {/*記事のタイトル*/}
            <Text size="md">{article}</Text>{/*概要*/}
            <Text textAlign="right" color="#d3d5da">{date}</Text> {/* 日付*/}
        </Container>
        </Box>
    )
}