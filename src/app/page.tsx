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
      <Container paddingY={{ base: '16', sm: '32' }}>
        <Stack spacing={{ base: '4', sm: '6' }}>
          <Heading size='3xl'>👨🏻‍💻</Heading>
          <Heading size='3xl' color='gray.700'>{`Hi, I'm Jared.`}</Heading>
          <Text fontSize='xl' color='gray.600'>
            {`I'm a front-end engineer `}
            <Link
              href='https://www.linkedin.com/company/microsoft'
              isExternal
              fontWeight='semibold'
            >
              @microsoft
            </Link>{' '}
            building front-end and AI solutions for Office Media. Previously{' '}
            <Link
              href='https://www.linkedin.com/company/amazon'
              isExternal
              fontWeight='semibold'
            >
              @amazon.
            </Link>
          </Text>
          <Text fontSize='xl' color='gray.600'>
            {`I built `}
            <Link
              href='https://pokestats.live'
              isExternal
              fontWeight='semibold'
            >
              pokestats.live
            </Link>
            {`, a live tournament data analytics tool used by 100,000+ members of the Pokémon community.`}
          </Text>
          <Text fontSize='xl' color='gray.600'>
            {`Wanna see more? Follow me `}
            <Link
              href='https://twitter.com/jgrimesey'
              isExternal
              fontWeight='semibold'
            >
              @jgrimesey
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
