import { SimpleGrid, Divider, Text, Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Banner } from '../components/Banner'
import { ContinentsCarousel } from '../components/ContinentsCarousel'
import { Header } from '../components/Header'
import { TravelType } from '../components/TravelType'

const continents = [
  {
    title: 'América do Norte',
    id: '0',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://images.unsplash.com/26/city-scape.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'América do Sul',
    id: '1',
    description: 'Consectetur adipisicing elit',
    imageUrl:
      'https://images.unsplash.com/photo-1547212543-344cfbef90b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Ásia',
    id: '2',
    description: 'Arum natus in dolor dicta',
    imageUrl:
      'https://images.unsplash.com/photo-1533132824464-d286d371ffe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'África',
    id: '3',
    description: 'Beatae sapiente nostrum quibusdam',
    imageUrl:
      'https://images.unsplash.com/photo-1575551424332-49525ff5c379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Europa',
    id: '4',
    description: 'Minima doloribus sunt',
    imageUrl:
      'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80',
  },
  {
    title: 'Oceania',
    id: '5',
    description: 'Maxime officiis suscipit autem',
    imageUrl:
      'https://images.unsplash.com/photo-1528800223624-764941bb49db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
]

const Home: NextPage = () => {
  return (
    <Flex maxW="100vw" direction="column">
      <Header />
      <Banner />
      <SimpleGrid as="ul" columns={5} my="120" mx="140">
        <TravelType
          image="/images/cocktail.svg"
          imageAlt="cocktail"
          title="vida noturna"
        />
        <TravelType image="/images/surf.svg" imageAlt="surf" title="praia" />
        <TravelType
          image="/images/building.svg"
          imageAlt="building"
          title="moderno"
        />
        <TravelType
          image="/images/museum.svg"
          imageAlt="museum"
          title="clássico"
        />
        <TravelType
          image="/images/earth.svg"
          imageAlt="earth"
          title="e mais..."
        />
      </SimpleGrid>
      <Divider
        width="90px"
        border="2px solid"
        borderColor="gray.600"
        opacity="1"
        mx="auto"
      />
      <Text
        textAlign="center"
        my="52px"
        fontSize="36px"
        lineHeight="54px"
        fontWeight={500}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Box
        mx="auto"
        mb="10"
        w="100%"
        maxW="1240px"
        h="450px"
        bg="gray.600"
        textAlign="center"
        align="center"
      >
        <ContinentsCarousel continents={continents} />
      </Box>
    </Flex>
  )
}

export default Home
