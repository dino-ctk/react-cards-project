function Condicional(){

    const number = 7;

    if(number > 2 && number < 10){

    }

    const content = (number > 5) ? <h1>Naslov nije</h1> : null;

    const contentReact = (number > 8) && <h1>Naslov nije</h1>
    console.log(contentReact);

    return(
        <div>
            {contentReact}
        </div>
    )

}

export default Condicional