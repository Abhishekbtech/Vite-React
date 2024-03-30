import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(4)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@$&%#*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 21);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (

    // Tailwin 

    // <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    //   <h1 className='text-white text-center my-3'>Password generator</h1>
    //   <div className="flex shadow rounded-lg overflow-hidden mb-4">
    //     <input
    //       type="text"
    //       value={password}
    //       className="outline-none w-full py-1 px-3"
    //       placeholder="Password"
    //       readOnly
    //       ref={passwordRef}
    //     />
    //     <button
    //       // onClick={copyPasswordToClipboard}
    //       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    //     >copy</button>

    //   </div>

    //   <div className='flex text-sm gap-x-2'>
    //     <div className='flex items-center gap-x-1'>
    //       <input
    //         type="range"
    //         min={6}
    //         max={100}
    //         value={length}
    //         className='cursor-pointer'
    //         onChange={(e) => { setLength(e.target.value) }}
    //       />
    //       <label>Length: {length}</label>
    //     </div>
    //     <div className="flex items-center gap-x-1">
    //       <input
    //         type="checkbox"
    //         defaultChecked={numberAllowed}
    //         id="numberInput"
    //         onChange={() => {
    //           setNumberAllowed((prev) => !prev);
    //         }}
    //       />
    //       <label htmlFor="numberInput">Numbers</label>
    //     </div>
    //     <div className="flex items-center gap-x-1">
    //       <input
    //         type="checkbox"
    //         defaultChecked={charAllowed}
    //         id="characterInput"
    //         onChange={() => {
    //           setCharAllowed((prev) => !prev)
    //         }}
    //       />
    //       <label htmlFor="characterInput">Spacial Characters</label>
    //     </div>
    //   </div>
    // </div>

    // css

    <div style={{ width: '100%', maxWidth: '30rem', margin: '0 auto', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', padding: '1rem 1.5rem', marginTop: '2rem', backgroundColor: '#2d3748', color: 'balck' }}>
      <h1 style={{ color: '#ffffff', textAlign: 'center', marginTop: 0, marginBottom: '1rem' }}>Password generator</h1>
      <div style={{ display: 'flex', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1rem' }}>
        <input
          type="text"
          value={password}
          style={{ outline: 'none', width: '100%', padding: '0.25rem 0.5rem', backgroundColor: '#ffffff' }}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          style={{ outline: 'none', backgroundColor: '#1e40af', color: '#ffffff', padding: '0.25rem 0.75rem', marginLeft: '-1px' }}
        >copy</button>
      </div>
      <div style={{ display: 'flex', fontSize: '0.875rem', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            style={{ cursor: 'pointer' }}
            onChange={e => setLength(parseInt(e.target.value))}
          />
          <label style={{ color: '#ffffff' }}>Length: {length}</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label htmlFor="numberInput" style={{ color: '#ffffff' }}>Numbers</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label htmlFor="characterInput" style={{ color: '#ffffff' }}>Spacial Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
