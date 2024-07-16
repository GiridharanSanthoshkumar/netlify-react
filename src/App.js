import React from "react";
import data from "./data.json";
let image=data;
function App()
{

   

    
    return <div>
        <h1>hello</h1>
        {image.map((i)=>{return <h1>veryy goof</h1>})}

    </div>
}
export default App;