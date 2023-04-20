import { Stack, Image } from '@chakra-ui/react'
import React from 'react'

export const Element = (props: any) => {
  return (
    <Stack
      bgImage={props.bgImage}
      w={props.w}
      h={props.h}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="contain"
      display={props.display}
      style={{ ...props.style }}
      pos={props.pos}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      top={props.top}
      m={props.m}
    />
  )
}

export const Partner = (props: any) => {
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
