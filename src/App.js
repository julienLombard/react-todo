import './App.css';
import { Form } from './components/form/Form';
import { ListSelector } from './components/listSelector/ListSelector';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Form />
        <ListSelector />
      </main>
    </div>
  );
}

export default App;
