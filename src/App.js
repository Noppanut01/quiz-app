import './App.css';
import { createContext, useState } from 'react';
import Quiz from './components/quiz';
import Menu from './components/menu';
import Score from './components/score';
export const DataContext = createContext()
function App() {

  const [appState, setAppState] = useState("menu");
  return (

    <DataContext.Provider value={{ appState, setAppState }}>
      <div className="App">
        <h1>Wev Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
