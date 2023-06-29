import React, { useState } from 'react'
import { Button, Flex} from '@chakra-ui/react'

const Buttons = () => {
    
  return (
    <div>
      <Flex mt={3} ml={"96"}>
        <Button colorScheme='yellow' size='md' ml={24} href="#">Run</Button>
        <Button colorScheme='green' size='md' ml={5} href="#">Submit</Button>
        </Flex>
    </div>
  )
}

export default Buttons
