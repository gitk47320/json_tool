import { useState } from 'react'
import { Input } from "@/components/ui/input"

function App() {
  return (
    <>
      <div className="flex items-center px-8 w-screen h-16 bg-sky-400 drop-shadow-2xl shadow-md">
        <h1 className="font-bold text-2xl">JSON吐き出しツール</h1>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className='flex flex-col space-y-2 max-w-2xl mx-auto'>
          <div className='flex items-start space-x-4'>
            <label htmlFor="inputFieldKey" className="text-lg font-medium w-32">キー:</label>
            <Input id="inputFieldKey" className="w-64" />
          </div>
          <div className='flex items-start space-x-4'>
            <label htmlFor="inputFieldName" className="text-lg font-medium w-32">name:</label>
            <Input id="inputFieldName" className="w-64" />
          </div>
          <div className='flex items-start space-x-4'>
            <label htmlFor="inputFieldNameKana" className="text-lg font-medium w-32">name_kana:</label>
            <Input id="inputFieldNameKana" className="w-64" />
          </div>
          <div className='flex items-start space-x-4'>
            <label htmlFor="inputFieldDescription" className="text-lg font-medium w-32">description:</label>
            <Input id="inputFieldDescription" className="w-64" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
