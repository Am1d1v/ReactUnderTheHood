import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ParagraphOutput from './Output/ParagraphOutput';


function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);

  console.log('Some Info');
  const setIsParagraphShownToggle = () => {
    setIsParagraphShown(!isParagraphShown);
  }

  return (
    <div className="App">
      <h1>H1 Element</h1>
      {isParagraphShown && <ParagraphOutput isShown={isParagraphShown}/>}
      <Button toggle={setIsParagraphShownToggle} />
    </div>
  );
}

export default App;