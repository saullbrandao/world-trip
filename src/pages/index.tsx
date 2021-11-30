import { Grid, GridItem, Divider, Text, Box, Flex } from '@chakra-ui/react'
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
      <Grid
        as="ul"
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
        justifyItems="center"
        my={['36px', '76px', '120px']}
        mx={['50px', '50px', '140px']}
      >
        <GridItem
          as="li"
          listStyleType="none"
          justifySelf={['left', 'left', 'center']}
        >
          <TravelType
            image="/images/cocktail.svg"
            imageAlt="cocktail"
            title="vida noturna"
          />
        </GridItem>
        <GridItem
          as="li"
          listStyleType="none"
          justifySelf={['right', 'right', 'center']}
        >
          <TravelType image="/images/surf.svg" imageAlt="surf" title="praia" />
        </GridItem>
        <GridItem
          as="li"
          listStyleType="none"
          justifySelf={['left', 'left', 'center']}
        >
          <TravelType
            image="/images/building.svg"
            imageAlt="building"
            title="moderno"
          />
        </GridItem>

        <GridItem
          as="li"
          listStyleType="none"
          justifySelf={['right', 'right', 'center']}
        >
          <TravelType
            image="/images/museum.svg"
            imageAlt="museum"
            title="clássico"
          />
        </GridItem>
        <GridItem
          as="li"
          listStyleType="none"
          colSpan={[2, 2, 1]}
          justifySelf="center"
        >
          <TravelType
            image="/images/earth.svg"
            imageAlt="earth"
            title="e mais..."
          />
        </GridItem>
      </Grid>
      <Divider
        width={['60px', '90px']}
        border={['1px solid', '2px solid']}
        borderColor="gray.600"
        opacity="1"
        mx="auto"
      />
      <Text
        textAlign="center"
        my={['24px', '52px']}
        mx={['39px', '39px', '140px']}
        fontSize={['20px', '28px', '36px']}
        lineHeight={['30px', '42px', '54px']}
        fontWeight={500}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Box
        mx="auto"
        mb={['24px', '40px']}
        w="100%"
        maxW="1240px"
        h={['250px', '450px']}
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
