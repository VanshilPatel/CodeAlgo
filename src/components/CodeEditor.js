import React, { useState, useEffect } from 'react';
import { Textarea } from "@chakra-ui/react";


const CodeEditor = (props) => {
  const [code, setCode] = useState(props.lg);

  useEffect(() => {
    setCode(props.lg);
  }, [props.lg]);

  return (
    <Textarea
      height="92.9%"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Your code"
    />
  );
};

export default CodeEditor;
