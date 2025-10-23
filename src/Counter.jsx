import { useState } from 'react';



 
export default function counter() {
    const[count, setCount] = useState(0);
    
    let increment = () => {setCount(count + 1);
    console.log(count);
    }

    return(
        <>
        <h1>State in React</h1>
        
        <button onClick = {increment}> Counter :  {count}</button>
        </>
    )
}