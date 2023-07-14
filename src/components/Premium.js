import { Heading, Box, Text,Image, Center, VStack, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import PriceCard from './PriceCard'
import Info from './Info'
import logoimg from "../components/logo2.png"

const Premium = () => {
  return (
    <>
      <Flex align={'center'} justify={'center'} mt={20}>   <Image src={logoimg} height={'80px'} /> </Flex>
      
      <Box textAlign={'center'}>
      
        <Heading as="h1" fontSize="7xl" mt={'32'}>Premium</Heading>
        <Text fontSize="lg" fontWeight={600} mt={3} color={'gray.500'}>
          Get started with a CodeAlgo Subscription that works for you.
        </Text>
      </Box>

      <Box textAlign={'center'}>
        <Heading as="h3" fontSize="5xl" mt={'32'}>Pricing</Heading>
        <Text fontSize="lg" fontWeight={600} mt={3} color={'gray.500'}>
          Take 15% off monthly and 20% off yearly subsciptions
        </Text>
      </Box>

      <PriceCard />
      <Info />


    </>
  )
}

export default Premium
