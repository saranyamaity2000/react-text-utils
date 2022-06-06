import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // 0 -> light , 1 -> dark 
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#0b1c70';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
