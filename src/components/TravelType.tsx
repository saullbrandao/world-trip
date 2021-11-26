import { Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

type TravelTypeProps = {
  image: string
  imageAlt: string
  title: string
}

export const TravelType = ({ image, imageAlt, title }: TravelTypeProps) => {
  return (
    <Stack as="li" align="center">
      <Image src={image} alt={imageAlt} width={85} height={85} />
      <Text color="gray.600" fontWeight={600} fontSize={24} lineHeight="36px">
        {title}
      </Text>
    </Stack>
  )
}
