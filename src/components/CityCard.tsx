import { Stack, Flex, Text, Image } from '@chakra-ui/react'

export const CityCard = () => {
  return (
    <Stack w="256px" borderRadius="4px" spacing={0}>
      <Image
        borderTopRadius="4px"
        src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
