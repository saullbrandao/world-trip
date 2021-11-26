import { Box, SimpleGrid, Image, Stack, Text, Heading } from '@chakra-ui/react'

export const Banner = () => {
  return (
    <SimpleGrid
      columns={2}
      spacing={40}
      px="140px"
      align="center"
      justify="center"
      bgImg="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="335"
    >
      <Stack alignSelf="center" textAlign="left">
        <Heading color="gray.100">
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text color="gray.200">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      <Box position="relative" alignSelf="end" w="100%" h="100%">
        <Image
          src="/images/airplane.svg"
          alt="airplane"
          position="absolute"
          alignSelf="end"
          transform="rotate(3deg)"
          right="0"
          bottom="-8"
        />
      </Box>
    </SimpleGrid>
  )
}
