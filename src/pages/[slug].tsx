import {
  SimpleGrid,
  Text,
  Box,
  Heading,
  Stack,
  Flex,
  Image,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CityCard } from '../components/CityCard'
import { Header } from '../components/Header'

const Continent: NextPage = () => {
  return (
    <Flex maxW="100vw" direction="column">
      <Header showBackButton />
      <Box
        bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="500"
        position="relative"
        mb="80px"
      >
        <Text
          fontWeight="600"
          fontSize="48px"
          lineHeight="72px"
          color="gray.100"
          position="absolute"
          left="140px"
          bottom="60px"
        >
          Europa
        </Text>
      </Box>
      <SimpleGrid columns={2} spacing="70px" mx="140px" mb="80px">
        <Text textAlign="justify" fontSize="24px" lineHeight="36px">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
        <Flex justify="space-around" align="center">
          <Stack justify="center" align="center" textAlign="center">
            <Text
              as="span"
              fontSize="48px"
              lineHeight="72px"
              fontWeight="600"
              color="orange.300"
            >
              50
            </Text>
            <Text
              as="span"
              color="gray.600"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
            >
              Países
            </Text>
          </Stack>
          <Stack justify="center" align="center" textAlign="center">
            <Text
              as="span"
              fontSize="48px"
              lineHeight="72px"
              fontWeight="600"
              color="orange.300"
            >
              60
            </Text>
            <Text
              as="span"
              color="gray.600"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
            >
              Línguas
            </Text>
          </Stack>
          <Stack justify="center" align="center" textAlign="center">
            <Text
              as="span"
              fontSize="48px"
              lineHeight="72px"
              fontWeight="600"
              color="orange.300"
            >
              27
            </Text>
            <Text
              as="span"
              color="gray.600"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="600"
            >
              Cidades +100
            </Text>
          </Stack>
        </Flex>
      </SimpleGrid>

      <Heading mx="140px" mb="40px">
        Cidades +100
      </Heading>
      <Flex mb="35px" mx="140px" flexWrap="wrap" justify="space-between">
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </Flex>
    </Flex>
  )
}

export default Continent
