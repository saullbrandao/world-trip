import { Stack, Text, Box, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

type TravelTypeProps = {
  image: string
  imageAlt: string
  title: string
}

export const TravelType = ({ image, imageAlt, title }: TravelTypeProps) => {
  const [isLargerThan768] = useMediaQuery([
    '(min-width: 768px)',
    '(display-mode: browser)',
  ])

  return (
    <Stack
      flexDirection={['row', 'row', 'column']}
      align="center"
      justify="center"
    >
      {isLargerThan768 ? (
        <Image src={image} alt={imageAlt} width={85} height={85} />
      ) : (
        <Box w="8px" h="8px" bg="orange.300" borderRadius="50%" mr="8px" />
      )}
      <Text
        color="gray.600"
        fontWeight={600}
        fontSize={['18px', '21px', '21px', '24px']}
        lineHeight={['27px', '31px', '31px', '36px']}
        textAlign="center"
      >
        {title}
      </Text>
    </Stack>
  )
}
