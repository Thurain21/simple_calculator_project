
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  const [output,setOutput] = useState(0);
  const [input,setInput]=useState(0);

  return (
      <div className='container'>
        <div className='frame'>
          <Output output={output}/>
         <Input input={input} />
        <Button/>
        </div>
        
      
    </div>

    
  );
}

export default App;
