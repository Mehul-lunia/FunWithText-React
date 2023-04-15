import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./style.css";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("white");

  const changeColor = () => {
    if (color === "white") {
      setColor("#343a40");
    } else if (color === "#343a40") {
      setColor("white");
    }
    console.log(color);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("dark mode succesfully enabled", "success");
    }
    if (mode === "dark") {
      setMode("light");
      showAlert("light mode succesfully enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="FunWithText"
        mode={mode}
        func={toggleMode}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About mode={mode} />}/>
        <Route path="/textForm" >
            <Route index element={<TextForm mode={mode} showAlert={showAlert}/>}/>
            <Route path=':placeHolderText' element={<TextForm mdoe={mode} showAlert={showAlert}/>}/>
        </Route>
          
      </Routes>
      
    </>
  );
}
