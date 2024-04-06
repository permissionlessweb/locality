import { Flex, chakra, Stack, Box, Link, Center } from "@chakra-ui/react";
import router from "next/router";


export default function RegisterMsg() {
  
  function toRegistration() {
    router.push('/register');

  }
    return (
      <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems='flex-start'
      justifyContent="center"

    >
      <Center>
            <Stack justifyContent='ce'>
       
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
              <chakra.span  display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold">
           
          Wanna Collab?</chakra.span>
              <chakra.span
                display="block"
                color="brand.600"
                _dark={{
                  color: "gray.500",
                }}
              >
                Let's Collab.
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
              <Box display="inline-flex"   bg="white.600"
                  _dark={{
                    bg: "white.500",
                    color: "white.200"
                  }}  rounded="md" shadow="md">
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
            </Stack>

        </Stack>
        </Center>
      </Flex>
    
    )
}