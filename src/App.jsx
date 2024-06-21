import { useState } from "react"
import {evaluate} from 'mathjs'

import "./App.css";

const App = () => {
     const [sum, setSum] = useState("")
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "*", "/", "="]

    const handleClick = (btn) => {

    }
  return (
    <div className="centre">
      <h1>Nkanta's Calculator</h1>
      <h3 className="inputBox">{sum}</h3>
      <div className="buttonWrap">
         {
            buttons.map((button, index) => {
                return(
                    <button key={index} onClick={() => handleClick(button)}className="btn">{button}</button>
                )
            })
         }
      </div>

    </div>
  );
};

export default App;
