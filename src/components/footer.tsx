import {
  chakra,
  Stack,
  Grid,
  Heading,
  Button,
  Text,
  Image
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const FooterCard = (props: any) => {
  return (
    <Stack
      px={{ base: '2rem', md: '48px' }}
      py={{ base: '2rem', md: '32px' }}
      align={{ base: 'flex-start', lg: 'center' }}
      borderRight={{
        base: 'none',
        sm: 'none',
        lg: '1px solid rgba(255, 255, 255, 8%)'
      }}
      borderBottom="1px solid rgba(255, 255, 255, 8%)"
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
          {props.title}
        </Heading>
        <Stack color="#fff" fontSize="14px" fontWeight="400" opacity="87%">
          {props.content}
        </Stack>
      </Stack>
    </Stack>
  )
}

export const Footer = () => {
  return (
    <chakra.footer
      gridArea="footer"
      maxW="100%"
      p={{ base: '8px', md: '24px' }}
    >
      <Stack bgColor="#03122E" rounded={{ base: '24px', md: '30px' }}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(5, 1fr)'
          }}
        >
          <FooterCard
            title={
              <Image
                src="/logo_white.svg"
                alt="logo"
                w={{ base: '', sm: '', lg: '128px' }}
              />
            }
            content={
              <Stack spacing="4">
                <Text fontSize="14px" color="#fff" opacity="68%">
                  Connect your cryptocurrency wallets and exchanges. Get your
                  crypto and bitcoin taxes done in minutes.
                </Text>
                <Image
                  src="/images/soc_2_badge.svg"
                  alt="logo"
                  w={{ base: '120px', sm: '120px', lg: '100px' }}
                />
              </Stack>
            }
          />
          <FooterCard
            title="Plartform"
            content={
              <>
                <Link href="#">Pricing</Link>
                <Link href="#">Exchanges</Link>
                <Link href="#">Terms of Use</Link>
                <Link href="#">Privacy policy</Link>
                <Link href="#">Disclaimer</Link>
                <Link href="#">Security</Link>
                <Link href="#">Status</Link>
              </>
            }
          />

          <FooterCard
            title="Company"
            content={
              <>
                <Link href="#">About</Link>
                <Link href="#">Careers</Link>
                <Link href="#">HIRING</Link>
                <Link href="#">Press</Link>
                <Link href="#">Deals</Link>
                <Link href="#">For Accountants</Link>
              </>
            }
          />

          <FooterCard
            title="Resources"
            content={
              <>
                <Link href="#">Blog</Link>
                <Link href="#">Crypto prices</Link>
                <Link href="#">Crypto tax guide</Link>
                <Link href="#">Support</Link>
                <Link href="#">Donate Ukraine 🇺🇦</Link>
              </>
            }
          />

          <FooterCard
            title="Get the app"
            content={
              <Stack direction={{ base: 'column', sm: 'row', lg: 'column' }}>
                <Button variant="unstyled" size="lg">
                  <Image
                    src="/images/app_store_badge.svg"
                    alt="logo"
                    w={{ base: '100%', sm: '100%', lg: '148px' }}
                  />
                </Button>
                <Button variant="unstyled" size="lg">
                  <Image
                    src="/images/google_play_badge.svg"
                    alt="logo"
                    w={{ base: '100%', sm: '100%', lg: '148px' }}
                  />
                </Button>
              </Stack>
            }
          />

          <Stack
            direction={['column', 'row']}
            justify="space-between"
            px={{ base: '1rem', sm: '2rem', lg: '48px' }}
            py={{ base: '2rem', sm: '2rem', lg: '32px' }}
            spacing={{ base: '24px', md: '48px' }}
            align="center"
            borderTop={{
              base: 'none',
              sm: '0.5px solid rgba(255, 255, 255, 8%)',
              lg: 'none'
            }}
            w="100%"
            gridColumn={{ base: '1 / 1', sm: '1 / 4', lg: '1 / 8' }}
            color="#fff"
          >
            <Text
              color="#fff"
              textTransform="uppercase"
              opacity="68%"
              fontSize={{ base: '10px', md: '13px' }}
              fontWeight="400"
              letterSpacing="0.08em"
              whiteSpace="nowrap"
            >
              © CoinTracker {new Date().getFullYear()}
            </Text>

            <Stack
              direction={['row', 'row']}
              spacing={{ base: '16px', lg: '32px' }}
            >
              <i className="ri-telegram-fill ri-xl" />
              <i className="ri-reddit-fill ri-xl" />
              <i className="ri-twitter-fill ri-xl" />
              <i className="ri-facebook-circle-fill ri-xl" />
              <i className="ri-linkedin-box-fill ri-xl" />
              <i className="ri-youtube-fill ri-xl" />
            </Stack>
          </Stack>
        </Grid>
      </Stack>
    </chakra.footer>
  )
}
