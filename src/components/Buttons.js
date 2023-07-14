import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Flex,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Tick from "../utils/tick.json";
import Cross from "../utils/cross.json";
import Lottie from "lottie-react";
import Compile  from "../utils/compile.json";





const Buttons = () => {
  const [showModal, setShowModal] = useState(false);
  const pid  = useParams().id;
  // const [submit , setSubmit ] = useState(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const handleSubmit = () => {
    setShowSubmitModal(true);
  }
  
  // const [submit , setSubmit] = useState(false);
  // const submitClick = () =>{
  //   setSubmit(true);
  // }
  


 // for run button
  const handleClick = () => {
    setShowModal(true);
    // setSubmit(true)
    
    
    setTimeout(() => {
      setShowModal(false);
    }, 8000);
  };

  return (
    <div>
      <Flex mt={3} ml={"96"}>
        <Button
          colorScheme="orange"
          bg={'orange.500'}
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
          <ModalContent width={"250px"} height={"280px"}>
            {/* <ModalCloseButton /> */}
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VStack spacing={"2"}>
              <Lottie animationData={Compile} loop={false}/>
              <div style ={{fontSize : '1.5rem' , fontWeight:'bold'}}> Compiling....</div>
              </VStack>
             
            </ModalBody>
           
          </ModalContent>
        </Modal>
        {showModal && <div className="backdrop"></div>}
        <Modal isOpen={showSubmitModal} onClose={() => setShowSubmitModal(false)} isCentered>
          <ModalOverlay />
          <ModalContent width={"250px"} height={"250px"}>
            <ModalHeader>Problem Status</ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex"
              alignItems="center"
              justifyContent="center">
              {/* <p>Meet</p> */}

              {status === 'AC' ? (
                <VStack>
                <div style ={{width:'6rem'}}><Lottie animationData={Tick} loop={false}/></div>
                
                <p style ={{fontSize : '1.5rem' , fontWeight:'bold'}}>Accepted</p>
                </VStack>
                
              ) : status === 'WA' ? (
                <VStack>
                <div style ={{width:'6rem'}}><Lottie animationData={Cross} loop={false}/></div>
                
                <p style ={{fontSize : '1.5rem' , fontWeight:'bold'}}>Rejected</p>
                </VStack>
              ) : null}
            </ModalBody>
          </ModalContent>
        </Modal>
        
                <Button colorScheme="green" size="md" ml={5}
          onClick={async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/submission`, {
              method: "POST",
              
               headers: {
                      "authorization": localStorage.getItem("token")
                    },
              body: JSON.stringify({
                problemId: pid,
               
              })
            });

            setShowSubmitModal(true);
            const json = await response.json();
            setStatus(json.status);
            console.log(json);
            navigate('/submission');

          }}
        >
          Submit
        </Button>
        
      </Flex>
    </div>
  );
};

export default Buttons;
