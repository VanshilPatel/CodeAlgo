
import { Flex, Box} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";

const Submissions = () => {
    
    const [language, setLanguage] = useState("C++");
    
  return (
    <Flex height="100vh"  marginTop={20} padding={0}>
      <Box
        width="50%"
        height="100%"
        border={"2px"}
        padding={0}
        margin={0}
        ml={"3"}
      >
        <LeftContainer/>
      </Box>
      <Box
        width="50%"
        height="80%"
        border={"2px"}
        padding={0}
        margin={0}
        ml={"5"}
      >
      <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {language}
          </MenuButton>
          <MenuList>
          <MenuItem onClick={()=>{setLanguage("C++")}}>C++</MenuItem>
            <MenuItem onClick={()=>{setLanguage("JavaScript")}}>JavaScript</MenuItem>
            <MenuItem onClick={()=>{setLanguage("Python")}}>Python</MenuItem>
            <MenuItem onClick={()=>{setLanguage("Java")}}>Java</MenuItem>
            <MenuItem onClick={()=>{setLanguage("C#")}}>C#</MenuItem>
            <MenuItem onClick={()=>{setLanguage("Swift")}}>Swift</MenuItem>
          </MenuList>
        </Menu>
        <RightContainer/>
      </Box>
    </Flex>
  );
};

export default Submissions;
