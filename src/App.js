import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222136';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const changegreen = ()=>{
  //   document.body.style.backgroundColor = '#35C649'
  // }
  // const changeyellow = ()=>{
  //   document.body.style.backgroundColor = '#CAB911'
  // }
  // const changered = ()=>{
  //   document.body.style.backgroundColor = '#C15031'
  // }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="Home" about="About" mode={mode} toggleMode={toggleMode} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/> */}
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extraspaces" mode={mode} />}>
            </Route>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text :" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
