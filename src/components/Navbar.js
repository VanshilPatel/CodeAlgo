import React from "react";
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import logoimg from "../components/logo/logo1.png"

const Navbar = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={10}
        boxShadow={"md"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={"36"} alignItems={"center"}>
            <Box fontWeight={"semibold"}>
              {" "}
              <NavLink to={"/"}>
                {" "}
                <Image src={logoimg} alt="Dan Abramov" />
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={"14"}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to={"/home"}>Problems</NavLink>
              <NavLink to={"/discuss"}>Discuss</NavLink>
              <NavLink color="yellow" to={"/premium"}>
                Premium
              </NavLink>
            </HStack>
            <HStack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={5}
              ml={"96"}
            >
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.500"}
                href={"/signup"}
                _hover={{
                  bg: "green.300",
                }}
              >
                Sign Up
              </Button>

              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"blue.600"}
                href={"/login"}
                _hover={{
                  bg: "blue.400",
                }}
              >
                Sign In
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
