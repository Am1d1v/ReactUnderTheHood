import { useState } from 'react';
import './App.css';
import Button from './components/Button';



function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(true);

  const setIsParagraphShownToggle = () => {
    setIsParagraphShown(!isParagraphShown);
  }

  return (
    <div className="App">
      <h1>H1 Element</h1>
      {isParagraphShown && <p>New Paragraph</p>}
      <Button toggle={setIsParagraphShownToggle} />
    </div>
  );
}

export default App;