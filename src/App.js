import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";


function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  function clickEventHandler(value) {
    if (value == "C") {
      setInput(0);
      setOutput(0);

    }else if (value == "Dele") {

      if(input!= 0){
        input.length==1? setInput(0) : setInput(input.slice(0,input.length-1));
      }
    } else if (input == 0) {
      setInput(value);
    } else if (value == "=") {
      setOutput(eval(input));
      setInput(0);
    }  else {
      setInput(input + value);
    }
  }

  return (
    <div className="container">
      <div className="frame">
        <Output output={output} />
        <Input input={input} />
        <Button clickeventhandler={clickEventHandler} />
      </div>
    </div>
  );
}

export default App;
