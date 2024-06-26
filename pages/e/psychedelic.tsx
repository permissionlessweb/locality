import Head from "next/head"
import Link from "next/link"
import { FC } from "react"

import {
  BreatheSection,
  Container,
  PeerSupportResourcesSection,
  Section,
} from "../../components/salvum/emergency/emergency"
import Header from "../../components/salvum/header"
import React from "react"
import { Box } from "@chakra-ui/react"

const Psychedelic: FC = () => (
  <Box maxW="7xl" mx="auto">
    <Head>
      <title>Salvum | Psychedelic</title>
      <meta
        name="description"
        content="Guide to dealing with an uncomfortable psychedelic experience."
      />
    </Head>
    <Header title="Psychedelic" backHref="/emergency" centered></Header>
    <div className="PageContent">
      <Container>
        <h1 className="pysch-header">breathe, relax, let go</h1>
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
          <li>
            moving around in your environment; even standing on the other side
            of the room can help
          </li>
          <li>changing the music to something light or upbeat</li>
          <li>thinking of someone you love</li>
          <li>wrapping yourself in a blanket</li>
        </Section>
        <BreatheSection />
        <PeerSupportResourcesSection />
        <Link href="/">
          <Section>
            <h2>Toxicity</h2>
            <p>
              Classical psychedelics—such as LSD, psilocybin mushrooms,
              mescaline-containing cacti, and DMT—are safe. If you are unsure
              about the toxicity of your substance, click here to search for it
              and then scroll down to find toxicity.
            </p>
          </Section>
        </Link>
        <Section>
          <h2>Physical Harm</h2>
          <p>
            If you feel someone is in immediate danger of physical harm, including
            yourself, remain calm and contact emergency medical services.
          </p>
        </Section>
      </Container>
      </div>
  </Box>
)

export default Psychedelic