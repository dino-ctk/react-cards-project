import React, {useState} from "react";

function ColorBox({color}){
    return(
        <div
            style={{
                display: "inline-block",
                marginRight: "5px",
                width: "100px",
                height: "100px",
                backgroundColor: color,
                border: "1px solid black"
            }}
        >PRoba</div>
    )
}

function BoxGenerator(){

    const [colors, setColors] = useState(["#FF6384", "#36A2EB", "#FFCE56"])

    console.log("colors |:", colors);

    function generateRandomColor(){
        return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    }



    function handleNewRandomColor(){

        const newColor = generateRandomColor();
        // u postojeci array appenduj novu boju
        setColors(prev => [...prev, newColor] );
    }

    function handleRemoveLastColor(){
        setColors(prev => [...prev.slice(0,-1)]);
    }

    function handleShuffle(){

        setColors(prev => {
            const array = [...prev]
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        })

    }

    return(
        <div>
            <div>
                {
                    colors.map((color, index) => {
                        console.log(color, index);
                        return <ColorBox key={index} color={color}></ColorBox>
                    })
                }
            </div>
            <div>
                <button onClick={handleNewRandomColor}> Add random color</button>
                <button onClick={handleRemoveLastColor}> Remove last</button>
                <button onClick={handleShuffle}> Shuffle shit</button>
            </div>
        </div>

    );

}

export default BoxGenerator

