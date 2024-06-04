import { Link, Box, ButtonGroup, Flex, Heading, SimpleGrid, Stack, chakra, useColorModeValue, useDisclosure, VStack, Button, HStack, IconButton, CloseButton, Popover, PopoverTrigger, PopoverContent, Switch, useColorMode } from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import React from "react";
import { FaBroadcastTower, FaConnectdevelop, FaDiscord, FaGithub, FaQq, FaQuestionCircle, FaQuran, FaTwitter, FaVoteYea } from "react-icons/fa";

import { ColorModeToggle } from "./color-mode-toggle";
import {  IoNewspaperOutline, IoWarningOutline } from "react-icons/io5";
import router from "next/router";
import { BsCollection } from "react-icons/bs";
import {
  Home,
  LineChart,
  Package2,
  PanelLeft,
  Users2,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/common/sheet"



function Navbar() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const ref = React.useRef<HTMLDivElement>(null);
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const text = useColorModeValue("dark", "light");
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const mobileNav = useDisclosure();

  function toHome() {
    router.push('/');
  }
  function toFocalPoints() {
    router.push('/focal-points');
  }
  function toInteractions() {
    router.push('/interactions');
  }
  function toEmergency() {
    router.push('/emergency');
  }
  function toPress() {
    window.location.href = 'https://daodao.zone/dao/juno1zdgyyzm34q22vmyz247evnzzls6kclun7v8l5ncjzlv7w2l4lvvqsevqe2/press';
  }


  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={6}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={10} // Set a higher z-index value for the mobile menu
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button
        w="full"
        onClick={toHome}
        variant="ghost"
        colorScheme="brand"
        leftIcon={<FaBroadcastTower />}
      >
        Home
      </Button>
      <Button onClick={toFocalPoints} w="full" variant="ghost" leftIcon={<BsCollection />}>
        Browse Focal Points
      </Button>
      <Button onClick={toInteractions} w="full" variant="ghost" leftIcon={<IoNewspaperOutline />}>
        Interactions
      </Button>
      <Button onClick={toEmergency} w="full" variant="ghost" leftIcon={<IoWarningOutline />}>
        Emergency
      </Button>
    </VStack>
  );

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <BsCollection className="h-5 w-5" />
              Browse Focal Points
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Community Resources
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Analytics & Resources 
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <ColorModeToggle />
    </header>
  );
}

export default Navbar;