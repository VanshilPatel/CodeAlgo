import React,{useState} from 'react'


const CodeEditor = () => {
    const [code, setCode] = useState();
  return (
    <div className='text-box-container'>
      <input 
      className="text-box" 
      type='text' 
      onChange={(e) => setCode(e.target.value)}
      placeholder="Your code"
      />
    </div>
  )
}

export default CodeEditor
