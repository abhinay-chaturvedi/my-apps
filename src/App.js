import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from "react";
import Alert from "./components/alert";

function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  setTimeout(()=>{
setAlert(null)
  },3000)
  }
const toggleMode=()=>{
  if(Mode=='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert(" Dark Mode has been enabled","success");

  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(" light Mode has been enabled","success");
  }
  // console.log(" successfully run");
}

  return (
    <>
   <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
<div className="container">
<Alert alert={alert}/>
  <TextForm showAlert={showAlert} heading="Please enter your text here" mode={Mode}/>
</div>

   </>
  );
}

export default App;
