
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './input.css';

let spanish = ['Tomar', 'Caminar', 'Cantar', 'Bailar']
let english = ['To take/drink', 'To walk', 'To sing', 'To dance']


const NavBar = () => {
  return (
    <div className='bg-blue-400 py-4 shadow-lg hover:shadow-xl duration-300 opacity-95 hover:opacity-100'>
      <div className='flex justify-between items-center'>
        <div className='flex ml-5'>
        <h1 className='hover:text-gray-800 duration-300 font-mukta text-3xl text-black font-bold'>TRANSLATE</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 ml-2 hover:animate-rotate">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
            </svg>
        </div>

          <button className='px-3 py-2 rounded-md font-bold text-black mr-5 hover:text-gray-700 duration-300' id='button'>GITHUB</button>

      </div>
    </div>
  )
}


const Hook = () => {

  const item = spanish[0]

  const [word, setWord] = useState(item)

  const numvoc = 0

  const [number, setNumber] = useState(numvoc)

function Word() {
  setWord(english[number])
  console.log(number)
  setNumber(number + 1)
  if (number === spanish.length - 1) {
    setNumber(0)
  }
}
  
function NewWord() {
  console.log('not ended')
  setWord(spanish[number])
  console.log(numvoc) 
}

  return (
    <div className='flex flex-col items-center justify-center'>
    <p className='text-3xl mt-3 p-5 px-24 border-2 box-content text-center rounded-2xl hover:font-medium duration-300 hover:py-4 hover:animate-wiggle'> { word } </p>
    <div className='flex'>
    <button className='mt-2 border-2 border-green-100 px-4 py-3 rounded-md hover:bg-green-100 hover:font-medium duration-300 hover:px-7 active:animate-shake' onClick={Word}>TRANSLATE</button>
    <button className='mt-2 ml-2 border-2 border-red-100 px-4 py-3 rounded-md hover:bg-red-100 hover:font-medium duration-300 hover:px-7 active:animate-shake' onClick={NewWord}>NEW WORD</button>
    </div>
    </div>
  )
}

const Input = () => {

  const [voceng, setEng] = useState('hello')
  const [vocspan, setSpan] = useState('hello2')

  const handlesubmit=(e)=>{
    e.preventDefault()
    english.push(voceng)
    spanish.push(vocspan)
    console.log(spanish,english)
  }

  return (
    <div>
      <div className='flex items-center justify-center flex-col mt-6'>
          <h2 className='text-xl mb-5 border-b-2 px-2'>
            ADD WORD
          </h2>
          <div>
            <label className='mt-6'>ENGLISH</label>
          </div>

          <input className='w-100 my-2 border-2 rounded-md focus:outline-none focus:outline-double focus:border-gray-500' type="text" onChange={(e)=>setEng(e.target.value)}></input>

          <div>
            <label className='mt-6'>SPANISH</label>
          </div>

          <input className='w-100 my-2 border-2 rounded-md focus:outline-none focus:outline-double focus:border-gray-500' type="text" onChange={(e)=>setSpan(e.target.value)}></input>
          <button className='mt-3 border-2 border-green-100 px-3 py-2 rounded-xl hover:bg-green-100 hover:font-medium duration-300 hover:px-7 hover:py-1 active:animate-shake' onClick={handlesubmit}>SUBMIT</button>
      </div>

      <div>
    </div>

    </div>
  )
}



const App = () => {
  return (
    <div>
    <NavBar />
    <Hook />
    <Input />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)