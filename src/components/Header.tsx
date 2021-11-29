import { Flex, Link as ChakraLink, IconButton, Text } from '@chakra-ui/react'
import logoImg from '../../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import backIcon from '../../public/images/back.svg'

type HeaderProps = {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Flex w="100%" mx="auto" my="7" align="center" justify="center">
      {showBackButton && (
        <Link href="/" passHref>
          <ChakraLink
            aria-label="button"
            position="absolute"
            left="140px"
            textDecoration="none"
          >
            <Image src={backIcon} alt="arrow back icon" />
          </ChakraLink>
        </Link>
      )}
      <Image src={logoImg} alt="world trip"></Image>
    </Flex>
  )
}
