import { Flex, Stack, chakra, Box ,Link} from "@chakra-ui/react";

export default function WhosInvolvedMsg() {
    return(
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
          Whos Involved
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
              <Link
                fontSize="xl"
                color="brand.500"
                _dark={{
                  color: "brand.300",
                }}
              >
               General Operations
              </Link>
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
              <Link
                fontSize="xl"
                color="brand.500"
                _dark={{
                  color: "brand.300",
                }}
              >
                Artists 
              </Link>
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
              <Link
                fontSize="xl"
                color="brand.500"
                _dark={{
                  color: "brand.300",
                }}
              >
                Harm Reduction Specialist
              </Link>
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
            <br />
          </Box>
        </Stack>
      </Flex>
    )
}