import { chakra, Stack , Box, Text, Button, Flex} from "@chakra-ui/react";
import { LargeButton } from "components/base";
import router from "next/router";
import React from "react";
import RegisterMsg from "./register-modal";


export default function WelcomeMsg ()  {

  
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
      <>
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
                justifyContent="center"
              >
              
                <Box display="inline-flex"   bg="white.600"
                  _dark={{
                    bg: "white.500",
                    color: "white.200"
                  }}  rounded="md" shadow="md">
                         <LargeButton
            width="260px"
            btnContent="Mint Now"
            handleClick={ToMint}

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
    
 <Box bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
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
          What's The Plan?
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


      <Flex justifyContent="center" mt={4}>
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
    
<br/>
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
      justifyContent="center"
    >


      <Flex justifyContent="center" mt={4}>
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
<br/>
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


      <Flex justifyContent="center" mt={4}>
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
    <br/>
      </Box>

<br/>


      </Box>

      </>
    )
}