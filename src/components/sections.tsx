import { chakra, Container, Grid, Stack } from '@chakra-ui/react'
import React from 'react'

const Section = (props: any) => {
  return (
    <chakra.section bgColor={props.sectionBg}>
      <Container
        maxW={{ base: '100%', sm: '100%', lg: '80%' }}
        pt={{ base: '2rem', sm: '2rem', lg: '4rem' }}
        pb={{ base: '2rem', sm: '2rem', lg: '4rem' }}
      >
        {props.divider}
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)'
          }}
          bgColor={props.gridBg}
          rounded={props.gridRounded}
          alignItems="center"
          justifyContent="center"
          columnGap={props.gridColumnGap}
          rowGap={props.gridRowGap}
          py={props.pyGrid}
          px={props.pxGrid}
        >
          <chakra.aside pos="relative" gridRow={props.gridRow}>
            <Stack
              align={props.align}
              justify={props.justify}
              p={props.pleftComponent}
              bgColor={props.bgColor}
              color={props.color}
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

export default Section
