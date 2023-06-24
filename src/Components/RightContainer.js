import React from 'react'
import CodeEditor from './CodeEditor'
import SubmissionButtons from './SubmissionButtons'
import "../Styles/RightContainer.css";

const RightContainer = () => {
  return (
    <div className='right-container'>
      <CodeEditor/>
      <SubmissionButtons/>
    </div>
  )
}

export default RightContainer
