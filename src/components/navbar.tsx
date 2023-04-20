import {
  chakra,
  Stack,
  HStack,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
  IconButton
} from '@chakra-ui/react'
import React from 'react'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        colorScheme="white"
        onClick={onOpen}
        display={{ base: 'block', lg: 'none' }}
        pt="0.5rem"
        fontWeight="400"
      >
        <i className="ri-menu-fill ri-lg" />
      </IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const Navbar = () => {
  return (
    <chakra.nav gridArea="nav" w="100%" pos="relative">
      <Stack
        direction="row"
        pos="fixed"
        w="100%"
        h={{ base: '70px', md: '90px' }}
        align="center"
        px={{ base: '1rem', sm: '', lg: '4rem' }}
        bgColor="#FFFFFF"
        borderBottom="1px solid #EDEDED"
        spacing="2rem"
        zIndex="4"
      >
        <HStack flex={{ base: '1', lg: 'none' }}>
          <Image src="/logo.svg" alt="logo" w={{ base: '116px', sm: '', lg: '128px' }} />
        </HStack>
        <HStack spacing="1rem" flex="1" display={{ base: 'none', lg: 'block' }}>
          <Button variant="unstyled" size="sm" fontWeight="400" rightIcon={<i className="ri-arrow-down-s-line" />}>
            Products
          </Button>
          <Button variant="unstyled" size="sm" fontWeight="400" rightIcon={<i className="ri-arrow-down-s-line" />}>
            Resources
          </Button>
        </HStack>
        <HStack spacing={{ base: '0.2rem', md: '1rem' }} align="center">
          <Button variant="accent" fontWeight="400" px={{ base: '', md: '1.5rem' }} display={{ base: 'none', md: 'block' }}>
            Login
          </Button>
          <Button variant="primary-outline" size={{ base: 'sm', lg: 'md' }} fontWeight="400">
            Sign Up
          </Button>
          <Menu />
        </HStack>
      </Stack>
    </chakra.nav>
  )
}
