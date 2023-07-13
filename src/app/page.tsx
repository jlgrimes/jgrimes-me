'use client';

import {
  ChakraProvider,
  Container,
  Grid,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

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
            building front-end and AI-powered enterprise solutions for Office Media.
          </Text>
          <Text fontSize='xl' color='gray.600'>
            {`I worked for  `}
            <Link
              href='https://www.linkedin.com/company/amazon'
              isExternal
              fontWeight='semibold'
            >
              @amazon
            </Link>
            {` on business applications and introduced a plethora of new technologies to our stack.`}
          </Text>
          <Text fontSize='xl' color='gray.600'>
            {`I made `}
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
            {`I led development for `}
            <Link
              href='https://www.michigan.gov/coronavirus/news/2020/05/29/mi-symptoms-web-application-helps-michiganders-track-symptoms-informs-reopening-strategy'
              isExternal
              fontWeight='semibold'
            >
              MI Symptoms
            </Link>
            {`, a COVID symptom tracker for the State of Michigan used 3M+ times.`}
          </Text>
          <Stack spacing={4} direction={{ base: 'column', sm: 'row' }}>
            <HStack>
              <Icon as={FaTwitter} color='twitter.500' />
              <Link
                href='https://twitter.com/jgrimesey'
                isExternal
                fontWeight='semibold'
              >
                @jgrimesey
              </Link>
            </HStack>
            <HStack spacing={1}>
              <Text>🧵</Text>
              <Link
                href='https://threads.net/@jaredgrimesey'
                isExternal
                fontWeight='semibold'
              >
                @jaredgrimesey
              </Link>
            </HStack>
            <HStack>
              <Icon as={FaGithub} color='gray.800' />
              <Link
                href='https://github.com/jlgrimes/'
                isExternal
                fontWeight='semibold'
              >
                jlgrimes
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
