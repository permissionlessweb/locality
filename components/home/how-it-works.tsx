import { Box, Flex, Link, Stack, chakra, Text } from "@chakra-ui/react";
import router from "next/router";
import React from "react";


export default function HowItWorksMsg() {
  function toRegistration() {
    router.push('/register');

  }

  return (

    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Box
        textAlign="center"
        w={{
          base: "full",
          md: 11 / 12,
          xl: 8 / 12,
        }}
        mx="auto"
      >
        <chakra.h1
          fontSize={{
            base: "4xl",
            sm: "5xl",
            md: "6xl",
          }}
          letterSpacing="tight"
          lineHeight="short"
          fontWeight="extrabold"
          color="gray.900"
          _dark={{
            color: "white",
          }}
        >
          <Text
            fontSize={{
              base: "4xl",
              sm: "5xl",
              md: "6xl",
            }}
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            What&apos;s The Plan?
          </Text>

        </chakra.h1>
        <br />
        <br />
        <Box
          w={{ base: "full", md: "md" }}
          mx={{ base: 0, md: "auto" }}
          py={4}
          px={8}
          bg="white"
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          rounded="lg"
        >
          <Flex justifyContent="start" mt={4}>
            <Text
              fontSize={{
                base: "3xl",
                sm: "2xl",
                md: "3xl",
              }}
              display={{
                base: "block",
                lg: "inline",
              }}
              w={{ base: "full", md: "md" }}
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              1. Focal Points Are Determined.
            </Text>
          </Flex>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            Artist&apos;s are invited by focal point creators to provide art to the upcoming collection.
            <br />
            <br />
            Each specific collection can have a specific focal point.
          </chakra.p>
        </Box>
        <Box
          w={{ base: "sm", md: "md" }}
          mx={{ base: 0, md: "auto" }}
          px={8}
          bg="white"
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          rounded="lg"
        >
          <Flex justifyContent="start" mt={4}>
            <Text
              fontSize={{
                base: "3xl",
                sm: "2xl",
                md: "3xl",
              }}
              display={{
                base: "block",
                lg: "inline",
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              2. Collaboration Can Happen, Transparently.
            </Text>
          </Flex>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            Any decisions on focal points, resources & collaborative effort can be held 100% transparently through <Link to="https://daodao.zone">DAO-DAO</Link>, a smart contract powered collaboration platform.
            <br />
            <br />
            All on-chain. All verifiable.
          </chakra.p>
          <br />
        </Box>

        <Box
          w={{ base: "full", md: "md" }}
          mx={{ base: 0, md: "auto" }}
          px={8}
          bg="white"
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          rounded="lg"
        >

          <Flex justifyContent="start" mt={4}>
            <Text
              fontSize={{
                base: "3xl",
                sm: "2xl",
                md: "3xl",
              }}
              display={{
                base: "block",
                lg: "inline",
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              3. Inter Focal Point Collaborations
            </Text>
          </Flex>
          <br />
          Communities of focal point collections are able to create unique methods of inter-collection opportunities, such as trading, raffles, & more.
          <br />
        </Box>
        <Stack
          direction={{
            base: "column",
            sm: "column",
            md: "row",
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          spacing={{
            base: 4,
            md: 2,
          }}
          padding={4}
          justifyContent="center"
        >
          <Box display="inline-flex" bg="white.600"
            _dark={{
              bg: "white.500",
              color: "white.200"
            }} rounded="md" shadow="md">

            <Box mt="auto" padding="4px">

            </Box>

          </Box>
        </Stack>
      </Box>
      <Box display="inline-flex" bg="white.600"
        _dark={{
          bg: "white.500",
          color: "white.200"
        }} rounded="md" shadow="md">
        <Link
          onClick={toRegistration}
          w="full"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          px={5}
          py={3}
          border="solid transparent"
          fontWeight="bold"
          rounded="md"
          _light={{
            color: "white.700",
          }}
          bg="white.600"
          _dark={{
            bg: "white.500",
            color: "white.200"
          }}
          _hover={{
            bg: "white.700",
            _dark: {
              bg: "white.600",
            },
          }}
        >
          Sign Up Here
        </Link>
      </Box>


    </main>
  )
}