import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    let myStyle={
      color : props.mode==='dark'?'white':'#042743',
      backgroundColor : props.mode==='dark'?'rgb(57 55 101)':'white'
    }
  return (
    <>
    <div className="container" style={myStyle}>
    <h2 className="my-4">About Us</h2>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            style={myStyle}
            aria-controls="collapseOne"
          >
            <strong>Analyze your text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,chrarcter count and many more.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Free to use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            TextUtils is a free character count tool that provides instant character count & word statistics for a given text. TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>Browser compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet EXplorer, Safari, Opera.It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
