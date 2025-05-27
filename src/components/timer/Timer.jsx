import React, {useState} from 'react'
function Timer(){

    const now = new Date().toLocaleTimeString();
    const [vrime, setVrime] = useState(now);
    const [isEnabled, SetIsEnabled] = useState(false);


    if(isEnabled){
        setInterval(updateVrime, 1000);
    }



    function updateVrime(){
        setVrime(new Date().toLocaleTimeString())
        SetIsEnabled(!isEnabled)
        console.log("isenabled :", isEnabled)
    }
    
    return(
        <div>
            <h1>{vrime}</h1>
            <h1>vrijednost: {isEnabled ? "true" : "false"}</h1>
            <button onClick={updateVrime}>get time</button>
        </div>
    )
}

export default Timer