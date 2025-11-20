import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Hello age = '23'></Hello>
      <Hello age = '80'></Hello>

      <Button title ='Login'></Button>
      <Button title = 'Register'></Button>
    </div>
  );
}

export default App;
