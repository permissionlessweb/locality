import { Box, Flex, Link, Stack, chakra, Text } from "@chakra-ui/react";


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

    >

      <Stack justifyContent='ce'>
        <chakra.h2
          color="gray.800"
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
            1,111 pieces of art made by various artist will be tokenized & deployed for sale on-chain.
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
            All funding from the sale of the nft collection will automatically route to a treasury managed by members of the DAO.
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
            Resources for various stratigies we can take as a DAO.
          </chakra.p>
          <br />
        </Box>
      </Stack>

      
    </Flex>
  )
}