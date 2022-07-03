import React ,{useState} from "react";

export default function TextForm(props) {
    const [Text, setText] = useState("");
   const convertToUpperCase=function(){
        const text=Text.toUpperCase();
        console.log(text);
        setText(text)
        props.showAlert(" Converted to upper case successfully!","success")
    }
    const replacetext=function(e){

        const newtext=e.target.value;
        setText(newtext);
    }
    const convertToLowerCase=function(){
        const text=Text.toLocaleLowerCase();
        // console.log(text);
        setText(text)
        props.showAlert(" Converted to lower case successfully!","success")
    }
    const arr=Text.split(" ")
  const len=arr.length;
  

var cnt=0;
arr.forEach((val)=>{
if(val=='')cnt=cnt+1;
// console.log(val);
})
const clearText=()=>{
  setText('');
  props.showAlert(" Clear text successfully!","success")
}
const removeSpaces=()=>{
  // console.log(Text)
  
  const string=Text.replace(/\s{2,}/g, ' ').trim()
  setText(string);
  // console.log(string) 
  props.showAlert(" Extra spaces has been removed successfully!","success")
}
  return (
    <div  style={{color:props.mode=='light'?"#042743":"yellow"}}>
      
      <div className="mb-3">
       <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          value={Text}
          onChange={replacetext}
          style={{backgroundColor:props.mode=='light'?"white":"grey",color:props.mode=='light'?"#042743":"white"}}
        ></textarea>
      </div>
      <button onClick={convertToUpperCase} className="btn btn-primary mx-2">convert to uppercase</button>
      <button onClick={convertToLowerCase} className="btn btn-primary mx-2">convert to lowercase</button>
      <button onClick={clearText} className="btn btn-primary mx-2">clear Text</button>
      <button onClick={removeSpaces} className="btn btn-primary mx-2">Remove extra spaces</button>
   <h3> No of words are:{len-cnt}</h3>
   <h3> No of characters are:{Text.length-len+1}</h3>
   <h3> Avg Time needed to raed the Text:{(len-cnt)/200} minutes</h3>
   <h3> Preview:</h3>
   <div>
    {Text.length==0?"Enter the text to preview":Text}
   </div>
    </div>
  );
}
