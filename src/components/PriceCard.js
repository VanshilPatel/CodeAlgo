
import React  from 'react'

import {
    Flex,
 
  HStack,
  Heading,
  Text,
  VStack,
  
  Button,
} from '@chakra-ui/react';




const PriceCard = () => {
  return (
        
            <Flex justifyContent={'center'}>
                <VStack w={'30%'} bg='gray.50' borderRadius={'sm'} p={12} m={7} alignItems={'flex-start'} >
                    <HStack >
                        <Heading as="h4" fontSize="2xl" >Monthly</Heading>
                        <Text fontWeight="400" color={'gray.600'} fontSize="l" mt={1}>billed monthly</Text>
                    </HStack>
                    <Text mt={4} >
                    Down from $39/month.
                    Our monthly plan grants access to all premium features, the best plan for short-term subscribers.
                    </Text>
                    <Heading as="h2" fontSize="4xl" mt={3}>$29.75</Heading>
                    <Button w={"100%"} bg={'blackAlpha.900'} color={'white'} variant="solid">
                       Subscribe
                  </Button>
                </VStack>

                <VStack w={'40%'} bg='#FEF0D9' borderRadius={'sm'} p={12} m={7} alignItems={'flex-start'} >
                    <HStack >
                        <Heading as="h4" fontSize="3xl" >Yearly</Heading>
                        <Text fontWeight="400" color={'gray.600'} fontSize="l" mt={1}>billed yearly</Text>
                    </HStack>
                    <Text mt={4} >
                    Our most popular plan previously sold for $299 and is now only $10.60/month.
This plan saves you over 60% in comparison to the monthly plan.
                    </Text>
                    <Flex>
                    <Heading as="h2" fontSize="5xl" mt={3}>$10.60</Heading>
                    <Text fontWeight="400" color={'gray.600'} fontSize="xl" ml={3} mt={8}>/month</Text>
                    </Flex>
                    <Button w={"100%"} bg={'blackAlpha.900'} color={'white'} variant="solid">
                       Subscribe
                  </Button>
                </VStack>
            </Flex>
          

                
            
       












  )}
  
        
  
          
 
    
      
  


export default PriceCard
