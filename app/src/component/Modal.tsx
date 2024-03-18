"use client"
import { Button, Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader, Textarea, Input, Center} from "@yamada-ui/react"
import { useDisclosure } from "@yamada-ui/react"
import React  from "react"
import ArticlePostForm from "./ArticlePostForm"

export default function Modal(){

  const {isOpen,onOpen,onClose} = useDisclosure()

  return (
    <>
      <Button pos="fixed" bottom="5" right="5" rounded="md" bg="primary" color="white"fontSize="2xl" size="lg" onClick={onOpen}>投稿する</Button>
  
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <ModalHeader >投稿</ModalHeader>
            <Center>
            <ArticlePostForm></ArticlePostForm>
            </Center> 
            <ModalFooter></ModalFooter>      
            <ModalFooter></ModalFooter>    
      </ModalComponent>
    </>

  )}
  