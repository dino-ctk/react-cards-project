import React, {useState} from "react"

function StatePractice(){

    const [nasBool, setState] = useState(false)
    //console.log("ovo je state: ", state);

    // const rgb = ["4454", "3434", "534657"]
    // console.log(rgb[0]);
    // console.log(rgb[1]);
    // console.log(rgb[2]);

    // const [red, green, blue] = rgb;
    // console.log(red);
    // console.log(green);
    // console.log(blue);

    function handleClick(){
        setState(!nasBool);
    }


    return(
        <div>
            <p style={{textDecoration: nasBool ? "line-through" : "none"}}>neki paragraf tekst</p>
            <button onClick={handleClick}>stisni me</button>
        </div>
    )

}

export default StatePractice