// import React, { useState } from 'react'
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,

//   Stack,

//   Button,
//   Heading,

//   useColorModeValue,
// } from '@chakra-ui/react';




// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
         
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" onChange={(e) => {
//                 setEmail(e.target.value)
//               }} />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input type="password" onChange={(e) => {
//                 setPassword(e.target.value)
//               }} />
//             </FormControl>
//             <Stack spacing={10}>
//               {/* <Stack
//                   direction={{ base: 'column', sm: 'row' }}
//                   align={'start'}
//                   justify={'space-between'}>
//                   <Checkbox>Remember me</Checkbox>
//                   <Link color={'blue.400'}>Forgot password?</Link>
//                 </Stack> */}
//               <Button
//                 onClick={async (e) => {
//                   const response = await fetch(`http://localhost:3000/login`, {
//                     method: "POST",
//                     headers: {
//                       'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                       email: email,
//                       password: password
//                     })
//                   });

//                   const json = await response.json();
//                   console.log(json);
//                 }}

//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   )
// }

// export default Login
import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { useToaster  } from 'react-hot-toast/headless';
import toast, { Toaster } from 'react-hot-toast'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await response.json();
      console.log(json);

      // Check if login was successful (adjust the condition based on your response format)
      if (json.msg) {
        // Redirect to the desired route after successful login
        
        navigate('/home');
       
       
      }
      else {
       
        toast.error('Incorrect credentials. Please try again.' );
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
   <Toaster/>
    </Flex>
  );
};

export default Login;
