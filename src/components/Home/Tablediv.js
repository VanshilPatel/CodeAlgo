import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  HStack,
  VStack,
  Text,
  Divider
} from '@chakra-ui/react';

import Tick from "./tick.svg";
import Data from "../../utils/data.json";

function Tablediv() {
  const [problems, setProblems] = useState([]);

  var solved = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/problems');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setProblems(json.problems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HStack display="flex" justifyContent="space-between" alignItems="normal">
        <TableContainer w="container.lg" ml={8} mt={8}>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Title</Th>
                <Th>Acceptance</Th>
                <Th>Difficulty</Th>
              </Tr>
            </Thead>
            <Tbody>
              {problems.map((d) => (
                <Tr key={d.id}>
                  <Td>
                    {d.status === "Solved" && (
                      <Image src={Tick} alt="tick-img" boxSize="20px" />
                    )}
                  </Td>
                  <Td>
                    <a href={`/problem/${d.id}`}>{d.id}.{d.title}</a>
                    {/* <Link to={`/problems/:${d.id}`}>{d.id}.{d.title}</Link> */}
                  </Td>
                  <Td>{d.acceptance}</Td>
                  <Td
                    color={
                      d.difficulty === "Easy"
                        ? "#00B8A3"
                        : d.difficulty === "Medium"
                          ? "#FFC01E"
                          : "#FF375F"
                    }
                  >
                    {d.difficulty}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <VStack bg={'gray.700'} borderRadius={5} w="18rem" h="18rem" mr={8} mt={20} display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="25px" fontWeight="bold" mb={4}>Current Streak: 1🔥</Text>
          <VStack border="2px" borderColor={'gray.800'} w="10rem" h="10rem" borderRadius="100%" display="flex" alignItems="center" justifyContent="center">
            {
              Data.forEach((Data) => {
                if (Data.status === "Solved") {
                  solved++;
                }
              })
            }
            <Text fontSize="25px" fontWeight="bold">{solved}</Text>
            <Divider w={20} />
            <Text fontSize="25px" fontWeight="bold">{Data.length}</Text>
            <Text fontSize="20px" color="gray.300">Solved</Text>
          </VStack>
        </VStack>
      </HStack>
    </>
  );
}

export default Tablediv;
