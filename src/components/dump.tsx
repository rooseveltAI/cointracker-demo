import {
  Avatar,
  Box,
  Button,
  Card,
  chakra,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { Global, css } from '@emotion/react'

const Partner = (props: any) => {
  return (
    <Image
      src={props.src}
      alt="logo"
      w={props.w}
      h={props.h}
      mixBlendMode="luminosity"
      opacity="72%"
      style={{ ...props.style }}
    />
  )
}

const Element = (props: any) => {
  return (
    <Stack
      bgImage={props.bgImage}
      w={props.w}
      h={props.h}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="contain"
      style={{ ...props.style }}
    />
  )
}

const Section = (props: any) => {
  return (
    <chakra.section bgColor={props.sectionBg}>
      <Container
        maxW="80%"
        pt={{ base: '', sm: '', lg: '4rem' }}
        pb={{ base: '', sm: '', lg: '4rem' }}
      >
        {props.divider}
        <Grid
          templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
          bgColor={props.gridBg}
          rounded={props.gridRounded}
          alignItems="center"
          justifyContent="center"
          columnGap={props.gridColumnGap}
          py={props.pyGrid}
          px={props.pxGrid}
        >
          <chakra.aside pos="relative">
            <Stack
              align={props.align}
              justify={props.justify}
              // p={{ base: '', sm: '', lg: '4rem' }}
              p={props.pleftComponent}
              bgColor={props.bgColor}
              color={props.color}
              // bgColor="#F9F9FB"
            >
              {props.leftComponent}
            </Stack>
          </chakra.aside>

          <chakra.aside pos="relative">
            <Stack p={props.prightComponent}>{props.rightComponent}</Stack>
          </chakra.aside>
        </Grid>
        {props.divider}
      </Container>
    </chakra.section>
  )
}

const CardSm = (props: any) => {
  return (
    <Card
      p={{ base: '', md: '24px' }}
      bgColor="#ffffff"
      rounded="10px"
      boxShadow="0px 50px 100px rgba(0, 0, 0, 0.06)"
      h="100%"
      pos="relative"
    >
      <Element
        // bgImage="url(/images/icon-1.svg)"
        bgImage={props.countIcon}
        w="10%"
        h="30px"
        style={{ position: 'absolute', right: '-5px', top: '-5px' }}
      />
      <Element
        // bgImage="url(/images/wallet-icon.svg)"
        bgImage={props.Icon}
        w="60px"
        h="60px"
      />
      <Text fontSize="22px" fontWeight="600" lineHeight="30px" opacity="72%">
        {props.text}
        {/* Connect wallets & exchanges */}
      </Text>
    </Card>
  )
}

const CardMd = (props: any) => {
  return (
    <Card
      p={{ base: '', md: '12px' }}
      bgColor={props.bgColor}
      rounded="10px"
      boxShadow={props.shadow}
      h="100%"
      pos="relative"
    >
      <Element bgImage={props.Icon} w="30%" h="220px" />
      <Stack
        p={{ base: '', md: '2rem' }}
        // rounded="30px"
        bg="0px 50px 100px rgba(0, 0, 0, 0.06)"
        color={props.color}
        backdropFilter="blur(12px)"
        mt="-2.2rem"
        h="100%"
        justifyContent="flex-end"
      >
        <Heading as="h3" fontSize={{ base: '', sm: '', lg: '6xl' }}>
          {props.title}
        </Heading>
        <Text fontSize="18px" fontWeight="600" lineHeight="30px" opacity="72%">
          {props.desc}
        </Text>
      </Stack>
    </Card>
  )
}

const TestimonialCard = (props: any) => {
  return (
    <Stack w={{ base: '100%', sm: '100%', lg: '100%' }}>
      <Card
        bgColor="#ffffff"
        boxShadow="24px 24px 50px rgba(0, 0, 0, 0.09)"
        rounded="20px"
        p={{ base: '', sm: '', lg: '40px 48px' }}
        w="420px"
      >
        <Avatar size="lg" bgColor="#EEEEEE" />
        <Text
          fontSize={{ base: '', sm: '', lg: '17px' }}
          pt={{ base: '', sm: '', lg: '24px' }}
        >
          {props.text}
        </Text>
        <Stack spacing="1" pt={{ base: '', sm: '', lg: '1rem' }}>
          <Text color="#1D1D1F" fontSize={{ base: '', sm: '', lg: '16px' }}>
            {props.username}
          </Text>
          <Text fontSize={{ base: '', sm: '', lg: '13px' }}>
            {props.userhandle}
          </Text>
        </Stack>
      </Card>
    </Stack>
  )
}

export default function Home() {
  return (
    <>
      <Global
        styles={css`
          ::-webkit-scrollbar {
            width: 0px;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            width: 2px;
            backgroundcolor: rgba(255, 255, 255, 12%);
          }
        `}
      />

      {/* <Stack
            px={{ base: '', md: '48px' }}
            py={{ base: '', md: '32px' }}
            align="center"
            borderRight="1px solid rgba(255, 255, 255, 8%)"
          >
            <Stack>
              <Heading
                as="h3"
                fontSize={{ base: '', md: '14px' }}
                fontWeight="600"
                letterSpacing="0.15px"
                color="#fff"
                fontFamily="GeneralSans"
              >
                
              </Heading>
              <Stack
                color="#fff"
                fontSize="14px"
                fontWeight="400"
                opacity="87%"
              >
                <Link href="#">About</Link>
                <Link href="#">Careers</Link>
                <Link href="#">HIRING</Link>
                <Link href="#">Press</Link>
                <Link href="#">Deals</Link>
                <Link href="#"></Link>
              </Stack>
            </Stack>
          </Stack> */}

      {/* <chakra.header bgColor="#F9F9FB" py={{ base: '', sm: '', lg: '3rem' }}>
          <Container
            maxW={{ base: '', sm: '', lg: '100%' }}
            pl={{ base: '', sm: '', lg: '12rem' }}
          >
            <Grid
              templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
              columnGap={{ base: '', sm: '', lg: '4rem' }}
              alignItems="center"
              justifyContent="center"
            >
              <Stack spacing={{ base: '', sm: '', lg: '4rem' }}>
                <Stack>
                  <Stack
                    py={{ base: '', sm: '', lg: '1.5rem' }}
                    w={{ base: '', sm: '', lg: '556px' }}
                  >
                    <Stack direction="row" pos="relative">
                      <Heading
                        as="h2"
                        fontSize={{ base: '', sm: '', lg: '68px' }}
                      >
                        Crypto & NFT Taxes done fast
                      </Heading>
                      <Element
                        bgImage="url(/images/fast3d.png)"
                        w="20%"
                        h="58"
                        style={{ position: 'absolute', right: '-1rem' }}
                      />
                    </Stack>
  
                    <Text
                      color="secondary.100"
                      fontSize={{ base: '', sm: '', lg: '24px' }}
                      fontWeight="500"
                    >
                      Easily sync wallets and generate tax forms
                    </Text>
                    <Text
                      color="secondary.100"
                      fontSize={{ base: '', sm: '', lg: '17px' }}
                      fontWeight="500"
                    >
                      Trusted by 1 million+ users globally
                    </Text>
                  </Stack>
                  <Button
                    variant="primary"
                    size="lg"
                    px={{ base: '', md: '3rem' }}
                    py={{ base: '', md: '1.8rem' }}
                    alignSelf="flex-start"
                  >
                    Try it free
                  </Button>
                </Stack>
  
                <Stack
                  py={{ base: '', sm: '', lg: '2rem' }}
                  spacing={{ base: '', md: '2rem' }}
                >
                  <Text opacity="68%" fontSize="14px" textDecoration="underline">
                    The Official Tax Partners Of
                  </Text>
                  <Grid
                    templateColumns={{ base: '', sm: '', lg: 'repeat(4, 140px)' }}
                    alignItems="center"
                  >
                    <Partner src="/images/coinbase.svg" />
                    <Partner src="/images/opensea.svg" />
                    <Partner src="/images/turbotax-whole.svg" />
                    <Partner src="/images/hrblock-horizontal-grey.svg" />
                  </Grid>
                </Stack>
              </Stack>
  
              <chakra.aside position="relative">
                <Stack
                  bgColor="#EFF0F4"
                  rounded="full"
                  w="700px"
                  h="700px"
                  align="center"
                  justify="center"
                >
                  <Element
                    bgImage="url(/images/eth-gold.png)"
                    w="20%"
                    h="100px"
                    style={{ position: 'absolute', left: '-12rem' }}
                  />
                  <Image
                    src="/images/dashboard-card.svg"
                    alt="logo"
                    w={{ base: '', sm: '', lg: '90%' }}
                    filter="drop-shadow(50px 50px 50px rgba(0, 0, 0, 0.04))"
                    pos="relative"
                    left="-4rem"
                    top="-1rem"
                  />
                  <Element
                    bgImage="url(/images/btc-mate.png)"
                    w="20%"
                    h="100px"
                    style={{ position: 'absolute', right: '0rem', top: '0' }}
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
                  />
                  <Element
                    bgImage="url(/images/circle-yellow.svg)"
                    w="20%"
                    h="30px"
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
        </chakra.header> */}

      <Section
        bgColor="#F9F9FB"
        pleftComponent={{ base: '', sm: '', lg: '4rem' }}
        prightComponent={{ base: '', sm: '', lg: '4rem' }}
        leftComponent={
          <Image
            src="/images/automated-tracking.svg"
            alt="automated-tracking"
            w={{ base: '', sm: '', lg: '100%' }}
            filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
          />
        }
        rightComponent={
          <>
            <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
              Automate your portfolio tracking
            </Heading>
            <Text>
              View your market value, investment performance, and portfolio
              allocation in real time and for tax purposes. We unify your
              transaction history across every crypto service and make it
              searchable and filterable. We support for 300+ exchanges & 10,000+
              cryptocurrencies.
            </Text>
            <Element
              bgImage="url(/images/circle-green.svg)"
              w="20%"
              h="50px"
              style={{
                position: 'absolute',
                left: '2rem',
                top: '0'
              }}
            />
            <Element
              bgImage="url(/images/circle-blue.svg)"
              w="20%"
              h="30px"
              style={{
                position: 'absolute',
                right: '2rem',
                marginTop: '6rem'
              }}
            />
          </>
        }
      />

      <Section
        divider={<Divider border="4px solid #F9F9FB" />}
        pleftComponent={{ base: '', sm: '', lg: '4rem' }}
        prightComponent={{ base: '', sm: '', lg: '4rem' }}
        leftComponent={
          <>
            <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
              Save money
              <br />
              year-round
            </Heading>
            <Element
              bgImage="url(/images/circle-blue.svg)"
              w="20%"
              h="30px"
              style={{
                position: 'absolute',
                right: '2rem',
                marginTop: '6rem'
              }}
            />
            <Text>
              CoinTracker automatically optimizes cost basis accounting methods
              and enables you to tax-loss harvest your portfolio to save
              thousands per year. Additional visibility into tax lots helps you
              make better trades.
            </Text>
          </>
        }
        rightComponent={
          <Image
            src="/images/tax-loss-harvesting.svg"
            alt="tax-loss-harvesting"
            w={{ base: '', sm: '', lg: '100%' }}
            filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
          />
        }
      />

      {/* <chakra.section py={{ base: '', sm: '', lg: '1rem' }}>
          <Container
            maxW="80%"
            pt={{ base: '', sm: '', lg: '8rem' }}
            pb={{ base: '', sm: '', lg: '2rem' }}
          >
            <Grid templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}>
              <chakra.aside>
                <Stack
                  align="center"
                  justify="center"
                  p={{ base: '', sm: '', lg: '4rem' }}
                  bgColor="#F9F9FB"
                >
                  <Image
                    src="/images/automated-tracking.svg"
                    alt="automated-tracking"
                    w={{ base: '', sm: '', lg: '100%' }}
                    filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
                  />
                </Stack>
              </chakra.aside>
  
              <chakra.aside pos="relative">
                <Element
                  bgImage="url(/images/circle-green.svg)"
                  w="20%"
                  h="50px"
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '0'
                  }}
                />
                <Stack p={{ base: '', sm: '', lg: '6rem' }}>
                  <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
                    Automate your portfolio tracking
                  </Heading>
                  <Element
                    bgImage="url(/images/circle-blue.svg)"
                    w="20%"
                    h="30px"
                    style={{
                      position: 'absolute',
                      right: '2rem',
                      marginTop: '6rem'
                    }}
                  />
                  <Text>
                    View your market value, investment performance, and portfolio
                    allocation in real time and for tax purposes. We unify your
                    transaction history across every crypto service and make it
                    searchable and filterable. We support for 300+ exchanges &
                    10,000+ cryptocurrencies.
                  </Text>
                </Stack>
              </chakra.aside>
            </Grid>
          </Container>
        </chakra.section> */}

      {/* <chakra.section py={{ base: '', sm: '', lg: '1rem' }}>
          <Container maxW="80%" py={{ base: '', sm: '', lg: '2rem' }}>
            <Divider border="4px solid #F9F9FB" />
            <Grid
              templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
              columnGap="2rem"
              alignItems="center"
              justifyContent="center"
              py={{ base: '', sm: '', lg: '2rem' }}
            >
              <chakra.aside gridColumn="2 / 2">
                <Stack
                  align="center"
                  justify="center"
                  p={{ base: '', sm: '', lg: '4rem' }}
                  // bgColor="#F9F9FB"
                >
                  <Image
                    src="/images/tax-loss-harvesting.svg"
                    alt="tax-loss-harvesting"
                    w={{ base: '', sm: '', lg: '100%' }}
                    filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
                  />
                </Stack>
              </chakra.aside>
  
              <chakra.aside pos="relative" gridColumn="1 / 1" gridRow="1">
                <Element
                  bgImage="url(/images/circle-green.svg)"
                  w="20%"
                  h="50px"
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '0'
                  }}
                />
                <Stack p={{ base: '', sm: '', lg: '6rem' }}>
                  <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
                    Save money
                    <br />
                    year-round
                  </Heading>
                  <Element
                    bgImage="url(/images/circle-blue.svg)"
                    w="20%"
                    h="30px"
                    style={{
                      position: 'absolute',
                      right: '2rem',
                      marginTop: '6rem'
                      // bottom: '2rem'
                    }}
                  />
                  <Text>
                    CoinTracker automatically optimizes cost basis accounting
                    methods and enables you to tax-loss harvest your portfolio to
                    save thousands per year. Additional visibility into tax lots
                    helps you make better trades.
                  </Text>
                </Stack>
              </chakra.aside>
            </Grid>
            <Divider border="4px solid #F9F9FB" />
          </Container>
        </chakra.section> */}

      <Section
        sectionBg="#F9F9FB"
        pleftComponent={{ base: '', sm: '', lg: '4rem' }}
        prightComponent={{ base: '', sm: '', lg: '4rem' }}
        leftComponent={
          <>
            <Image
              src="/images/tax-compliance-non-usa.svg"
              alt="tax-compliance-non-usa"
              w={{ base: '', sm: '', lg: '100%' }}
            />
          </>
        }
        rightComponent={
          <>
            <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
              Become tax compliant seamlessly
            </Heading>
            <Stack
              divider={<StackDivider borderColor="#EDEDED" />}
              spacing="1rem"
            >
              <Divider borderColor="transparent" />
              <HStack spacing="1rem">
                <Element
                  bgImage="url(/images/tax-rules-icon.svg)"
                  w="60px"
                  h="60px"
                />
                <Text>
                  CoinTracker helps you become fully compliant with
                  cryptocurrency tax rules
                </Text>
              </HStack>
              <HStack spacing="1rem">
                <Element
                  bgImage="url(/images/download-icon.svg)"
                  w="60px"
                  h="60px"
                />
                <Text>
                  Download your tax reports in minutes and file with TurboTax or
                  your own accountant.
                </Text>
              </HStack>
              <HStack spacing="1rem">
                <Element
                  bgImage="url(/images/full-support-icon.svg)"
                  w="60px"
                  h="60px"
                />
                <Text>
                  Full support for US, India, UK, Canada, and Australia and
                  partial support in other regions.
                </Text>
              </HStack>
            </Stack>
          </>
        }
      />

      {/* <chakra.section py={{ base: '', sm: '', lg: '1rem' }} bgColor="#F9F9FB">
          <Container
            maxW="80%"
            pt={{ base: '', sm: '', lg: '2rem' }}
            pb={{ base: '', sm: '', lg: '2rem' }}
          >
            <Grid
              templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
              alignItems="center"
              justifyContent="center"
            >
              <chakra.aside>
                <Stack
                  align="center"
                  justify="center"
                  p={{ base: '', sm: '', lg: '4rem' }}
                >
                  <Image
                    src="/images/tax-compliance-non-usa.svg"
                    alt="tax-compliance-non-usa"
                    w={{ base: '', sm: '', lg: '100%' }}
                  />
                </Stack>
              </chakra.aside>
  
              <chakra.aside pos="relative">
                <Element
                  bgImage="url(/images/circle-green.svg)"
                  w="20%"
                  h="50px"
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '0'
                  }}
                />
                <Stack p={{ base: '', sm: '', lg: '5rem' }}>
                  <Heading as="h2" fontSize={{ base: '', sm: '', lg: '48px' }}>
                    Become tax compliant seamlessly
                  </Heading>
                  <Element
                    bgImage="url(/images/circle-blue.svg)"
                    w="20%"
                    h="30px"
                    style={{
                      position: 'absolute',
                      right: '2rem',
                      marginTop: '6rem'
                    }}
                  />
                  <Stack
                    divider={<StackDivider borderColor="#EDEDED" />}
                    spacing="1rem"
                  >
                    <Divider borderColor="transparent" />
                    <HStack spacing="1rem">
                      <Element
                        bgImage="url(/images/tax-rules-icon.svg)"
                        w="60px"
                        h="60px"
                      />
                      <Text>
                        CoinTracker helps you become fully compliant with
                        cryptocurrency tax rules
                      </Text>
                    </HStack>
                    <HStack spacing="1rem">
                      <Element
                        bgImage="url(/images/download-icon.svg)"
                        w="60px"
                        h="60px"
                      />
                      <Text>
                        Download your tax reports in minutes and file with
                        TurboTax or your own accountant.
                      </Text>
                    </HStack>
                    <HStack spacing="1rem">
                      <Element
                        bgImage="url(/images/full-support-icon.svg)"
                        w="60px"
                        h="60px"
                      />
                      <Text>
                        Full support for US, India, UK, Canada, and Australia and
                        partial support in other regions.
                      </Text>
                    </HStack>
                  </Stack>
                </Stack>
              </chakra.aside>
            </Grid>
          </Container>
        </chakra.section> */}

      <Section
        gridBg="#0047FF"
        color="#FFFFFF"
        gridRounded="20px"
        pleftComponent={{ base: '', sm: '', lg: '8rem' }}
        prightComponent={{ base: '', sm: '', lg: '5rem' }}
        leftComponent={
          <>
            <Heading
              as="h2"
              fontSize={{ base: '', sm: '', lg: '48px' }}
              fontWeight="500"
            >
              Track your crypto portfolio on the go
            </Heading>
            <Text color="#ffffff" fontWeight="400" opacity="87%">
              Our mobile app empowers users to keep an eye on their portfolio
              and crypto prices. Never lose track of your assets, no matter
              where you are.
            </Text>
            <Divider borderColor="#fff" opacity="24%" />
            <Stack direction="row" py={{ base: '', md: '1rem' }} spacing="1rem">
              <Button variant="unstyled" size="lg">
                <Image
                  src="/images/app_store_badge.svg"
                  alt="logo"
                  w={{ base: '', sm: '', lg: '148px' }}
                />
              </Button>
              <Button variant="unstyled" size="lg">
                <Image
                  src="/images/google_play_badge.svg"
                  alt="logo"
                  w={{ base: '', sm: '', lg: '148px' }}
                />
              </Button>
            </Stack>
          </>
        }
        rightComponent={
          <Image
            src="/images/mobile-apps.svg"
            alt="mobile-apps"
            w={{ base: '', sm: '', lg: '80%' }}
          />
        }
      />

      {/* <chakra.section py={{ base: '', sm: '', lg: '1rem' }}>
          <Container maxW="80%" py={{ base: '', sm: '', lg: '2rem' }}>
            <Grid
              templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
              columnGap="2rem"
              alignItems="center"
              justifyContent="center"
              py={{ base: '', sm: '', lg: '2rem' }}
              px={{ base: '', sm: '', lg: '4rem' }}
              bgColor="#0047FF"
              color="#ffffff"
              rounded="20px"
            >
              <chakra.aside gridColumn="2 / 2">
                <Stack
                  align="center"
                  justify="center"
                  p={{ base: '', sm: '', lg: '4rem' }}
                >
                  <Image
                    src="/images/mobile-apps.svg"
                    alt="mobile-apps"
                    w={{ base: '', sm: '', lg: '80%' }}
                  />
                </Stack>
              </chakra.aside>
  
              <chakra.aside pos="relative" gridColumn="1 / 1" gridRow="1">
                <Stack
                  p={{ base: '', sm: '', lg: '6rem' }}
                  spacing={{ base: '', md: '1rem' }}
                >
                  <Heading
                    as="h2"
                    fontSize={{ base: '', sm: '', lg: '48px' }}
                    fontWeight="500"
                  >
                    Track your crypto portfolio on the go
                  </Heading>
  
                  <Text color="#ffffff" fontWeight="400" opacity="87%">
                    Our mobile app empowers users to keep an eye on their
                    portfolio and crypto prices. Never lose track of your assets,
                    no matter where you are.
                  </Text>
                  <Divider borderColor="#fff" opacity="24%" />
                  <Stack
                    direction="row"
                    py={{ base: '', md: '1rem' }}
                    spacing="1rem"
                  >
                    <Button variant="unstyled" size="lg">
                      <Image
                        src="/images/app_store_badge.svg"
                        alt="logo"
                        w={{ base: '', sm: '', lg: '148px' }}
                      />
                    </Button>
                    <Button variant="unstyled" size="lg">
                      <Image
                        src="/images/google_play_badge.svg"
                        alt="logo"
                        w={{ base: '', sm: '', lg: '148px' }}
                      />
                    </Button>
                  </Stack>
                </Stack>
              </chakra.aside>
            </Grid>
          </Container>
        </chakra.section> */}

      <chakra.section py={{ base: '', sm: '', lg: '1rem' }} bgColor="#F9F9FB">
        <Container
          maxW="60%"
          pt={{ base: '', sm: '', lg: '5rem' }}
          pb={{ base: '', sm: '', lg: '2rem' }}
        >
          <Stack align="center" justify="center">
            <Heading as="h3" fontSize={{ base: '', sm: '', lg: '48px' }}>
              Get started <chakra.span color="#2CC779">easily</chakra.span>
            </Heading>
            <Flex>
              <i className="ri-lock-fill" style={{ color: '#004AFF' }} />
              <Text px="1">
                We take security very seriously.{' '}
                <chakra.span color="#004AFF">
                  <Link href="#">Learn more</Link>
                </chakra.span>
              </Text>
            </Flex>
          </Stack>

          <Grid
            templateColumns={{ base: '', sm: '', lg: 'repeat(3, 1fr)' }}
            alignItems="center"
            justifyContent="center"
            columnGap="2rem"
            py={{ base: '', sm: '', lg: '4rem' }}
            px={{ base: '', sm: '', lg: '4rem' }}
          >
            <CardSm
              countIcon="url(/images/icon-1.svg)"
              Icon="url(/images/wallet-icon.svg)"
              text="Connect wallets & exchanges"
            />
            <CardSm
              countIcon="url(/images/icon-2.svg)"
              Icon="url(/images/book-icon.svg)"
              text="Review transactions"
            />
            <CardSm
              countIcon="url(/images/icon-3.svg)"
              Icon="url(/images/growth-icon.svg)"
              text="Get portfolio insights & tax reports"
            />
          </Grid>

          <Stack
            align="center"
            justify="center"
            pt={{ base: '', md: '3rem' }}
            pb={{ base: '', md: '5rem' }}
          >
            <Button
              variant="primary"
              size="lg"
              px={{ base: '', md: '4rem' }}
              py={{ base: '', md: '1.8rem' }}
              alignSelf="center"
            >
              Try it free
            </Button>
          </Stack>

          <Grid
            templateColumns={{ base: '', sm: '', lg: 'repeat(2, 1fr)' }}
            alignItems="center"
            justifyContent="center"
            columnGap="15px"
            py={{ base: '', sm: '', lg: '4rem' }}
            px={{ base: '', sm: '', lg: '4rem' }}
            h={{ base: '', sm: '', lg: '500px' }}
          >
            <CardMd
              bgColor="#1F2225"
              shadow="0px 50px 100px rgba(0, 0, 0, 0.06)"
              Icon="url(/images/work-icon.svg)"
              color="#FFFFFF"
              title="4%"
              desc="Crypto market cap tracked"
            />
            <CardMd
              bgColor="#FFFFFF"
              shadow="-50px 50px 100px rgba(0, 0, 0, 0.06)"
              Icon="url(/images/equity-icon.svg)"
              color="secondary.200"
              title="$50 Billion"
              desc="Crypto assets tracked"
            />
          </Grid>
        </Container>
      </chakra.section>

      <chakra.section
        py={{ base: '', sm: '', lg: '1rem' }}
        px={{ base: '', sm: '', lg: '2rem' }}
      >
        <Container
          maxW="100%"
          px="0"
          py={{ base: '', sm: '', lg: '2rem' }}
          bg="url(/images/maps.svg), #0047FF"
          bgRepeat="no-repeat"
          bgSize="fill"
          bgPos="50% 95%"
          color="#ffffff"
          rounded="20px"
          overflow="hidden"
        >
          <Stack
            align="center"
            justify="center"
            py={{ base: '', sm: '', lg: '4rem' }}
            spacing={{ base: '', md: '20px' }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '', sm: '', lg: '48px' }}
              fontWeight="600"
              textAlign="center"
            >
              Users{' '}
              <chakra.span display="inline-block" h="40px" px="2">
                <Element
                  bgImage="url(/images/heart-icon.svg)"
                  w="50px"
                  h="50px"
                />
              </chakra.span>{' '}
              CoinTracker
            </Heading>
            <Text
              color="#ffffff"
              fontSize={{ base: '', sm: '', lg: '22px' }}
              w={{ base: '', lg: '480px' }}
              textAlign="center"
              letterSpacing={{ base: '', lg: '0.35px' }}
              opacity="87%"
              lineHeight={{ base: '', lg: '32px' }}
            >
              See what cryptocurrency users around the world are saying about us
            </Text>
          </Stack>
          <Stack
            overflowX="scroll"
            maxW="100%"
            direction="row"
            pl={{ base: '0.4rem', sm: '1rem', lg: '4rem' }}
            pr={{ base: '0.4rem', sm: '1rem', lg: '4rem' }}
            py={{ base: '', sm: '', lg: '4rem' }}
            spacing={{ base: '', sm: '1rem', lg: '1.4rem' }}
          >
            <TestimonialCard
              text="Watch out, CoinTracker now has mobile apps that automatically sync your holdings with exchanges and your own crypto wallets. No more manual entry. Your best crypto tracker is now here 🔥"
              username="Gary Tan"
              userhandle="@Garytan"
            />
            <TestimonialCard
              text="Just discovered @CoinTracker, I've been maintaining a google sheet painstakingly tracking all my deposits and buys since 2017, so glad I don't have to do this anymore lol. still in the red though so"
              username="Ali Abdaal"
              userhandle="@AliAbdaal"
            />
            <TestimonialCard
              text="For those who asked about my crypto taxes - ended up going w @cointracker_io. Best UX I found after looking at a number of options! (FWIW I'm not an investor in the company, nor is anyone paying me to say this)."
              username="Arianna Simpson"
              userhandle="@AriannaSimpson"
            />
            <TestimonialCard
              text="Started to do taxes this weekend and seriously big kudos to @cointracker_io for an amazing job on their product - hugely relieved to have my crypto taxes done in less than 5 mins 😇"
              username="Rishab Hegde"
              userhandle="@rishab_hegde"
            />
          </Stack>
        </Container>

        <Stack>
          <Grid
            templateColumns={{ base: '', sm: '', lg: 'repeat(6, 140px)' }}
            alignItems="center"
            justifyContent="center"
            py={{ base: '', sm: '', lg: '2rem' }}
          >
            <Partner w="100%" src="/images/techcrunch.svg" />
            <Partner w="100%" src="/images/wsj.svg" />
            <Partner w="100%" src="/images/forbes.svg" />
            <Partner w="100%" src="/images/google.svg" />
            <Partner w="100%" src="/images/coindesk.svg" />
            <Partner w="100%" src="/images/bloomberg_tax.svg" />
          </Grid>
        </Stack>
      </chakra.section>

      <chakra.section>
        <Container
          maxW="100%"
          px="0"
          py={{ base: '', sm: '', lg: '2rem' }}
          rounded="20px"
          overflow="hidden"
        >
          <Stack
            align="center"
            justify="center"
            py={{ base: '', sm: '', lg: '4rem' }}
            spacing={{ base: '', md: '20px' }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '', sm: '', lg: '64px' }}
              fontWeight="600"
              textAlign="center"
            >
              Powerful
              <chakra.span color="#FFC801" px="2">
                integrations
              </chakra.span>
            </Heading>
            <Text
              // color="#ffffff"
              fontSize={{ base: '', sm: '', lg: '22px' }}
              w={{ base: '', lg: '668px' }}
              textAlign="center"
              letterSpacing={{ base: '', lg: '0.35px' }}
              opacity="87%"
              lineHeight={{ base: '', lg: '32px' }}
            >
              We support 10,000+ crypto assets and 300+ wallets and exchanges
              with data from Nomics
            </Text>
          </Stack>
        </Container>
      </chakra.section>

      <chakra.section
        pt={{
          base: '',
          sm: '',
          lg: '24rem'
        }}
        pb={{
          base: '',
          sm: '',
          lg: '4rem'
        }}
      >
        <Stack
          h={{ base: '', md: '400px' }}
          bg="linear-gradient(90deg, #0047FF 61.77%, #FF49A0 61.78%)"
        >
          <Container maxW="container.xl">
            <Stack
              bgColor="#fff"
              w="100%"
              h="600px"
              mt="-20rem"
              filter="drop-shadow(0px 50px 50px rgba(0, 0, 0, 0.04))"
            />
          </Container>
        </Stack>
      </chakra.section>

      <chakra.section h={{ base: '', sm: '', lg: '85vh' }}>
        <Container
          maxW="container.lg"
          h="100%"
          justifyContent="center"
          alignItems="center"
          // py={{ base: '', sm: '', lg: '1rem' }}
        >
          <Stack
            bgImage="url(/images/cta-bg.svg)"
            bgRepeat="no-repeat"
            bgSize="contain"
            bgPos="center"
            h="100%"
            align="center"
            justify="center"
            spacing="1.4rem"
            pos="relative"
          >
            <Element
              bgImage="url(/images/3dimage-icon.svg)"
              w="20%"
              h="140px"
              style={{ position: 'absolute', left: '-4rem', top: '8rem' }}
            />
            <Element
              bgImage="url(/images/3dcheck-icon.svg)"
              w="20%"
              h="80px"
              style={{ position: 'absolute', left: '18rem', top: '5rem' }}
            />
            <Element
              bgImage="url(/images/3dcoin-icon.svg)"
              w="20%"
              h="130px"
              style={{ position: 'absolute', right: '-5rem', top: '-2rem' }}
            />
            <Element
              bgImage="url(/images/3dclock-icon.svg)"
              w="20%"
              h="130px"
              style={{ position: 'absolute', left: '-8rem', bottom: '8rem' }}
            />
            <Element
              bgImage="url(/images/3dchart-icon.svg)"
              w="20%"
              h="60px"
              style={{ position: 'absolute', right: '-4rem', bottom: '16rem' }}
            />
            <Heading
              as="h2"
              fontSize={{ base: '', sm: '', lg: '48px' }}
              fontWeight="600"
              textAlign="center"
            >
              Ready to use{' '}
              <chakra.span color="#0047FF" px="2">
                CoinTracker?
              </chakra.span>
            </Heading>
            <Text
              fontSize={{ base: '', sm: '', lg: '22px' }}
              w={{ base: '', lg: '568px' }}
              fontWeight="500"
              textAlign="center"
              // letterSpacing={{ base: '', lg: '0.35px' }}
              opacity="87%"
              lineHeight={{ base: '', lg: '32px' }}
            >
              Join 1 million+ users in tracking your crypto portfolio and
              calculating your taxes today
            </Text>

            <Stack
              spacing={{ base: '', md: '2rem' }}
              py={{ base: '', md: '1rem' }}
            >
              <Element
                bgImage="url(/images/group_avatars.png)"
                w="208px"
                h="50px"
              />
              <Button
                variant="primary"
                size="lg"
                px={{ base: '', md: '4rem' }}
                py={{ base: '', md: '1.8rem' }}
                alignSelf="center"
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Container>
      </chakra.section>
    </>
  )
}
