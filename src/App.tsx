import './App.css';
// import { TextField } from './components/TextField';
import { Counter } from "./components/Counter"

function App() {
  return <div>
    <Counter>
      {({ count, setCount }) => (
        <div>
          {count}
          <button onClick={()=> setCount(count + 1)}>+</button>
        </div>)}
    </Counter>
  </div>
}

export default App;
