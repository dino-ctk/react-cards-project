import React, {useRef, useState} from "react";
import { use } from "react";

function FormName(){

    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    })

    function handleOnChange(event){
        console.log(event.target.value);

        console.log(event);

        setFullName((previous) => {
            if(event.target.name === "fName"){
                return{
                    fName: event.target.value,
                    lName: previous.lName
                }
            
            }else if (event.target.name === "lName"){
                return{
                    fName: previous.fName,
                    lName: event.target.value
                }
            }
           
        })

        console.log("fullname je: ", fullName)
    }

    return(
        <div>
            <h1>Hello: {fullName.fName} {fullName.lName}</h1>
            <input name="fName"  type="text" value={fullName.fName} onChange={handleOnChange} />
            <input name="lName" type="text" value={fullName.lName} onChange={handleOnChange} />
        </div>
    )

}

export default FormName