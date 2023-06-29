import { HStack, Heading, VStack , Text ,Box} from '@chakra-ui/react'
import React from 'react'

const Info = () => {
  return (
    <Box ml={36}>
      <HStack m={8} >
      <VStack  p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Video Solutions</Heading>
        <Text>Unlock elaborate premium video solutions like this. Each video includes a detailed conceptual overview and code walkthrough that will efficiently guide you through the problem.</Text>
        </VStack>
        <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Access to Premium Content</Heading>
        <Text>Gain exclusive access to our latest and ever-growing collection of premium content, such as questions, Explore cards, and premium solutions. Detailed explanations are written by our team of algorithm and data structure experts.</Text>
        </VStack>
      </HStack>


      <HStack m={8} >
      <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Select Questions by Company</Heading>
        <Text>Target your studying more accurately towards reaching your dream job. Find out which companies asked specific questions. We have nearly 200 questions from Google alone.</Text>
        </VStack>
        <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Autocomplete
</Heading>
        <Text>Not interested in memorization? With premium access, you'll receive intelligent code autocompletion based on language and an analysis of your source code.</Text>
        </VStack>
      </HStack>


      <HStack m={8}>
      <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Debugger</Heading>
        <Text>Tired of System.out.println(val) . Set breakpoints and debug your code interactively line-by-line right inside our code editor.</Text>
        </VStack>
        <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Lightning Judge
</Heading>
        <Text>Tired of waiting . Premium users get priority judging using an exclusive queue, resulting in a 3X shorter wait time, up to 10X during peak hours.</Text>
        </VStack>
      </HStack>


      <HStack m={8}>
      <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Sort Questions by Prevalence</Heading>
        <Text>Find out which questions turn up most frequently in interviews so that you know where to focus your personal studying. Invaluable data collected from thousands of samples.</Text>
        </VStack>
        <VStack p={4} w={'40%'} alignItems={'flex-start'} bg={'gray.50'} borderRadius={'lg'}>
        <Heading as={'h4'} fontSize={'l'}>Interview Simulations
</Heading>
        <Text>Mock assessments provide you with a way to test your abilities in a timed setting, just like a coding challenge or on-site interview. You choose the company and we will select an appropriate question from our constantly growing database.</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Info
