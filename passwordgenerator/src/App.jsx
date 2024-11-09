import { useState, useEffect,useCallback,useRef } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');
// useref hook
   const passwordref=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) str += '0123456789';
    if (character) str += '@#$%^&*{}';

    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(ch);
    }

    setPassword(pass);
  },[number, character, length]);
   const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
   },[password])
  useEffect(() => {
    passwordGenerator();
  }, [length, number, character,passwordGenerator]);

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-l px-4 py-3 my-8 text-orange-500 bg-green-700">
        <h1 className='text-white text-center'>password generator</h1>
        <br />
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          className='outline-none w-full px-3 py-1 rounded-l-lg'
          placeholder='Password'
          value={password}
          readOnly 
          ref={passwordref}
          />
          
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copypasswordtoclipboard}>Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'> 
              <input type="checkbox" 
              defaultChecked={number}
              id='numberinput'
              onChange={()=>{
                setNumber((prev)=> !prev)
              }}
              />
              <label >Numbers</label>
               </div>
               <input type="checkbox" 
              defaultChecked={character}
              id='characterinput'
              onChange={()=>{
                setCharacter((prev)=> !prev)
              }}
              />
              <label >Character</label>
          </div>
      </div>
    </>
  );
}

export default App;
