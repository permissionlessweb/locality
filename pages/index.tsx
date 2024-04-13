import React from 'react';
import NextLink from 'next/link';
import { Stack, Button, Divider } from '@interchain-ui/react';
import { Layout } from '../components';
import WelcomeMsg from '../components/home/welcome';
import HowItWorksMsg from '../components/home/how-it-works';


export default function Home() {
  return (
    <>
       <Layout>
      <WelcomeMsg />
      <HowItWorksMsg />
      {/* <WhosInvolvedMsg /> */}
      {/* <MintNfts /> */}
      <Divider mb="$16" />
      </Layout>
    </>
  );
}