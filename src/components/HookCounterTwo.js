import React, { useState } from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    
    const incrementFive = () => {
        for(let i = 1 ; i<5; i++){
            console.log("@@@count outside the call back", count);
            setCount(count => {
                console.log("@@@count under callback", count);
               return count + 1;
            });
        }
    }
    return ( 
        <div>
            Count: {count}
            <button onClick = {() => setCount(initialCount)}>Reset</button>
            <button onClick = {() => setCount(count => count + 1)}>increment</button>
            <button onClick = {() => setCount(count => count - 1  )}>Decrement</button>
            <button onClick = {incrementFive}>Increment by 5</button>
        </div>
     );
}
 
export default HookCounterTwo;