import { useState } from 'react';
import './App.css';
import Button from './components/Button';



function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  const setIsParagraphShownHandler = () => {
    setIsParagraphShown(true);
  }

  return (
    <div className="App">
      <h1>H1 Element</h1>
      <Button />
    </div>
  );
}

export default App;