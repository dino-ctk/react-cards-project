import React, {useRef, useState} from "react";
import { use } from "react";

function FormName(){

    const cirtusi = ["limun", "grejp", "mandarina"]
    const voce = ["banana", ...cirtusi, "jabuka", "mango"]

    // console.log(voce);

    const cijeloName = {
        firstName: "dino",
        lastName: "Duvnjak"
    }

    const user = {
        ...cijeloName,
        id:1,
        username: "bongo"
    }





    const [fullName, setFullName] = useState({
        fName: "",
        lName: ""
    })


    function handleOnChange(event){
        console.log(event.target);

        const {name, value, type} = event.target;

        console.log(name);
        console.log(value);
        console.log(type);


        const [red, green, blue] = ["browsVlue", "greenValue", "blueValue"]

        console.log(red)
        console.log(green)

        setFullName((previous) => {
            console.log("previous je: ", previous)
            console.log("current je :", value);
            var noveVrijednosti = {
                ...previous,
                [name]: value
            }
           // console.log("nove val: ", noveVrijednosti)
            return noveVrijednosti;
        })
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