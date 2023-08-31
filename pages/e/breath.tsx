import Head from "next/head"
import { FC } from "react"

import BreatheComponent from "../../components/salvum/breath"
import Header from "../../components/salvum/header"
import React from "react"

const Breathe: FC = () => (
  <>
    <Head>
      <title>Salvum | Breathe</title>
      <meta
        name="description"
        content="Guided breathing exercise to help ground yourself."
      />
    </Head>

    <div className="breath-container">
      <Header title="Breathe" backHref="/apps" centered />

      <BreatheComponent />
    </div>
  </>
)

export default Breathe