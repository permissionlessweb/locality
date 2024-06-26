import Head from 'next/head';
import { Toaster, Container } from '@interchain-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';
import Navbar from '../navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="64rem" attributes={{ py: '$14' }}>      
      <Head>
        <title>Locality</title>
        <meta name="description" content="NFT powered efforts to reduce harm, locally." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      {children}
      <Toaster position={"top-right"} closeButton={true} />
      <Footer />
    </Container>
  );
};