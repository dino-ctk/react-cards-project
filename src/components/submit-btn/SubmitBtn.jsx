import React, {useState} from "react";

function SubmitBtn(){

    const [inputVal, setInputVal] = useState("");
    const [title, setTitle] = useState("title");
    const [mouse, setMouse] = useState(false);

    function handleClick(){
        setTitle(inputVal);
    }

    function handleOnChange(event){
     setInputVal(event.target.value);
    }

    function toogleMouseState(){
        setMouse(!mouse);
    }

    const elemnt = mouse && <p>neki pargraf</p>;

    return(
        <div>
            <h1>{title}</h1>
            <input 
                type="text" 
                placeholder="stavi tekst"
                onChange={handleOnChange}
                value={inputVal}
            />
            <button 
                style={mouse ? {backgroundColor: "black", color: "white"} : {}}
                onClick={handleClick}
                onMouseOut={toogleMouseState}
                onMouseOver={toogleMouseState}
            >
                    Submit
            </button>
            {elemnt}
        </div>
    )

}

export default SubmitBtn