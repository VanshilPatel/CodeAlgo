import React , { useEffect,useState } from 'react'
import {useParams} from "react-router-dom"

import Data from "../utils/data.json"
import { Heading,Text } from '@chakra-ui/react'

const ProblemDescription = () => {
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
  return (
    <>
      <Heading ml={3} pt={3} size={'lg'}>1.  Two States</Heading>
      <Text ml={3} pt={3} w={"93%"}>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.</Text>
    </>
  )
}

export default ProblemDescription
