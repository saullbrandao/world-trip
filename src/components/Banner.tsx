import {
  Box,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'

export const Banner = () => {
  const [isLargerThan768] = useMediaQuery([
    '(min-width: 768px)',
    '(display-mode: browser)',
  ])

  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={40}
      px={['16px', '40px', '40px', '140px']}
      align="center"
      justify="center"
      bgImg="url('/images/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={['160px', '250px', '340px']}
    >
      <Stack alignSelf="center" textAlign="left">
        <Heading
          fontSize={['20px', '28px', '36px']}
          lineHeight={['30px', '42px', '54px']}
          fontWeight="500"
          color="gray.100"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontSize={['14px', '16px', '20px']}
          lineHeight={['21px', '25px', '30px']}
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      {isLargerThan768 && (
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
      )}
    </SimpleGrid>
  )
}
