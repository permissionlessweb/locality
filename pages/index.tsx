import NextLink from 'next/link';
import { Stack, Button, Divider } from '@interchain-ui/react';
import { Layout } from '@/components';
import WelcomeMsg from '@/components/home/welcome';
import HowItWorksMsg from '@/components/home/how-it-works';
import WhosInvolvedMsg from '@/components/home/whos-involved';

export default function Home() {
  return (
    <Layout>
      <WelcomeMsg />
      <HowItWorksMsg />
      <WhosInvolvedMsg />
      {/* <MintNfts /> */}
      <Stack direction="horizontal" space="$8" attributes={{ my: '3rem', justifyContent: 'center' }}>
        <NextLink href="mint">
          <Button
            intent="secondary"
            variant="outlined"
            rightIcon="arrowRightLine"
          >
            Mint NFTs
          </Button>
        </NextLink>
        <NextLink href="sell">
          <Button rightIcon="arrowRightLine">
            Sell NFTs
          </Button>
        </NextLink>
      </Stack>
      <Divider mb="$16" />
    </Layout>
  );
}