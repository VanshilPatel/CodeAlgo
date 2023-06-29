import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image
} from '@chakra-ui/react'


import Tick from "./tick.svg";
import Data from "../../utils/data.json";

function Tablediv() {

    return (
        <>
            <TableContainer w="container.lg" ml={8} mt={8}>
                <Table variant='striped' colorScheme='gray' size="md">
                    <Thead>
                        <Tr>
                            <Th>Status</Th>
                            <Th>Title</Th>
                            <Th>Acceptance</Th>
                            <Th>Difficulty</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            Data.map((d) => {
                                return (
                                    <Tr key={d.id}>
                                        <Td>{d.status === "Solved" && <Image src={Tick} alt="tick-img" boxSize="20px" />}</Td>
                                        <Td><a href={"/problem/" + d.id}>{d.id + "." + d.title}</a></Td>
                                        <Td>{d.acceptance}</Td>
                                        <Td color={d.difficulty === "Easy" ? "#00B8A3" : d.difficulty === "Medium" ? "#FFC01E" : "#FF375F"}>{d.difficulty}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer >
        </>
    )
}

export default Tablediv