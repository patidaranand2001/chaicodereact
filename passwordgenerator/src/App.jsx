import { useState, useCallback, useEffect,useRef } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) str += "0123456789"
    if (charallow) str += "!@#$%^&*(){}"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numallow, charallow, setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password])
  useEffect(() => {
    passwordGenerator()
  },
    [length, numallow, charallow])
  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-md-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-700'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-3 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setNumallow((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numallow}
              id="charInput"
              onChange={() => {
                setCharallow((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
