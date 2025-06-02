import React, {useRef, useState} from "react"
import Navbar from "./NavBar";

function ListItem({id, text, onCLickedCallback}){
    return(
        <div
            style={{
                width: "100px",
                height: "50px"
            }}
            onClick={() => {
                onCLickedCallback(id);
            }}
        >
            <span>{text}</span>
        </div>
    )
}

function ContactsList(){

    const inputValue = useRef("")
    const [items, setItems]  = useState([])

    
    function handleClick(){
        setItems( previous => {
                return [...previous, inputValue.current.value]
            }
        )

    }

    function RemoveItem(id){
        console.log("remove item called");
        // moramo vratiti array bez clana koji ima ovaj id
        const newItems = [...items]
        const novi = newItems.filter((item,index) =>{
            return  index !== id
        })
        setItems(novi)



        setItems( previous => {
            return previous.filter((item, index) => {
                return  index !== id
            })
        })
    }

    return(
        <div>
            <Navbar />            
            <input type="text"  placeholder="dodaj" ref={inputValue}/>
            <button onClick={handleClick}>Add</button>
            <div>
                {items.map((item, index) => {
                    console.log(item);
                    return <ListItem key={index} id={index} text={item} onCLickedCallback={RemoveItem}></ListItem>
                })}
            </div>
        </div>
    )

}

export default ContactsList