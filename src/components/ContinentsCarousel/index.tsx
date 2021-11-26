import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Heading, Text, Stack } from '@chakra-ui/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type ContinentInfo = {
  id: string
  title: string
  description?: string
  imageUrl?: string
}

type ContinentCarouselProps = {
  continents: ContinentInfo[]
}

export const ContinentsCarousel = ({ continents }: ContinentCarouselProps) => {
  return (
    <Swiper
      style={{
        width: '100%',
        height: '100%',
      }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Stack
            w="100%"
            h="100%"
            bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${continent.imageUrl})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify="center"
            spacing="16px"
          >
            <Heading
              color="gray.100"
              fontSize="48px"
              lineHeight="72px"
              fontWeight="bold"
            >
              {continent.title}
            </Heading>
            <Text
              color="gray.200"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="bold"
            >
              {continent.description}
            </Text>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
