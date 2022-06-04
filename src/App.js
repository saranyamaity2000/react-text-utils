import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() { // closing tag is necessary in JSX HTML!
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze" />
      </div>
    </>
  );
}

export default App;
