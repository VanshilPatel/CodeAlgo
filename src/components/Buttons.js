import React, { useState } from "react";
import {
  Button,
  Flex,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

const Buttons = () => {
  const [showModal, setShowModal] = useState(false);
  
  // const [submit , setSubmit] = useState(false);
  // const submitClick = () =>{
  //   setSubmit(true);
  // }
  



  const handleClick = () => {
    setShowModal(true);

    
    setTimeout(() => {
      setShowModal(false);
    }, 1200);
  };

  return (
    <div>
      <Flex mt={3} ml={"96"}>
        <Button
          colorScheme="yellow"
          size="md"
          ml={24}
          href="#"
          onClick={handleClick}
        >
          Run
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          isCentered
        >
          <ModalOverlay />
          <ModalContent width={"250px"} height={"250px"}>
            {/* <ModalCloseButton /> */}
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <div className="spinner">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
               
                <div className="spinner-animation"></div>
              </div>
              <div> Compiling....</div>
            </ModalBody>
           
          </ModalContent>
        </Modal>
        {showModal && <div className="backdrop"></div>}
        <Button colorScheme="green" size="md" ml={5}  
        // onClick={async () => {
        //           const response = await fetch(`http://localhost:3000/submission`, {
        //             method: "POST",
        //             headers: {
        //               "authorization": localStorage.getItem("token")
        //             },
        //             body: JSON.stringify({
        //               problemId: pid,
        //               submission: submission
        //             })
        //           });

        //           const json = await response.json();
        //           console.log(json);

        //         }}
                >
          Submit
        </Button>
      </Flex>
    </div>
  );
};

export default Buttons;
