import { ButtonGroup, Flex, Heading, chakra } from "@chakra-ui/react";
import Link from "next/link";
import { useViewportScroll } from "framer-motion";
import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

import { ActionButton } from "components/navbar/action-button";
import { ColorModeToggle } from "components/navbar/color-mode-toggle";
import SponsorButton from "components/navbar/sponsor-button";
import { CONSTANTS } from "config/defaults";

function Navbar() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.nav
      ref={ref}
      h="16"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px="6"
      bg="layout.card"
      shadow={ "md"}
      sx={{
        "& > div": {
          flex: 1,
        },
      }}
    >
      <Flex>
        <Link href="/" passHref>
          <Flex as="a">
            {/* <Logo boxSize="6" mr="2" /> */}
            <Heading fontSize="xl" fontWeight="semibold">
              Locality
            </Heading>
          </Flex>
        </Link>
      </Flex>

      <Flex justify="center">
        {/* <DocSearch w="sm" display={{ md: "flex" }} /> */}
      </Flex>

      <Flex justify="right">
        <ButtonGroup alignItems="center">
          <ActionButton
            isLink
            href={CONSTANTS.LOCALITY_TWITTER}
            aria-label="Locality on twitter"
            icon={<FaTwitter />}
          />
          <ActionButton
            isLink
            href={CONSTANTS.LOCALITY_IG}
            aria-label="Locality on Instagram"
            icon={<FaGithub />}
          />
          <ColorModeToggle />
          <SponsorButton />
        </ButtonGroup>
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;