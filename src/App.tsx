import './App.css';
import { TextField } from './components/TextField';

function App() {
  return <div>
    <TextField text="hello" person={{firstName: "", lastName: ""}} />
  </div>
}

export default App;
