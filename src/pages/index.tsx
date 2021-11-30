import { SimpleGrid, Divider, Text, Box, Flex } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'

import { Banner } from '../components/Banner'
import {
  ContinentInfo,
  ContinentsCarousel,
} from '../components/ContinentsCarousel'
import { Header } from '../components/Header'
import { TravelType } from '../components/TravelType'
import { api } from '../services/api'

type HomeProps = {
  continents: ContinentInfo[]
}

const Home: NextPage<HomeProps, JSX.Element> = ({ continents }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<ContinentInfo[]>('/continents')
  const continents = response.data

  return {
    props: {
      continents,
    },
  }
}

export default Home
