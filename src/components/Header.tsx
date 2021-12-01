import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import logoImg from '../../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import backIcon from '../../public/images/back.svg'

type HeaderProps = {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Flex
      w="100%"
      h={['50px', '75px', '75px', '100px']}
      mx="auto"
      align="center"
      justify="center"
      position="relative"
    >
      {showBackButton && (
        <Link href="/" passHref>
          <ChakraLink
            aria-label="button"
            position="absolute"
            left={['16px', '40px', '40px', '140px']}
            textDecoration="none"
            w={['16px', '24px', '24px', '32px']}
            h={['16px', '24px', '24px', '32px']}
          >
            <Image src={backIcon} alt="arrow back icon" />
          </ChakraLink>
        </Link>
      )}
      <Flex w={['80px', '130px', '130px', '180px']}>
        <Image src={logoImg} alt="world trip"></Image>
      </Flex>
    </Flex>
  )
}
