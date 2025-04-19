import React, {useState} from "react";



export default function TextForm(props) {
  const handleUpClick =()=>{

    let newText =text.toUpperCase();
    setText(newText);
  }
  const handleLowClick =()=>{

    let newText =text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    
  }
  const [text,setText] =useState('');
  return (<>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
         value= {text}
         onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert Lowercase</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
    <p> {text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
