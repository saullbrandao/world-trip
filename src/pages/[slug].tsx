import {
  SimpleGrid,
  Text,
  Tooltip,
  Heading,
  Stack,
  Flex,
  Image,
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
      <Flex
        bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.imageUrl})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        justify={['center', 'center', 'normal']}
        align={['center', 'center', 'normal']}
        bgSize="cover"
        w="100%"
        h={['150px', '500px']}
        position="relative"
        mb={['24px', '80px']}
      >
        <Text
          fontWeight="600"
          fontSize={['28px', '38px', '48px']}
          lineHeight={['48px', '60px', '72px']}
          color="gray.100"
          position={['relative', 'relative', 'absolute']}
          left={['0', '0', '140px']}
          bottom={['0', '0', '60px']}
        >
          {continent.title}
        </Text>
      </Flex>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing={['16px', '43px', '70px']}
        mx={['16px', '16px', '16px', '140px']}
        mb={['40px', '60px', '80px']}
      >
        <Text
          textAlign="justify"
          fontSize={['14px', '19px', '19px', '24px']}
          lineHeight={['21px', '21px', '26px', '36px']}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          ratione, voluptatibus veniam eveniet cumque perferendis aliquam
          mollitia repellat similique dolores rem exercitationem? Dignissimos
          voluptates dolores deleniti, reprehenderit obcaecati accusamus
          necessitatibus cupiditate odit officiis nihil! Lorem ipsum dolor sit
          amet consectetur.
        </Text>
        <Flex justify={['space-between', 'space-around']} align="center">
          <Stack justify="center" align="center" textAlign="left">
            <Text
              as="span"
              fontSize={['24px', '36px', '36px', '48px']}
              lineHeight={['36px', '54px', '54px', '72px']}
              fontWeight="600"
              color="orange.300"
            >
              {continent.totalCountries}
            </Text>
            <Text
              as="span"
              color="gray.600"
              fontSize={['18px', '21px', '24px']}
              lineHeight={['27px', '31px', '36px']}
              fontWeight="600"
            >
              Países
            </Text>
          </Stack>
          <Stack justify="center" align="center" textAlign="center">
            <Text
              as="span"
              fontSize={['24px', '36px', '36px', '48px']}
              lineHeight={['36px', '54px', '54px', '72px']}
              fontWeight="600"
              color="orange.300"
            >
              {continent.totalLanguages}
            </Text>
            <Text
              as="span"
              color="gray.600"
              fontSize={['18px', '21px', '24px']}
              lineHeight={['27px', '31px', '36px']}
              fontWeight="600"
            >
              Línguas
            </Text>
          </Stack>
          <Stack justify="center" align="center" textAlign="center">
            <Text
              as="span"
              fontSize={['24px', '36px', '36px', '48px']}
              lineHeight={['36px', '54px', '54px', '72px']}
              fontWeight="600"
              color="orange.300"
            >
              {continent.topDestinations.length}
            </Text>
            <Flex>
              <Text
                as="span"
                color="gray.600"
                fontSize={['18px', '21px', '24px']}
                lineHeight={['27px', '31px', '36px']}
                fontWeight="600"
                mr="5px"
              >
                Cidades +100
              </Text>
              <Tooltip label="As 100 cidades mais visitadas do mundo">
                <Image src="/images/info.svg" alt="information" />
              </Tooltip>
            </Flex>
          </Stack>
        </Flex>
      </SimpleGrid>

      <Heading
        fontSize={['24px', '30px', '36px']}
        lineHeight={['36px', '45px', '54px']}
        fontWeight="500"
        mx={['16px', '140px']}
        mb={['20px', '30px', '40px']}
      >
        Cidades +100
      </Heading>
      <Wrap mb="35px" mx={['60px', '140px']} flexWrap="wrap">
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
