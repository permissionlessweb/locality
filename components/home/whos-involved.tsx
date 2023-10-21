import { Box, Flex, Link, Stack, chakra, Text, Center} from "@chakra-ui/react";


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
      alignItems='flex-center'
      justifyContent="center"

    >

<Box bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
          }}
          >    <chakra.span
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
          mb={6}
        >
          Who's Involved?
        </chakra.span>
        
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
GlassFlow
              </chakra.p>
            <br />

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
                Source Visuals
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
                Harm Reduction 
              </Text>
            </Flex>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >
                Celestial Spaces
            </chakra.p>
          </Box>
</Box>
      
    </Flex>
    </>
  )
}