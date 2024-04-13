import { Box, Button, Link, Popover, PopoverContent, PopoverTrigger, SimpleGrid, chakra, useColorModeValue } from "@chakra-ui/react";
import router from "next/router";
import React from "react";
import { IoArrowDown, IoWarning } from "react-icons/io5";

function toHome() {
  router.push('/');
}
function toSubstances() {
  router.push('/substances');
}
function toEmergency() {
  router.push('/emergency');
}
function toInteractions() {
  router.push('/interactions');
}
function toBreathe() {
  router.push('/e/breath');
}
const Section = (props: any) => {
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  return (
    <Link
      m={-3}
      p={3}
      display="flex"
      alignItems="start"
      onClick={props.href}
      rounded="lg"
      _hover={{
        bg: hbg,
      }}
    >
      <chakra.svg
        flexShrink={0}
        h={6}
        w={6}
        color={ic}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon}
      </chakra.svg>
      <Box ml={4}>
        <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
          {props.title}
        </chakra.p>
        <chakra.p mt={1} fontSize="sm" color={dcl}>
          {props.children}
        </chakra.p>
      </Box>
    </Link>
  );
};


const Features = (props: any) => {
  const hbg = useColorModeValue("gray.50", "brand.400");
  const hbgh = useColorModeValue("gray.100", "brand.500");
  const tcl = useColorModeValue("gray.900", "gray.50");
  return (
    <React.Fragment>
      <SimpleGrid
        columns={
          props.h
            ? {
              base: 1,
              md: 3,
              lg: 5,
            }
            : 1
        }
        pos="relative"
        gap={{
          base: 6,
          sm: 8,
        }}
        px={5}
        py={6}
        p={{
          sm: 8,
        }}
      >

        <Section
          href={toInteractions}
          title="Interaction's Chart"

        >
          Choose two substances to view their interaction profile.
        </Section>

        {/* <Section
          href={toSubstances}
          title="Substances"
          
        >
          Search for information on substances   
        </Section> */}
        <Section
          href={toBreathe}
          title="Organizations"

        >
        A list of various harm reduction communities.
        </Section>
        <Button onClick={toEmergency}> <IoWarning /> &nbsp; Emergency </Button>
        {/* <Section
            title="Integrations"
            description={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            }
          >
            Connect with third-party tools that you&#039;re already using.
          </Section>

          <Section
            title="Automations"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            }
          >
            Build strategic funnels that will drive your customers to convert
          </Section> */}
      </SimpleGrid>
    </React.Fragment>
  );
};


const FeaturesPopoverModal = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg={bg}
          color="gray.500"
          display="inline-flex"
          alignItems="center"
          fontSize="md"
          _hover={{
            color: cl,
          }}
          _focus={{
            boxShadow: "none",
          }}
          rightIcon={<IoArrowDown />}
        >
          Harm-Reduction Widgets
        </Button>
      </PopoverTrigger>

      <PopoverContent
        w="100vw"
        maxW="md"
        _focus={{
          boxShadow: "md",
        }}
      >
        <Features />
      </PopoverContent>
    </Popover>
  )
};
export default FeaturesPopoverModal;