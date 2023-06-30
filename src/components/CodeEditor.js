import React,{useState} from 'react'
import {  Textarea } from "@chakra-ui/react";


const CodeEditor = () => {
    const [code, setCode] = useState();
  return (
    <>
      <Textarea  height="92.9%"  onChange={(e) => setCode(e.target.value)}
      placeholder="Your code"></Textarea>
     
    </>
  )
}

export default CodeEditor
