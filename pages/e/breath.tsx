import Head from "next/head"
import { FC } from "react"

import BreatheComponent from "../../components/salvum/breath"
import Header from "../../components/salvum/header"
import React from "react"

const Breathe: FC = () => (
  <>
    <Head>
      <title>Locality | Breathe</title>
      <meta
        name="description"
        content="Guided breathing exercise to help ground yourself."
      />
    </Head>

    <Header title="Breathe" backHref="/" centered />
    <div className="">
      <BreatheComponent />
    </div>
  </>
)

export default Breathe