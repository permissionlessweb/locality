import Head from "next/head"
import { FC } from "react"

import BreatheComponent from "../../components/salvum/breath"
import Header from "../../components/salvum/header"
import React from "react"
import { Layout } from "../../components"

const Breathe: FC = () => (
  <>
    <Head>
      <title>Locality | Breathe</title>
      <meta
        name="description"
        content="Guided breathing exercise to help ground yourself."
      />
    </Head>

    <Layout>
      <Header title="Breathe" backHref="/" centered />
      <div className="">
        <BreatheComponent />
      </div>
    </Layout>
  </>
)

export default Breathe