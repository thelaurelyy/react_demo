import React, { useState } from "react";

function Example() {

    const [ count, setCount ] = useState(0)
    return (
        <div>
            <div>You click { this.state.count } times.</div>
            <button onClick={()=>{setCount(count+1)}}>Click me</button>
        </div>
    );
}

export default Example