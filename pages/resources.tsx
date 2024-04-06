import React from "react"
import {Center, Container} from '@chakra-ui/react'
import EcosystemContent from '../components/resources/content'
import { Layout } from "@/components";

export default function Resources(){

    return(
        <Layout>
        <Container maxW="5xl" py={10}>
              <h3 className="section-title">Harm Reductive Resources</h3>
            <EcosystemContent/>
         
        </Container>
        </Layout>
    );
}