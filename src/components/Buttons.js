import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Flex,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';




const Buttons = () => {
  const [showModal, setShowModal] = useState(false);
  const pid  = useParams().id;
  // const [submit , setSubmit ] = useState(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  
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
        onClick={async () => {
                  const response = await fetch(`http://localhost:3000/submission`, {
                    method: "POST",
                    headers: {
                      "authorization": localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                      problemId: pid,
                      //useremail : email
                    })
                  });

                  const json = await response.json();
                  console.log(json);
                
                  navigate('/submission');
                  setStatus(json.status);
                }}
                >
          Submit
        </Button>
        {/* {status === 'AC' ? <p>Accepted</p> : status === 'WA' ? <p>Rejected</p> : null} */}
        {status === 'AC' ? (
        <div className="status-container accepted">
          <div className="symbol">&#x2713;</div>
          <p className="status-text">Accepted</p>
        </div>
      ) : status === 'WA' ? (
        <div className="status-container rejected">
          <div className="symbol">&#x2717;</div>
          <p className="status-text">Rejected</p>
        </div>
      ) : null}
      </Flex>
    </div>
  );
};

export default Buttons;
