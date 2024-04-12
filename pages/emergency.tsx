import Head from "next/head"
import Link from "next/link"
import React, { FC, useState } from "react"
import { Container } from "../components/salvum/emergency/emergency"
import { Box } from "@chakra-ui/react"
import { RiLoader2Line } from "react-icons/ri"

const pages = [
  {
    title: "Psychedelic",
    href: "/e/psychedelic",
  },
  {
    title: "Too Much\nWeed",
    href: "/e/weed",
  },
  {
    title: "Opioid\nOverdose",
    href: "/e/opioid",
  },
  {
    title: "Alcohol\nPoisoning",
    href: "/e/alcohol",
  },
]

const EmergencyPage: FC = () => {
  const [loadingHref, setLoadingHref] = useState(null as string | null)

  return (
    <Box maxW="7xl" mx="auto">
      <Head>
        <title>Salvum | Emergency</title>
        <meta
          name="description"
          content="Guides to help make it through a difficult experience."
        />
      </Head>
      <Container>
        <div className="e-container">
          <h1>Select the type of emergency.</h1>

          <div className="e-pages">
            {pages.map(({ title, href }) => (
              <Link key={title} href={href} legacyBehavior>
                <a className="emergency-type-header" onClick={() => setLoadingHref(href)}>
                  {loadingHref === href ? (
                    <RiLoader2Line />
                  ) : (
                    title
                  )}
                </a>
              </Link>
            ))}
          </div>

          <p className="center">
            Disclaimer:
            <br />
            The information contained within these pages is intended for
            educational purposes only. It is your responsibility to do your own
            research and ensure you know what steps to take in the event of a
            dangerous situation. It&apos;s better to be safe than sorry, so when
            in doubt, contact emergency health services if anyone is at risk of
            hurting themself or others.
          </p>
        </div></Container>
    </Box>
  )
}

export default EmergencyPage