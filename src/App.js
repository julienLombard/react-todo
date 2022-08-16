import './App.css';
import { Form } from './components/Form';
import { ListSelector } from './components/ListSelector';
import { SearchTask } from './components/SearchTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <ListSelector />
        <SearchTask />
      </header>
    </div>
  );
}

export default App;
