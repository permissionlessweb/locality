import { chakra, Stack, Box, Text, Button } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { LargeButton } from "../common/buttons";


export default function WelcomeMsg() {


  const ToMint = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // You can use 'auto' for an instant scroll
    });
  };

  const ToDocs = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // You can use 'auto' for an instant scroll
    });
  };
  function toRegistration() {
    router.push('/register');

  }
  return (
    <Box maxW="7xl" mx="auto">
      <Box
        pos="relative"
        pb={{
          base: 8,
          sm: 16,
          md: 20,
          lg: 28,
          xl: 32,
        }}
        w="full"
        border="solid 1px transparent"
      >
        <Box
          maxW={{
            base: "7xl",
          }}
          px={{
            base: 4,
            sm: 6,
            lg: 8,
          }}
          mt={{
            base: 12,
            md: 16,
            lg: 20,
            xl: 28,
          }}
        >
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
                Locality
              </Text>
              <chakra.span
                display={{
                  base: "block",
                  xl: "inline",
                }}
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >

              </chakra.span>
            </chakra.h1>
            <chakra.p
              mt={{
                base: 3,
                sm: 5,
                md: 5,
              }}
              mx={{
                sm: "auto",
                lg: 0,
              }}
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              color="gray.500"
              lineHeight="base"
            >
              Creating a focal point on allocating resources for harm-reduction efforts, locally.
            </chakra.p>
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
                <LargeButton
                  width="260px"
                  btnContent="Mint (Coming Soon!)"
                  handleClick={ToMint}
                  disabled

                />
                <Box mt="auto" padding="4px">

                </Box>
                <LargeButton
                  width="260px"
                  btnContent="Read The Docs"
                  handleClick={ToDocs}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}