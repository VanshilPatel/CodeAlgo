import React,{ ReactNode } from 'react'
import { NavLink } from 'react-router-dom';


    import {
      Box,
      Flex,
      Avatar,
      HStack,
      Link,
      
      IconButton,
      Button,
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      MenuDivider,
      useDisclosure,
      useColorModeValue,
      Stack,
    } from '@chakra-ui/react';


const Navbar = () => {
    
    
    const Links = ['Problems', 'Discuss', 'Premium'];

    
      return (
        <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10} boxShadow={'md'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              
              <HStack spacing={'36'} alignItems={'center'}>
                <Box fontWeight={'semibold'}>Logo</Box>
                <HStack
                  as={'nav'}
                  spacing={'14'}
                  display={{ base: 'none', md: 'flex' }}>
                   <NavLink to={"/problems"}>Problems</NavLink>
                   <NavLink to={"/"}>Discuss</NavLink>
                   <NavLink color='yellow' to={"/premium"}>Premium</NavLink>
                </HStack>
                <HStack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={5}
          ml={'96'}>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            href={'/signup'}
            _hover={{
              bg: 'green.300',
            }}>
            Sign Up
          </Button>
          
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.600'}
            href={'/login'}
            _hover={{
              bg: 'blue.400',
            }}>
            Sign In
          </Button>
        </HStack>
              </HStack>
              
              
            </Flex>
            
          </Box>
          
        </>
      );
    }


export default Navbar