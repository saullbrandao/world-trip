import {
  SimpleGrid,
  Text,
  Box,
  Heading,
  Stack,
  Flex,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { CityCard } from '../components/CityCard'
import { Header } from '../components/Header'
import { api } from '../services/api'

type TopDestinations = {
  name: string
  country: string
  imageUrl: string
  countryFlag: string
}

type ContinentType = {
  title: string
  id: string
  slug: string
  totalCountries: number
  totalLanguages: number
  description: string
  imageUrl: string
  topDestinations: TopDestinations[]
}

type ContinentProps = {
  continent: ContinentType
}

const Continent: NextPage<ContinentProps, JSX.Element> = ({ continent }) => {
  return (
    <Flex maxW="100vw" direction="column">
      <Header showBackButton />
      <Box
        bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.imageUrl})`}
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
          {continent.title}
        </Text>
      </Box>
      <SimpleGrid columns={2} spacing="70px" mx="140px" mb="80px">
        <Text textAlign="justify" fontSize="24px" lineHeight="36px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          ratione, voluptatibus veniam eveniet cumque perferendis aliquam
          mollitia repellat similique dolores rem exercitationem? Dignissimos
          voluptates dolores deleniti, reprehenderit obcaecati accusamus
          necessitatibus cupiditate odit officiis nihil! Lorem ipsum dolor sit
          amet consectetur.
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
              {continent.totalCountries}
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
              {continent.totalLanguages}
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
              {continent.topDestinations.length}
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
      <Wrap mb="35px" mx="140px" flexWrap="wrap">
        {continent.topDestinations.map(city => (
          <WrapItem key={city.name}>
            <CityCard city={city} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<ContinentType[]>('/continents')
  const paths = response.data.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    }
  }

  const { slug } = params

  const response = await api.get<ContinentType[]>('/continents', {
    params: {
      slug,
    },
  })

  return {
    props: {
      continent: response.data[0],
    },
  }
}

export default Continent
