import React from "react"
import {Center, Container} from '@chakra-ui/react'
import EcosystemContent from '../components/resources/content'

export default function Resources(){

    return(
        <Container maxW="5xl" py={10}>
              <h3 className="section-title">Harm Reductive Resources</h3>
            <EcosystemContent/>
         
        </Container>
    );
}