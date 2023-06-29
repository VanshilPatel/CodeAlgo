import React, { useState } from "react";
import { Button, HStack, Input, Menu, MenuButton, MenuItem, MenuList, FormControl } from "@chakra-ui/react"
import { ChevronDownIcon, RepeatIcon } from "@chakra-ui/icons";
import Data from "../../utils/data.json";

function Top() {

    const [difficulty, setDifficulty] = useState("");
    const [acceptance, setAcceptance] = useState("");
    const [search, setSearch] = useState('');
    const [num, setNum] = useState(1);

    function difficultyHandler(e) {
        setDifficulty(e.target.value);
        console.log(difficulty);
    }

    function acceptanceHandler(e) {
        setAcceptance(e.target.value);
        console.log(acceptance);
    }

    function randomQues() {
        let lth = Data.length;
        let x = Math.floor((Math.random() * lth) + 1);
        setNum(x);
    }

    function searchHandler(e) {
        e.preventDefault();

        const res = Data.filter(
            d => {
                return (
                    d.title.toLowerCase().includes(search.toLowerCase())
                )
            }
        )
        setSearch('');
        console.log(res);
    }

    return (
        <>
            <HStack mt={8} ml={8} spacing={8}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Difficulty
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Easy" onClick={difficultyHandler}>Easy</MenuItem>
                        <MenuItem value="Medium" onClick={difficultyHandler}>Medium</MenuItem>
                        <MenuItem value="Hard" onClick={difficultyHandler}>Hard</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Status
                    </MenuButton>
                    <MenuList>
                        <MenuItem value="Solved" onClick={acceptanceHandler}>Solved</MenuItem>
                        <MenuItem value="Unsolved" onClick={acceptanceHandler}>Unsolved</MenuItem>
                    </MenuList>
                </Menu>
                <form onSubmit={searchHandler}>
                    <FormControl w="96">
                        <Input value={search} placeholder="Search questions" onChange={(e) => { setSearch(e.target.value) }} />
                    </FormControl>
                </form>
                <a href={"/problem/" + num} onClick={randomQues}><RepeatIcon boxSize={9} /> Pick One</a>
            </HStack>

        </>
    )
}

export default Top