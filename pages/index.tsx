import React from 'react';
import NextLink from 'next/link';
import { Stack, Button, Divider } from '@interchain-ui/react';
import { Layout } from '../components';
import WelcomeMsg from '../components/home/welcome';
import HowItWorksMsg from '../components/home/how-it-works';
import WhosInvolvedMsg from '@/components/home/whos-involved';


export default function Home() {
  return (
    <>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <WelcomeMsg />
      <HowItWorksMsg />
      {/* <MintNfts /> */}
      <Divider mb="$16" />
      
      </main>
    </>
  );
}