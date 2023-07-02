import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Data from "../utils/data.json";
import { Heading, Text } from "@chakra-ui/react";

const ProblemDescription = () => {
  const pid  = useParams().id;
//   const cleanId = pid ? pid.substring(1) : "";
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
  //     const {id} = useParams();

  //   const [itemData, setItemData] = useState(null);

  //   useEffect(() => {
  //     if (id) {
  //       const selectedItem = Data.find((item) => item.id === id);
  //       setItemData(selectedItem);
  //     }
  //     // const selectedItem = Data.find(item => item.id === id);
  //     // setItemData(selectedItem);
  //   }, [id]);

  //   if (!itemData) {
  //     return <div>Loading...</div>;
  //   }

//   const problemId = problem ? problem.id : "";
//   const problemTitle = problem ? problem.title : "";
//   const problemDescription = problem ? problem.description : "";

  return (
    <>
      {/* <Heading ml={3} pt={3} size={'lg'}>1.  Two States</Heading>
      <Text ml={3} pt={3} w={"93%"}>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.</Text> */}

      <Heading ml={3} pt={3} size={"lg"}>
        {problem.id}. {problem.title}
      </Heading>
      <Text ml={3} pt={3} w={"93%"}>
        {" "}
        {problem.description}
      </Text>
     
    </>
  );
};

export default ProblemDescription;
