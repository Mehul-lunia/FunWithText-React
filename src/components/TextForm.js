import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";


export default function TextForm(props) {
  const {placeHolderText} = useParams()
  const [data, setData] = useState("");
  //to chnage the data to upper case
  const handleUpClick = () => {
    setData(data.toUpperCase());
    {props.showAlert(
      `${data} changed to upper case : ${data.toUpperCase()}`,
      'success'
    )}
  };

  //to change the current data variable to lower case
  const handleLowerClick = () => {
    setData(data.toLowerCase());
    {props.showAlert(
      `${data} changed to lower case : ${data.toLowerCase()}`,
      'success'
    )}
  };

  const handleWordCount = () => {
    let wordArr = data.split(" ")
    let count = 0
    for(let word in wordArr){
      if(word !== ''){count+=1}
    }
    return count 
  }

  //to get the current data using onchnge event
  const handleOnChange = (event) => {
    setData(event.target.value);
  };
  const clearFunction = () =>{ 
    setData('')
    {props.showAlert(
      'Text cleared',
      'success'
    )}};
  return (
    <>
      {/* heading */}
      <h1>{props.heading}</h1>
      {/* the text box and the buttons */}
      <div className="form-floating ">
        <div className="mb-3">
          <textarea
            className= {`form-control bg-${props.mode} text-${props.mode ==='light'?"dark":"light"}`}
            id="myBox"
            value={data}
            onChange={handleOnChange}
            placeholder={placeHolderText}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearFunction}>
        clear
        </button>
      </div>
      {/* additional info regarding text */}
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <ul>
          <li>Number of Total Characters - {data.length}</li>
          <li>Total number of words - {}</li>
          <li>
            It would take an averge human {data.split(" ").length * 0.003}{" "}
            minutes to read it
          </li>
        </ul>
        <h2>PREVIEW</h2>
        <p>{data}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter Text below to analyse",
};
