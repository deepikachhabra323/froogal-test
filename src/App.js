import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from "react";
// import { initialize,initializeActiveBenefits } from'@froogal.ai/loyalty-sdk-js';
// import '@froogal.ai/loyalty-sdk-js/dist/index.css';

function App() {
  let froogalRef = useRef(null);
    useEffect(()=>{
      // console.log(initialize)
      const existingScript = froogalRef.current;
        if (existingScript) {
            const script = document.createElement('script');
            script.src = 'https://assets-cdn.froogal.ai/loyalty-sdk/v1.1.18/index.js';
            script.id = 'froogal';
            document.body.appendChild(script);
            script.onload = () => { 
                console.log(initialize)
            debugger
            };
        }
    },[]);
    return <>
    <section>
      <div>hello</div>
        <div ref={froogalRef}></div>
    </section></>
  
}

export default App;

