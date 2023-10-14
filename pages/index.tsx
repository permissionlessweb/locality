import Head from 'next/head';

import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  VStack,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  Center,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { dependencies, products } from '../config';
import NextLink from 'next/link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Product, Dependency, handleChangeColorModeValue, MintNfts } from '../components';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import WelcomeMsg from 'components/home/welcome';
import HowItWorksMsg from 'components/home/how-it-works';
import WhosInvolvedMsg from 'components/home/whos-involved';
import RegisterMsg from 'components/home/register-modal';

const library = {
  title: 'StargazeJS',
  text: 'Typescript libraries for the Stargaze ecosystem',
  href: 'https://github.com/cosmology-tech/stargazejs',
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className='site-background'>
      <Container maxW="5xl" py={10}>

        <Head>
          <title>Locality</title>
          <meta name="description" content="Generated by create cosmos app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box textAlign="center">

          <Box pos="relative" overflow="hidden">
            <WelcomeMsg />
            <HowItWorksMsg />
            <WhosInvolvedMsg />
            <br />
            <MintNfts />
          </Box>
        </Box>

        <Stack
          isInline={true}
          spacing={1}
          justifyContent="center"
          opacity={0.5}
          fontSize="sm"
        >
          <Text>Built with</Text>
          <Link
            href="https://cosmology.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cosmology
          </Link>
        </Stack>
      </Container>
    </div>
  );
}
