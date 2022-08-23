import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários no React</h1>
      <MyForm user={{name: "suelytohm", email: "suelytohm.02@gmail.com", description: "teste", "city": "arcoverde"}} />
    </div>
  );
}

export default App;
