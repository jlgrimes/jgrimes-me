'use client';

import {
  ChakraProvider,
  Container,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Container paddingY={8}>
        <Stack spacing={8}>
          <Heading size='3xl' color='gray.700'>{`Hi, I'm Jared.`}</Heading>
          <Grid gridTemplateColumns={{ base: '3.3rem auto', md: '4rem auto' }} alignItems='center' rowGap={{ base: '6', md: '8'}}>
            <Heading size='xl' color='gray.500'>
              👨🏻‍💻
            </Heading>
            <Heading size='lg' color='gray.500'>
              This is me fr. I work at{' '}
              <Link
                href='https://www.linkedin.com/company/microsoft'
                isExternal
              >
                Microsoft
              </Link>{' '}
              making cool front-end for video.
            </Heading>
            <Heading size='xl' color='gray.500'>
              📦
            </Heading>
            <Heading size='lg' color='gray.500'>
              I used to work at{' '}
              <Link href='https://www.linkedin.com/company/amazon/' isExternal>
                Amazon
              </Link>{' '}
              building financial apps with lots of big data.
            </Heading>
            <Heading size='xl' color='gray.500'>
              📈
            </Heading>
            <Heading size='lg' color='gray.500'>
              I made <Link href='https://pokestats.live' isExternal>pokestats.live</Link>,
              used by 90,000 Pokémon players and fans.
            </Heading>
          </Grid>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
