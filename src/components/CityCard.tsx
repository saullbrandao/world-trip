import { Stack, Flex, Text, Image } from '@chakra-ui/react'

export const CityCard = () => {
  return (
    <Stack w="256px" borderRadius="4px" spacing={0} mb="48px">
      <Image
        borderTopRadius="4px"
        src="/images/background.png"
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
            Londres
          </Text>
          <Text
            fontFamily="Barlow"
            color="gray.300"
            fontWeight="500"
            lineHeight="25px"
          >
            Reino Unido
          </Text>
        </Stack>
        <Text alignSelf="center">Bandeira</Text>
      </Flex>
    </Stack>
  )
}
