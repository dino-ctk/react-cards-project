import React, {useState} from "react";

function FormName(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    function handleOnChange(event){
        console.log(event.target.value);
        if(event.target.name === "fName"){
            setFirstName(event.target.value)            
        }else if (event.target.name === "lName"){
            setLastName(event.target.value)
        }
        
        //setFirstName("adasd");
    }

    return(
        <div>
            <h1>Hello: {firstName} {lastName}</h1>
            <input name="fName" type="text" value={firstName} onChange={handleOnChange} />
            <input name="lName" type="text" value={lastName} onChange={handleOnChange} />
        </div>
    )

}

export default FormName