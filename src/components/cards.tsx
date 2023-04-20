import { Avatar, Card, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Element, Partner } from 'components/ui-elements'

export const CardSm = (props: any) => {
  return (
    <Card
      p={{ base: '20px', md: '24px' }}
      bgColor="#ffffff"
      rounded="10px"
      boxShadow="0px 50px 100px rgba(0, 0, 0, 0.06)"
      h="100%"
      pos="relative"
    >
      <Element
        bgImage={props.countIcon}
        w="10%"
        h="30px"
        style={{ position: 'absolute', right: '-5px', top: '-5px' }}
      />
      <Element bgImage={props.Icon} w="60px" h="60px" />
      <Text fontSize="22px" fontWeight="600" lineHeight="30px" opacity="72%">
        {props.text}
      </Text>
    </Card>
  )
}

export const CardMd = (props: any) => {
  return (
    <Card
      p={{ base: '10px', md: '12px' }}
      bgColor={props.bgColor}
      rounded="10px"
      boxShadow={props.shadow}
      h="100%"
      pos="relative"
    >
      <Element bgImage={props.Icon} w="30%" h="220px" />
      <Stack
        p={{ base: '1.5rem', md: '2rem' }}
        bg="0px 50px 100px rgba(0, 0, 0, 0.06)"
        color={props.color}
        backdropFilter="blur(12px)"
        mt={{ base: '-3rem', md: '-2.2rem' }}
        h="100%"
        justifyContent="flex-end"
      >
        <Heading as="h3" fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}>
          {props.title}
        </Heading>
        <Text fontSize="18px" fontWeight="600" lineHeight="30px" opacity="72%">
          {props.desc}
        </Text>
      </Stack>
    </Card>
  )
}

export const TestimonialCard = (props: any) => {
  return (
    <Stack w={{ base: '100%', sm: '100%', lg: '100%' }}>
      <Card
        bgColor="#ffffff"
        boxShadow="24px 24px 50px rgba(0, 0, 0, 0.09)"
        rounded="20px"
        p={{ base: '1.5rem 1.5rem', sm: '', lg: '40px 48px' }}
        w={{ base: '300px', md: '420px' }}
      >
        <Avatar size={{ base: 'md', md: 'lg' }} bgColor="#EEEEEE" />
        <Text
          fontSize={{ base: '16px', sm: '16px', lg: '17px' }}
          pt={{ base: '1rem', sm: '1rem', lg: '24px' }}
        >
          {props.text}
        </Text>
        <Stack spacing="1" pt={{ base: '1rem', sm: '1rem', lg: '1rem' }}>
          <Text
            color="#1D1D1F"
            fontSize={{ base: '16px', sm: '16px', lg: '16px' }}
          >
            {props.username}
          </Text>
          <Text fontSize={{ base: '12px', sm: '12px', lg: '13px' }}>
            {props.userhandle}
          </Text>
        </Stack>
      </Card>
    </Stack>
  )
}
