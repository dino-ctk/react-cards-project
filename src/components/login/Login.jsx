function Login(props){
    const neka = false;
    var buttonText = props.isRegisterd ? "Submit" : "Reister"
    return(
        <form>
           <input type="text" placeholder="Username"/>     
           <input type="password" placeholder="Password"/>
           {!neka && (<input type="password" placeholder="Confirm password" />)}
           <button type="submit">{buttonText}</button>   
        </form>
    )
}

export default Login