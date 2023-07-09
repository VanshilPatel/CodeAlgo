import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Heading, Text, Button} from "@chakra-ui/react";

const ProblemDescription = () => {
  const pid  = useParams().id;

  const [problem, setProblem] = useState("");

  

  const init = async () => {
    const response = await fetch(`http://localhost:3000/problem/${pid}` , {
      method: "GET",
    });

    const json = await response.json();
    setProblem(json.problem);
  };

  useEffect(() => {
    init();
  }, []);
  
  

  return (
    <>
      
      <Heading ml={3} pt={3} size={"lg"}>
        {problem && problem.id}. {problem && problem.title}
      </Heading>
      
      {/* <Button  mt={3} ml={3} size='xs' colorScheme={problem && problem.difficulty === "easy" ? "orange" : "green"}>
      {problem && problem.difficulty}
    </Button> */}

    {problem && problem.difficulty === "easy" ? (
  <Button mt={3} ml={3} size="xs" colorScheme="green">
    {problem && problem.difficulty}
  </Button>
) : (
  <Button mt={3} ml={3} size="xs" colorScheme="orange">
    {problem && problem.difficulty}
  </Button>
)}



      <Text ml={3} pt={3} w={"93%"}>
        {problem && problem.description}
      </Text>
     
     
    </>
  );
};

export default ProblemDescription;




