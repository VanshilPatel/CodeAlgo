
import { Flex, Box } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";


const Submissions = () => {

  const lg = [
    {
      "id": "1",
      "name": "C++"
    },
    {
      "id": "2",
      "name": "Javascript"
    },
    {
      "id": "3",
      "name": "Python"
    },
    {
      "id": "4",
      "name": "Java"
    },
    {
      "id": "5",
      "name": "C#"
    },
    {
      "id": "6",
      "name": "Swift"
    }
  ]

  const lgData = [
    {
      "id": "1",
      "code": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {

            }
        };`
    },
    {
      "id": "2",
      "java": `/**
      * @param {number[]} nums
      * @param {number} target
      * @return {number[]}
      */
     var twoSum = function(nums, target) {
         
     };`
    },
    {
      "id": "3",
      "code": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {

            }
        };`
    },
    {
      "id": "4",
      "code": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {

            }
        };`
    },
    {
      "id": "5",
      "code": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {

            }
        };`
    },
    {
      "id": "6",
      "code": `class Solution {
        public:
            vector<int> twoSum(vector<int>& nums, int target) {

            }
        };`
    },
  ]

  console.log(lgData[0]["C++"]);

  const [language, setLanguage] = useState(lgData[0].code);
  const [lgopt, setLgopt] = useState(lg[0].name);

  return (
    <>
      <Flex height="100vh" marginTop={2} padding={0}>
        <Box
          width="50%"
          height="100%"
          border={"2px"}
          padding={0}
          margin={0}
          ml={"3"}
        >
          <LeftContainer />
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
              {lgopt}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => { setLanguage(lgData[0].code); setLgopt(lg[0].name) }}>C++</MenuItem>
              <MenuItem onClick={() => { setLanguage(lgData[1].java); setLgopt(lg[1].name) }}>JavaScript</MenuItem>
              <MenuItem onClick={() => { setLanguage(lgData[2].code); setLgopt(lg[2].name) }}>Python</MenuItem>
              <MenuItem onClick={() => { setLanguage(lgData[3].code); setLgopt(lg[3].name) }}>Java</MenuItem>
              <MenuItem onClick={() => { setLanguage(lgData[4].code); setLgopt(lg[4].name) }}>C#</MenuItem>
              <MenuItem onClick={() => { setLanguage(lgData[5].code); setLgopt(lg[5].name) }}>Swift</MenuItem>
            </MenuList>
          </Menu>
          <RightContainer lang={language} />
        </Box>
      </Flex>
    </>
  );
};

export default Submissions;
