import { Flex, chakra, Stack, Box, Link } from "@chakra-ui/react";


export default function RegisterMsg() {
    return (
        <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justify="center"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          w="full"
        >
          <Box
            w={{
              base: "full",
              md: "75%",
              lg: "50%",
            }}
            px={4}
            py={20}
            textAlign={{
              base: "left",
              md: "center",
            }}
          >
            <chakra.span
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
              <chakra.span display="block">Eager to Help?</chakra.span>
              <chakra.span
                display="block"
                color="brand.600"
                _dark={{
                  color: "gray.500",
                }}
              >
                We want to connect with you!
              </chakra.span>
            </chakra.span>
            <Stack
              justifyContent={{
                base: "left",
                md: "center",
              }}
              direction={{
                base: "column",
                sm: "row",
              }}
              spacing={2}
              mt={2}
            >
              <Box display="inline-flex" rounded="md" shadow="md">
                <Link
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
                    color: "blue.700",
                  }}
                  bg="brand.600"
                  _dark={{
                    bg: "brand.500",
                    color: "blue.200"
                  }}
                  _hover={{
                    bg: "brand.700",
                    _dark: {
                      bg: "brand.600",
                    },
                  }}
                >
                   Artist Registration
                </Link>
              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <Link
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
                    color: "blue.700",
                  }}
                  bg="brand.600"
                  _dark={{
                    bg: "brand.500",
                    color: "blue.200"
                  }}
                  _hover={{
                    bg: "brand.700",
                    _dark: {
                      bg: "brand.600",
                    },
                  }}
                >
                    Collaborator Registration
                </Link>

              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <Link
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
                    color: "blue.700",
                  }}
                  bg="brand.600"
                  _dark={{
                    bg: "brand.500",
                    color: "blue.200"
                  }}
                  _hover={{
                    bg: "brand.700",
                    _dark: {
                      bg: "brand.600",
                    },
                  }}
                >
                    Sponsorship Registration
                </Link>

              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    
    )
}