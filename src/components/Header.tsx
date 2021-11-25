import { Flex } from '@chakra-ui/react'
import logoImg from '../../public/images/logo.svg'
import Image from 'next/image'

export const Header = () => {
  return (
    <Flex w="100%" mx="auto" my="7" align="center" justify="center">
      <Image src={logoImg} alt="world trip"></Image>
    </Flex>
  )
}
