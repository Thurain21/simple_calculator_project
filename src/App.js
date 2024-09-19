
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  const [output,setOutput] = useState(0);
  const [input,setInput]=useState(0);

  function clickEventHandler(value){
    console.log(value);
    
  }

  return (
      <div className='container'>
        <div className='frame'>
          <Output output={output}/>
         <Input input={input} />
        <Button clickeventhandler={clickEventHandler}/>
        </div>
        
      
    </div>

    
  );
}

export default App;
