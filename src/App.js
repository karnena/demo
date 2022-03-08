import { useEffect, useRef, useState } from "react";
import './App.css';

function App() {
  const input = useRef();
  const [count1, change1] = useState(0)
  const count2 = useRef(10)
  let c = 1

  useEffect(()=> {
    
    
    console.log(count1, count2, c)
    input.current.textContent=count1;

  },[count1]) 

  const focusInput = () => {
    count2.current += 1
    c +=1
    change1(count1+1)
    
  };
  return (
    <>
      <input type="text"  />
      <button ref={input} onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
