import React, {useState} from "react";



export default function TextForm(props) {
  const handleUpClick =()=>{

    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
  const handleClear =()=>{
    let newText ='';
    setText(newText);
    props.showAlert("cleaned","success");
  }
  const handleLowClick =()=>{
    
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    
  }
  const handleCopy =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copyed","success");
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("exterspace removed","success");
  }
  const [text,setText] =useState('');
  return (<>
    <div className="container" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
         value= {text}
         onChange={handleOnChange}
          className="form-control"
          id="myBox"
          style={{backgroundColor:props.mode === 'dark' ? 'gray':'white',color : props.mode === 'dark' ? 'white':'#042743'}}
          
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extar Space Remove</button>
    </div>
    <div className="container"style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
      <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  );
}
