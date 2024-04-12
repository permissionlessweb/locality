import { Box, Flex, Link, Stack, chakra, Text } from "@chakra-ui/react";
import RegisterMsg from "./register-modal";


export default function HowItWorksMsg() {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems='flex-start'
      justifyContent="start"
      borderRadius={5}

    >

      <Stack justifyContent='ce'>
        <chakra.h2
          color="gray.800"
          borderRadius={5}
          _dark={{
            color: "white",
          }}
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          mt={{
            base: 2,
            md: 0,
          }}
          fontWeight="bold"
        >
          What's The Plan?
        </chakra.h2>
        <Box
          w="md"
          mx="auto"
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
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              1. Collaborative NFT Collection
            </Text>
          </Flex>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            Artist's are invited to create pieces for the genesis collection.
          </chakra.p>
          <br />
        </Box>
        <Box
          w="md"
          mx="auto"
          py={4}
          px={8}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
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
              2. Non-Profit DAO
            </Text>
          </Flex>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            Any resources generated will be managed transparently through DAO-DAO, a smart contract powered collaboration platform.
            <br />
            <br />
            All on-chain. All verifiable.
          </chakra.p>
          <br />
        </Box>


        <Box
          w="md"
          mx="auto"
          py={4}
          px={8}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
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
              3. Strategy & Resource Generation
            </Text>
          </Flex>
          <chakra.p
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            Deliberate partnerships & opportunities to create postive impacts in our communities will then be the priority.
            <br />
            <br />
            This is where we will see creativity shine.
          </chakra.p>
          <br />
        </Box>
      </Stack>
      <RegisterMsg />
    </Flex>
  )
}