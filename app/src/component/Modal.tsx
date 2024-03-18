import { Button, Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader, Textarea, Input} from "@yamada-ui/react"
import { useDisclosure } from "@yamada-ui/react"
import React  from "react"

export default function Modal(){

  const {isOpen,onOpen,onClose} = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>投稿する</Button>
  
      <ModalComponent isOpen={isOpen} onClose={onClose}>
        <ModalHeader >ドラゴンボール</ModalHeader>
  
        <ModalBody>
        <Input placeholder="タイトル" />
        <Textarea placeholder="記事"></Textarea>
        </ModalBody>
  
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </ModalComponent>
    </>

  )}
  