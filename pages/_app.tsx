// import '@interchain-ui/react/styles';
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';

import { Box, ThemeProvider, Toaster, useTheme, useColorModeValue } from '@interchain-ui/react';

import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components/common/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
