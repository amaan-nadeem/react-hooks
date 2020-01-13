import React, {useState} from 'react';

const HookCounter = () => {
    const [ count, setCount ] = useState(0);
    
    return (  
        <div style={{display: "flex", justifyContent: "center"}}>
          <button onClick={() => setCount(count+1)}>Increment</button>
          <span style = {{fontSize: "30px", marginLeft: "20px"}}>{count}</span>
        </div>
        );
   }
 
export default HookCounter;