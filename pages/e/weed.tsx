import Head from "next/head"
import { FC } from "react"

import {
  BreatheSection,
  Container,
  PeerSupportResourcesSection,
  RowLink,
  Section,
} from "../../components/salvum/emergency/emergency"
import Header from "../../components/salvum/header"
import React from "react"
import { Box } from "@chakra-ui/react"

const Weed: FC = () => (
  <Box maxW="7xl" mx="auto">
    <Head>
      <title>Salvum | Too Much Weed</title>
      <meta
        name="description"
        content="Guide to dealing with an uncomfortable weed experience."
      />
    </Head>
    <Container>
      <Header title="Too Much Weed" backHref="/emergency" centered />
      <div className="PageContent">
      <Section>
        <h1>don&apos;t panic. you&apos;re ok</h1>
      </Section>
      <Section>
        <h2>Keep in mind...</h2>
        <li>your body is safe</li>
        <li>
          you are experiencing a substance-induced state of mind, which will
          end
        </li>
        <li>this is normal</li>
      </Section>
      <Section>
        <h2>Are you...</h2>
        <li>hungry?</li>
        <li>thirsty?</li>
        <li>too warm or too cold?</li>
        <li>overwhelmed by noise?</li>
        <li>in an uncomfortable social situation?</li>
      </Section>
      <Section>
        <h2>Try...</h2>
        <li>following the breathing exercise below</li>
        <li>grabbing some water or tasty food</li>
        <li>changing the music to something chill or light</li>
        <li>taking a bath or shower</li>
        <li>thinking of someone you love</li>
        <li>wrapping yourself in a blanket</li>
        <li>distracting yourself with a game, movie, or show</li>
        <li>cuddling with a pet</li>
        <li>going to sleep</li>
      </Section>
      <Section>
        <h2>Natural remedies</h2>
        <p>
          Sniff or chew on a few black peppercorns. Caryophyllene is a terpene
          found in both cannabis and peppercorns which has been shown to cause
          sedating effects when combined with THC (the psychoactive compound in
          weed).
        </p>
        <p>
          Lemons and pine nuts also contain compounds that may help counteract
          the effects of THC.
        </p>
        <RowLink
          label="Scientific support"
          href="https://dx.doi.org/10.1111%2Fj.1476-5381.2011.01238.x"
          marginTop="1rem"
        />
      </Section>
      <BreatheSection />

      <PeerSupportResourcesSection />
      </div>
    </Container>
  </Box>
)

export default Weed