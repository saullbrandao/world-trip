import { SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelType } from '../components/TravelType'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SimpleGrid as="ul" columns={5} mt="114" mx="140">
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
    </>
  )
}

export default Home
