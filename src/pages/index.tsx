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
import { Element, Partner } from 'components/ui-elements'
import { HeroHeader } from 'components/hero-header'
import Section from 'components/sections'
import { CardMd, CardSm, TestimonialCard } from 'components/cards'

const HeaderText = (props: any) => {
  return (
    <Heading
      as="h2"
      color={props.color}
      fontSize={{ base: '28px', sm: '32px', lg: '48px' }}
    >
      {props.title}
    </Heading>
  )
}

const BodyText = (props: any) => {
  return (
    <Text
      fontSize={{ base: '15px', sm: '16px', lg: '16px' }}
      color={props.color}
      opacity={props.opacity}
      fontWeight={props.fontWeight}
    >
      {props.text}
    </Text>
  )
}

const AppStoreButton = () => {
  return (
    <Button variant="unstyled" size="lg">
      <Image
        src="/images/app_store_badge.svg"
        alt="App Store Button"
        w={{ base: '100%', sm: '100%', lg: '148px' }}
      />
    </Button>
  )
}
const GooglePlayButton = () => {
  return (
    <Button variant="unstyled" size="lg">
      <Image
        src="/images/google_play_badge.svg"
        alt="Google Play Button"
        w={{ base: '100%', sm: '100%', lg: '148px' }}
      />
    </Button>
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

      <HeroHeader />

      <Section
        bgColor="#F9F9FB"
        pleftComponent={{ base: '1rem', sm: '4rem', lg: '4rem' }}
        prightComponent={{ base: '1rem', sm: '4rem', lg: '4rem' }}
        align="center"
        justify="center"
        leftComponent={
          <Image
            src="/images/automated-tracking.svg"
            alt="automated-tracking"
            w={{ base: '100%', sm: '', lg: '100%' }}
            filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
          />
        }
        rightComponent={
          <>
            <HeaderText title="Automate your portfolio tracking" />
            <BodyText
              text="View your market value, investment performance, and portfolio
              allocation in real time and for tax purposes. We unify your
              transaction history across every crypto service and make it
              searchable and filterable. We support for 300+ exchanges & 10,000+
              cryptocurrencies."
            />

            <Element
              bgImage="url(/images/circle-green.svg)"
              w="20%"
              h="50px"
              display={{ base: 'none', md: 'block' }}
              style={{
                position: 'absolute',
                left: '2rem',
                top: '0'
              }}
            />
            {/* <Element
              bgImage="url(/images/circle-blue.svg)"
              w="20%"
              h="30px"
              display={{ base: 'none', lg: 'block' }}
              style={{
                position: 'absolute',
                right: '2rem',
                marginTop: '6rem'
              }}
            /> */}
          </>
        }
      />

      <Section
        divider={<Divider border="4px solid #F9F9FB" />}
        pleftComponent={{ base: '0', sm: '0', lg: '4rem' }}
        prightComponent={{ base: '0', sm: '0', lg: '4rem' }}
        gridRow={{ base: '2 / 2', lg: 'auto' }}
        pyGrid={{ base: '2rem', sm: '3rem', lg: '1rem' }}
        pxGrid={{ base: '1rem', sm: '3rem', lg: '1rem' }}
        leftComponent={
          <>
            <HeaderText title="Save money year-round" />
            {/* <Element
              bgImage="url(/images/circle-blue.svg)"
              w="20%"
              h="30px"
              display={{ base: 'none', lg: 'block' }}
              style={{
                position: 'absolute',
                right: '4rem',
                marginTop: '8rem'
              }}
            /> */}
            <BodyText
              text="CoinTracker automatically optimizes cost basis accounting methods
              and enables you to tax-loss harvest your portfolio to save
              thousands per year. Additional visibility into tax lots helps you
              make better trades."
            />
          </>
        }
        rightComponent={
          <Image
            src="/images/tax-loss-harvesting.svg"
            alt="tax-loss-harvesting"
            w={{ base: '100%', sm: '100%', lg: '100%' }}
            filter="drop-shadow(-50px 50px 50px rgba(0, 0, 0, 0.04))"
          />
        }
      />

      <Section
        sectionBg="#F9F9FB"
        pleftComponent={{ base: '1rem', sm: '3rem', lg: '4rem' }}
        prightComponent={{ base: '1rem', sm: '3rem', lg: '4rem' }}
        leftComponent={
          <>
            <Image
              src="/images/tax-compliance-non-usa.svg"
              alt="tax-compliance-non-usa"
              w={{ base: '100%', sm: '100%', lg: '100%' }}
            />
          </>
        }
        rightComponent={
          <>
            <HeaderText title="Become tax compliant seamlessly" />
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
                <BodyText
                  text="CoinTracker helps you become fully compliant with
                  cryptocurrency tax rules"
                />
              </HStack>
              <HStack spacing="1rem">
                <Element
                  bgImage="url(/images/download-icon.svg)"
                  w="60px"
                  h="60px"
                />
                <BodyText
                  text="Download your tax reports in minutes and file with TurboTax or
                  your own accountant."
                />
              </HStack>
              <HStack spacing="1rem">
                <Element
                  bgImage="url(/images/full-support-icon.svg)"
                  w="60px"
                  h="60px"
                />
                <BodyText
                  text="Full support for US, India, UK, Canada, and Australia and
                  partial support in other regions."
                />
              </HStack>
            </Stack>
          </>
        }
      />

      <Section
        gridBg="#0047FF"
        color="#FFFFFF"
        gridRounded="20px"
        pleftComponent={{ base: '1rem', sm: '3rem', lg: '8rem' }}
        prightComponent={{ base: '1rem', sm: '3rem', lg: '5rem' }}
        pyGrid={{ base: '2rem', sm: '3rem', lg: '2rem' }}
        pxGrid={{ base: '1rem', sm: '3rem', lg: '2rem' }}
        leftComponent={
          <>
            <HeaderText title="Track your crypto portfolio on the go" />
            <BodyText
              color="#FFFFFF"
              opacity="0.87"
              fontWeight="400"
              text="Our mobile app empowers users to keep an eye on their portfolio
              and crypto prices. Never lose track of your assets, no matter
              where you are."
            />
            <Divider borderColor="#fff" opacity="8%" />
            <Stack direction="row" py={{ base: '', md: '1rem' }} spacing="1rem">
              <AppStoreButton />
              <GooglePlayButton />
            </Stack>
          </>
        }
        rightComponent={
          <Image
            src="/images/mobile-apps.svg"
            alt="mobile-apps"
            w={{ base: '100%', sm: '80%', lg: '80%' }}
          />
        }
      />

      <chakra.section
        py={{ base: '1rem', sm: '1rem', lg: '1rem' }}
        bgColor="#F9F9FB"
      >
        <Container
          maxW={{ base: '100%', sm: '70%', lg: '60%' }}
          pt={{ base: '4rem', sm: '4rem', lg: '5rem' }}
          pb={{ base: '2rem', sm: '2rem', lg: '2rem' }}
        >
          <Stack align="center" justify="center">
            <Heading
              as="h3"
              fontSize={{ base: '28px', sm: '32px', lg: '48px' }}
            >
              Get started <chakra.span color="#2CC779">easily</chakra.span>
            </Heading>
            <Flex align="center">
              <i className="ri-lock-fill" style={{ color: '#004AFF' }} />
              <Text px="1" fontSize={{ base: '14px', sm: '15px', lg: '18px' }}>
                We take security very seriously.{' '}
                <chakra.span color="#004AFF">
                  <Link href="#">Learn more</Link>
                </chakra.span>
              </Text>
            </Flex>
          </Stack>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(auto-fill, 1fr)',
              lg: 'repeat(3, 1fr)'
            }}
            alignItems="center"
            justifyContent="center"
            columnGap="2rem"
            rowGap={{ base: '1rem', sm: '2rem' }}
            py={{ base: '2rem', sm: '2rem', lg: '4rem' }}
            px={{ base: '1rem', sm: '2rem', lg: '4rem' }}
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
            pt={{ base: '1rem', md: '3rem' }}
            pb={{ base: '2rem', md: '5rem' }}
          >
            <Button
              variant="primary"
              size="lg"
              px={{ base: '4rem', md: '4rem' }}
              py={{ base: '1rem', md: '1.8rem' }}
              alignSelf="center"
            >
              Try it free
            </Button>
          </Stack>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)'
            }}
            alignItems="center"
            justifyContent="center"
            columnGap="15px"
            rowGap={{ base: '1rem', sm: '2rem' }}
            py={{ base: '1rem', sm: '2rem', lg: '4rem' }}
            px={{ base: '1rem', sm: '1rem', lg: '4rem' }}
            h={{ base: '100%', sm: '100%', lg: '500px' }}
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
        py={{ base: '1rem', sm: '1rem', lg: '1rem' }}
        px={{ base: '1rem', sm: '1rem', lg: '2rem' }}
      >
        <Container
          maxW="100%"
          px="0"
          py={{ base: '2rem', sm: '2rem', lg: '2rem' }}
          bg="url(/images/maps.svg), #0047FF"
          bgRepeat="no-repeat"
          bgSize="fill"
          bgPos={{ base: '50% 100%', sm: '', lg: '50% 95%' }}
          color="#ffffff"
          rounded="20px"
          overflow="hidden"
        >
          <Stack
            align="center"
            justify="center"
            py={{ base: '1rem', sm: '1rem', lg: '4rem' }}
            spacing={{ base: '16px', md: '20px' }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '24px', sm: '32px', lg: '48px' }}
              fontWeight="600"
              textAlign="center"
            >
              Users{' '}
              <chakra.span
                display="inline-block"
                h={{ base: '25px', sm: '35px', lg: '40px' }}
                px="2"
              >
                <Element
                  bgImage="url(/images/heart-icon.svg)"
                  w={{ base: '35px', sm: '40px', lg: '50px' }}
                  h={{ base: '35px', sm: '40px', lg: '50px' }}
                />
              </chakra.span>{' '}
              CoinTracker
            </Heading>
            <Text
              color="#ffffff"
              fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
              w={{ base: '100%', md: '480px' }}
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
            pl={{ base: '1rem', sm: '2rem', lg: '4rem' }}
            pr={{ base: '1rem', sm: '2rem', lg: '4rem' }}
            py={{ base: '1rem', sm: '1rem', lg: '4rem' }}
            spacing={{ base: '1rem', sm: '1rem', lg: '1.4rem' }}
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
            templateColumns={{
              base: 'repeat(2, 140px)',
              sm: 'repeat(3, 140px)',
              lg: 'repeat(6, 140px)'
            }}
            rowGap={{ base: '1.2rem', md: 'auto' }}
            alignItems="center"
            justifyContent="center"
            py={{ base: '1rem', sm: '1rem', lg: '2rem' }}
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
          p="0"
          py={{ base: '1rem', sm: '2rem', lg: '2rem' }}
        >
          <Stack
            align="center"
            justify="center"
            py={{ base: '1rem', sm: '1rem', lg: '4rem' }}
            px={{ base: '1rem', sm: '4rem', lg: '0' }}
            spacing={{ base: '0.5rem', sm: '1rem', lg: '20px' }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '32px', sm: '48px', lg: '64px' }}
              fontWeight="600"
              textAlign="center"
            >
              Powerful <chakra.span color="#FFC801">integrations</chakra.span>
            </Heading>
            <Text
              fontSize={{ base: '16px', sm: '18px', lg: '22px' }}
              w={{ base: '100%', sm: '500px', lg: '668px' }}
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
        h="auto"
        pos="relative"
        pt={{
          base: '1rem',
          sm: '1rem',
          lg: '4rem'
        }}
        pb={{
          base: '4rem',
          sm: '4rem',
          lg: '8rem'
        }}
        mb={{
          base: '2rem',
          sm: '4rem',
          lg: '8rem'
        }}
      >
        <Container maxW="container.xl">
          <Stack
            bgColor="#fff"
            w="100%"
            h={{ base: '400px', sm: '500px', lg: '600px' }}
            filter="drop-shadow(0px 50px 50px rgba(0, 0, 0, 0.04))"
          />
        </Container>
        <Stack
          pos="absolute"
          bottom="0"
          left="0"
          right="0"
          zIndex="-2"
          h={{ base: '200px', sm: '200px', lg: '400px' }}
          bg="linear-gradient(90deg, #0047FF 61.77%, #FF49A0 61.78%)"
        />
      </chakra.section>

      <chakra.section
        h={{ base: '60vh', sm: '70vh', lg: '85vh' }}
        mb={{
          base: '2rem',
          sm: '2rem',
          lg: '4rem'
        }}
      >
        <Container
          maxW={{ base: '100%', sm: '100%', lg: 'container.lg' }}
          h="100%"
          justifyContent="center"
          alignItems="center"
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
              h={{ base: '60px', sm: '80px', lg: '140px' }}
              pos="absolute"
              left={{ base: '0', sm: '0', lg: '-4rem' }}
              top={{ base: '0', md: '8rem' }}
              display={{ base: 'none', lg: 'block' }}
            />
            <Element
              bgImage="url(/images/3dcheck-icon.svg)"
              w="20%"
              h={{ base: '50px', sm: '80px', lg: '80px' }}
              pos="absolute"
              left={{ base: '0', sm: '', lg: '18rem' }}
              top={{ base: '0', sm: '', lg: '5rem' }}
            />
            <Element
              bgImage="url(/images/3dcoin-icon.svg)"
              w="20%"
              h={{ sm: '90px', lg: '130px' }}
              pos="absolute"
              right={{ base: '0', sm: '0', lg: '-5rem' }}
              top={{ base: '0', sm: '', lg: '-2rem' }}
              display={{ base: 'none', md: 'block' }}
            />
            <Element
              bgImage="url(/images/3dclock-icon.svg)"
              w="20%"
              h="130px"
              pos="absolute"
              left="-8rem"
              bottom="8rem"
              display={{ base: 'none', lg: 'block' }}
            />
            <Element
              bgImage="url(/images/3dchart-icon.svg)"
              w="20%"
              h={{ base: '30px', sm: '40px', lg: '60px' }}
              pos="absolute"
              right={{ base: '0', sm: '0', lg: '-4rem' }}
              bottom={{ base: '5rem', sm: '12rem', lg: '16rem' }}
            />
            <Heading
              as="h2"
              fontSize={{ base: '32px', sm: '36px', lg: '48px' }}
              fontWeight="600"
              textAlign="center"
            >
              Ready to use{' '}
              <chakra.span color="#0047FF" px="2">
                CoinTracker?
              </chakra.span>
            </Heading>
            <Text
              fontSize={{ base: '17px', sm: '18px', lg: '22px' }}
              w={{ base: '100%', sm: '480px', lg: '568px' }}
              fontWeight="500"
              textAlign="center"
              opacity="87%"
              lineHeight={{ base: '', lg: '32px' }}
            >
              Join 1 million+ users in tracking your crypto portfolio and
              calculating your taxes today
            </Text>

            <Stack
              spacing={{ base: '2rem', md: '2rem' }}
              py={{ base: '0.1rem', md: '1rem' }}
            >
              <Element
                bgImage="url(/images/group_avatars.png)"
                w="208px"
                h="50px"
              />
              <Button
                variant="primary"
                size="lg"
                px={{ base: '4rem', md: '4rem' }}
                py={{ base: '1.8rem', md: '1.8rem' }}
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
