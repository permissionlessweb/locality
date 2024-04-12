import { Flex, Stack, chakra, Box, Link, Text, } from "@chakra-ui/react";
import RegisterMsg from "./register-modal";

export default function WhosInvolvedMsg() {
  return (
    <>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems='flex-start'
        justifyContent="end"
      >
        <Stack justifyContent='ce'>
          <chakra.h2
            color="gray.800"
            _dark={{ color: "white", }}
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
            Who&apos;s Involved?
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
                Artists
              </Text>
            </Flex>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >

            </chakra.p>
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
                Harm Reduction &  <br />
                Non-Profits
              </Text>
            </Flex>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >
            </chakra.p>
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
                General Operations
              </Text>
            </Flex>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >
              TerpNET Design DAO
            </chakra.p>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >
            </chakra.p>
            <br />
          </Box>
        </Stack>
      </Flex>
    </>
  )
}