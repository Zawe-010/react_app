import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Button from './components/Button';
import ProfileCard from './components/ProfileCard';
import ClickButton from './components/ClickButton';
import Lists from './components/Lists';
import StudentsTable from './components/StudentsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Hello age = '23'></Hello>
      <Hello age = '80'></Hello>

      <Button title ='Login'></Button>
      <Button title = 'Register'></Button>

      <div className="d-flex justify-content-center flex-wrap">
      <ProfileCard
        name="Malachi Merge"
        age={30}
        profession="Software Developer"
      ></ProfileCard>

      <ProfileCard
        name="May Lynn"
        age={25}
        profession="Designer"
      ></ProfileCard>
      </div>

      <ClickButton title="Click Me" ></ClickButton>

      <Lists></Lists>

      <StudentsTable></StudentsTable>
    </div>
  );
}

export default App;
