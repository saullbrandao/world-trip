import { Stack, Flex, Text, Image } from '@chakra-ui/react'

type CityCardProps = {
  city: {
    name: string
    country: string
    imageUrl: string
    countryFlag: string
  }
}

export const CityCard = ({ city }: CityCardProps) => {
  return (
    <Stack w="256px" borderRadius="4px" spacing={0} boxShadow="xs">
      <Image
        borderTopRadius="4px"
        src={city.imageUrl}
        alt="city"
        width="256"
        height="173"
      />

      <Flex
        w="100%"
        h="100px"
        justify="space-between"
        px="24px"
        borderBottomRadius="4px"
        border="1px"
        borderTop="none"
        borderColor="orange.300"
      >
        <Stack justify="center">
          <Text
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
          >
            {city.name}
          </Text>
          <Text
            fontFamily="Barlow"
            color="gray.300"
            fontWeight="500"
            lineHeight="25px"
          >
            {city.country}
          </Text>
        </Stack>
        <Image
          alignSelf="center"
          alt={`${city.country} flag`}
          w="30px"
          h="30px"
          boxShadow="xs"
          borderRadius="50%"
          src={city.countryFlag}
        />
      </Flex>
    </Stack>
  )
}
