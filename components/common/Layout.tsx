import Head from 'next/head';
import { Toaster, Container, Box, useTheme } from '@interchain-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import Navbar from '../navbar';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  const { themeClass } = useTheme();
  return (
    <Container maxWidth="64rem" attributes={{ py: '$14' }}>
      <Head>
        <title>Locality</title>
        <meta name="description" content="NFT powered efforts to reduce harm, locally." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        {children}
      <Toaster position={"top-right"} closeButton={true} />
      <Footer />
    </Container>
  );
};