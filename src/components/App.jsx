import Card from "./card/Card.jsx"
import contacts from "../contacts.js"
import Condicional from "./condicional.jsx"
import Login from "./login/Login.jsx"
import StatePractice from "./statePractice/StatePractice.jsx";
import Counter from "./counter/Counter.jsx";
import SubmitBtn from "./submit-btn/SubmitBtn.jsx";
import Timer from "./timer/Timer.jsx";
import FormName from "./form-name/FormName.jsx";


function App() {

  let isLoggedIn = false;
  let FetchIsRegisterd = false;

  var allContacts = contacts.map(function(contact){
    return(
      <div key={contact.id}>
        <Card
          id = {contact.id}
          name = {contact.name} 
          url = {contact.imageUrl} 
          tel = {contact.phone} 
          email = {contact.email} />
      </div>
    )
  })

  console.log(allContacts);

  const AllCardsScreen = 
  <div>
    <div>All contacts</div>
    {allContacts}
  </div>  
    

    
var IsDone = false;

function handleClick() {
  IsDone = true
}

  return(
    // <div>
    //     {isLoggedIn ? AllCardsScreen : <Login isRegisterd= {FetchIsRegisterd}/>}
    // </div>
    // <StatePractice/>
    // <Counter></Counter>
    // <SubmitBtn></SubmitBtn>
    // <Timer></Timer>
    <FormName></FormName>
  )
}

export default App
