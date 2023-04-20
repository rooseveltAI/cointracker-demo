import {
  chakra,
  Container,
  Grid,
  Stack,
  Heading,
  Button,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Element, Partner } from 'components/ui-elements'
import Image from 'next/image'

export const HeroHeader = () => {
  return (
    <chakra.header
      bgColor="#F9F9FB"
      py={{ base: '1.4rem', sm: '2rem', lg: '3rem' }}
    >
      <Container
        maxW={{ base: '100%', sm: '100%', lg: '100%' }}
        pl={{ base: '1.5rem', sm: '2rem', lg: '12rem' }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: '',
            lg: 'repeat(2, 1fr)'
          }}
          columnGap={{ base: '2rem', sm: '', lg: '4rem' }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={{ base: '1rem', sm: '', lg: '4rem' }}>
            <Stack>
              <Stack
                py={{ base: '1rem', sm: '', lg: '1.5rem' }}
                w={{ base: '100%', sm: '580px', lg: '556px' }}
              >
                <Stack direction="row" pos="relative">
                  <Heading
                    as="h2"
                    fontSize={{ base: '36px', sm: '64px', lg: '68px' }}
                  >
                    Crypto & NFT Taxes done fast
                  </Heading>
                  <Element
                    bgImage="url(/images/fast3d.png)"
                    w="20%"
                    h={{ base: '40px', sm: '58', lg: '58' }}
                    style={{ position: 'absolute', right: '-1rem' }}
                  />
                </Stack>

                <Text
                  color="secondary.100"
                  fontSize={{ base: '17px', sm: '', lg: '24px' }}
                  fontWeight="500"
                >
                  Easily sync wallets and generate tax forms
                </Text>
                <Text
                  color="secondary.100"
                  fontSize={{ base: '14px', sm: '', lg: '17px' }}
                  fontWeight="500"
                >
                  Trusted by 1 million+ users globally
                </Text>
              </Stack>
              <Button
                variant="primary"
                size="lg"
                px={{ base: '3rem', md: '3rem' }}
                py={{ base: '1rem', md: '1.8rem' }}
                alignSelf="flex-start"
              >
                Try it free
              </Button>
            </Stack>

            <Stack
              py={{ base: '1rem', sm: '', lg: '2rem' }}
              spacing={{ base: '', md: '2rem' }}
            >
              <Text opacity="68%" fontSize="14px" textDecoration="underline">
                The Official Tax Partners Of
              </Text>
              <Grid
                templateColumns={{
                  base: 'repeat(2, 140px)',
                  sm: 'repeat(4, 140px)',
                  lg: 'repeat(4, 140px)'
                }}
                alignItems="center"
                rowGap={{ base: '1rem', md: 'auto' }}
                py={{ base: '1rem', sm: '0', lg: 'auto' }}
              >
                <Partner
                  w={{ base: '100px', md: '120px' }}
                  src="/images/coinbase.svg"
                />
                <Partner
                  w={{ base: '100px', md: '120px' }}
                  src="/images/opensea.svg"
                />
                <Partner
                  w={{ base: '100px', md: '120px' }}
                  src="/images/turbotax-whole.svg"
                />
                <Partner
                  w={{ base: '100px', md: '120px' }}
                  src="/images/hrblock-horizontal-grey.svg"
                />
              </Grid>
            </Stack>
          </Stack>

          <chakra.aside position="relative">
            <Stack
              bgImage="url(/images/circle-bg.svg)"
              bgRepeat="no-repeat"
              bgPos="center"
              bgSize="contain"
              w={{ base: '100%', sm: '100%', lg: '700px' }}
              h={{ base: '100%', sm: '100%', lg: '700px' }}
              align="center"
              justify="center"
            >
              <Element
                bgImage="url(/images/eth-gold.png)"
                w="20%"
                h="100px"
                pos="absolute"
                left="-12rem"
                // style={{ position: 'absolute', left: '-12rem' }}
                display={{ base: 'none', md: 'block' }}
              />
              {/* desktop */}
              <Stack
                w="full"
                h={{ base: '100%', md: '100%' }}
                display={{ base: 'none', lg: 'block' }}
                pt="2rem"
                filter="drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.04))"
              >
                <Image
                  src="/images/dashboard-card.svg"
                  alt="dashboard-card"
                  layout="fixed"
                  loading="lazy"
                  width={648}
                  height={648}
                />
              </Stack>
              {/* mobile */}
              {/* <Stack
                w="full"
                h={{ base: '100%', md: '100%' }}
                display={{ base: 'block', md: 'none' }}
              >
                <Image
                  src="/images/dashboard-card.svg"
                  alt="dashboard-card"
                  layout="responsive"
                  loading="lazy"
                  width={720}
                  height={720}
                />
              </Stack> */}

              <Element
                bgImage="url(/images/btc-mate.png)"
                w="20%"
                h="100px"
                style={{ position: 'absolute', right: '0rem', top: '0' }}
                display={{ base: 'none', lg: 'block' }}
              />
              <Element
                bgImage="url(/images/circle-white.svg)"
                w="20%"
                h="45px"
                style={{
                  position: 'absolute',
                  right: '0rem',
                  bottom: '12rem'
                }}
                display={{ base: 'none', lg: 'block' }}
              />
              <Element
                bgImage="url(/images/circle-yellow.svg)"
                w="20%"
                h="30px"
                display={{ base: 'none', lg: 'block' }}
                style={{
                  position: 'absolute',
                  left: '15rem',
                  bottom: '2rem'
                }}
              />
            </Stack>
          </chakra.aside>
        </Grid>
      </Container>
    </chakra.header>
  )
}
