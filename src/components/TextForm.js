import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleCrClick = () => {
    let newText = ('');
    setText(newText);
    props.showAlert("Text Cleared","success");
  };
  const handleCpClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extraspaces","success");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCrClick}>
          Clear Text
        </button >
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCpClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExClick}>
          Remove Extraspaces
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        {/* <p>{text.split(' ').filter(function (n) { return n !== '' }).length} words and {text.length} characters</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>Readable in {0.008 * text.split(' ').filter(function (n) { return n !== '' }).length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview it here'}</p>
      </div>
    </>
  );
}
