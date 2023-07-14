import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Heading, Text, Button} from "@chakra-ui/react";


const ProblemDescription = () => {
  const pid  = useParams().id;

  const [problem, setProblem] = useState("");

  

  const init = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/${pid}` , {
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
      
     

      <Button mt={3} ml={3} size="xs" colorScheme={
        problem.difficulty === "Easy"
          ? "green"
          : problem.difficulty === "Medium"
            ? "yellow"
            : "red"
      }>
        {problem && problem.difficulty}
      </Button>



      <Text ml={3} pt={3} w={"93%"}>
        {problem && problem.description}
      </Text>
     
     
    </>
  );
};

export default ProblemDescription;




