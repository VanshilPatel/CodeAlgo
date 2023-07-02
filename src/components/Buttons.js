import React, { useState } from 'react'
import { Button, Flex} from '@chakra-ui/react'

const Buttons = () => {

  const [submission, setSubmission] = useState("");

    
  return (
    <div>
      <Flex mt={3} ml={"96"}>
        <Button colorScheme='yellow' size='md' ml={24} href="#">Run</Button>
        <Button colorScheme='green' size='md' ml={5} href="#" 
            onClick={async () => {
                  const response = await fetch(`https://localhsot:3000/submission`, {
                    method: "POST",
                    headers: {
                      "authorization": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                      problemId: pid,
                      submission: submission
                    })
                  });

                  const json = await response.json();
                  console.log(json);

                }}>Submit</Button>
        </Flex>
    </div>
  )
}

export default Buttons
