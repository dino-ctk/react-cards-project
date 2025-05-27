import React, {useState} from "react"

class CounterComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }

        this.setCounter = this.setCounter.bind(this)
    }

    setCounter(){
        ///
    }

    render(){
        return(
            <div>
                <h1>{counter}</h1>
                <button onClick={x => setCounter(counter + 1)}>+</button>
                <button onClick={y => setCounter(counter - 1)}>-</button>
            </div>
        )
    }


}

export default CounterComponent