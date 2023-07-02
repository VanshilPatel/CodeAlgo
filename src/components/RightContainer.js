import React from 'react'

import Buttons from "./Buttons";
import CodeEditor from "./CodeEditor";

const RightContainer = (props) => {
  return (

    <>
      <CodeEditor lg={props.lang} />
      <Buttons />
    </>
  )
}

export default RightContainer
