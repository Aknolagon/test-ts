import './App.css'
import { Message } from './Message';
import { Todos } from './Todos';

function App() {
  return (
    <div>
      <h1>Yop</h1>
      <Message author="Pras">Hello Typescript</Message>
      <Message author="Ramya" variant='LEFT'>
        <span style={{color : "red"}}>Hello Manguse mandai</span>
      </Message>
      < Todos />
    </div>
  );
}

export default App;