import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { SearchTask } from './components/SearchTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <List />
        <SearchTask />
      </header>
    </div>
  );
}

export default App;
