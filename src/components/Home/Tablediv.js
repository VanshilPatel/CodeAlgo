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
  Divider,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  FormControl,
  Input
} from '@chakra-ui/react';

import Tick from "./tick.svg";
import Data from "../../utils/data.json";
import { ChevronDownIcon, RepeatIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

function Tablediv() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selectedOpt, setSelectedOpt] = useState("10 / page");
  const [filters, setFilters] = useState({ difficulty: '', status: '' });
  const [search, setSearch] = useState('');
  const [num, setNum] = useState(1);

  var solved = 0;

  function selectPageHandler(selectedPage) {
    if (selectedPage >= 1 && selectedPage <= Data.length / perPage && selectedPage !== page) {
      setPage(selectedPage);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/problems');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        const filteredProblems = json.problems.filter((d) => {
          const isDifficultyMatch = d.difficulty === filters.difficulty || filters.difficulty === '';
          const isStatusMatch = d.status === filters.status || filters.status === '';
          const isSearchMatch = d.title.toLowerCase().includes(search.toLowerCase());
          return isDifficultyMatch && isStatusMatch && isSearchMatch;
        });
        setProblems(filteredProblems);
        setPage(1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters, search]);

  function randomQues() {
    let lth = Data.length;
    let x = Math.floor((Math.random() * lth) + 1);
    setNum(x);
  }

  function SearchHandler(e) {
    e.preventDefault();
    setFilters({ difficulty: '', status: '' });
    setPage(1);
  }


  return (
    <>
      <HStack mt={8} ml={8} spacing={8}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Difficulty
          </MenuButton>
          <MenuList>
            <MenuItem value="" onClick={() => { setFilters({ ...filters, difficulty: '' }) }}>All</MenuItem>
            <MenuItem value="Easy" onClick={() => { setFilters({ ...filters, difficulty: 'Easy' }) }}>Easy</MenuItem>
            <MenuItem value="Medium" onClick={() => { setFilters({ ...filters, difficulty: 'Medium' }) }}>Medium</MenuItem>
            <MenuItem value="Hard" onClick={() => { setFilters({ ...filters, difficulty: 'Hard' }) }}>Hard</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Status
          </MenuButton>
          <MenuList>
            <MenuItem value="" onClick={() => { setFilters({ ...filters, status: '' }) }}>All</MenuItem>
            <MenuItem value="Solved" onClick={() => { setFilters({ ...filters, status: 'Solved' }) }}>Solved</MenuItem>
            <MenuItem value="Unsolved" onClick={() => { setFilters({ ...filters, status: 'Unsolved' }) }}>Unsolved</MenuItem>
          </MenuList>
        </Menu>
        <form onSubmit={SearchHandler}>
          <FormControl w="96">
            <Input value={search} placeholder="Search questions" onChange={(e) => { setSearch(e.target.value) }} />
          </FormControl>
        </form>
        <a href={"/problem/" + num} onClick={randomQues}><RepeatIcon boxSize={9} /> Pick One</a>
      </HStack>


      <HStack display="flex" justifyContent="space-between" alignItems="normal">
        <VStack>
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
                {problems.slice(page * perPage - perPage, page * perPage).map((d) => (
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
          <HStack mb={8} mt={8} ml={8} w="container.lg" display="flex" justifyContent="space-between">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {selectedOpt}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => { setPerPage(5); setSelectedOpt("5 / page") }}>5 / page</MenuItem>
                <MenuItem onClick={() => { setPerPage(10); setSelectedOpt("10 / page") }}>10 / page</MenuItem>
                <MenuItem onClick={() => { setPerPage(20); setSelectedOpt("20 / page") }}>20 / page</MenuItem>
              </MenuList>
            </Menu>
            <HStack>
              <Button onClick={() => selectPageHandler(page - 1)}><ArrowBackIcon/></Button>
              {
                [...Array(Math.ceil(problems.length / perPage))].map((_, i) => {
                  return <Button backgroundColor={page === i + 1 ? "whiteAlpha.400" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</Button>
                })
              }
              <Button onClick={() => selectPageHandler(page + 1)}><ArrowForwardIcon/></Button>
            </HStack>
          </HStack>
        </VStack>
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
