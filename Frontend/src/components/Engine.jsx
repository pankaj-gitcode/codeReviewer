import React, { useState } from 'react'

import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { Editor } from '@monaco-editor/react'
import axios from 'axios'

export default function Engine ()  {
    const [prompt ,setPrompt] = useState(`function sum(){return a + b}`)
    const [output, setOutput] = useState('')

    const promptHandler = async()=>{
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL , {prompt});
       console.log(response)
       setOutput(response.data.message)
       setPrompt(``)
    }


    return (<>
        {/* ----- WRAPPER ----- */}
        <div className='grid grid-cols-2 gap-3'>
            
            {/* ---------- LHS ---------- */}

                    {/* ----- CONTAINER ----- */}
                <div className='h-[100vh] border-8 border-[#fff]'>
                    <Editor
                        height='95%'
                        defaultValue={prompt}
                        onChange={newValue=>setPrompt(newValue)}
                        theme='vs-dark'
                        options={{
                            minimap:{enabled:true},
                            automaticLayout:true,
                            fontSize:'12'
                        }}
                    />
                    <button className='bg-gray-500 w-full h-[5vh] cursor-pointer active:scale-x-105
                    duration-300 rounded-[5px] '
                    onClick={()=>promptHandler()}
                    >Enter</button>

                </div>

            {/* ---------- RHS ---------- */}
                    {/* ----- CONTAINER ----- */}
                <div className='h-[100vh] bg-black text-white 
                overflow-auto border-4 border-[#fff] text-sm p-2'>
                    
                    <Markdown 
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                    >
                    {output}
                    </Markdown>
                </div>

        </div>
    </>  
      )
}
