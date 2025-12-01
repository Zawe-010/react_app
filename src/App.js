import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Button from './components/Button';
import ProfileCard from './components/ProfileCard';
import ClickButton from './components/ClickButton';
import Lists from './components/Lists';
import StudentsTable from './components/StudentsTable';
import StudentCard from './components/StudentCard';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
import Timer from './components/Timer';
import OnlineStatus from './components/OnlineStatus';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const students = [
    { id: 1, name: "John", course: "React", score: 85 },
    { id: 2, name: "Mary", course: "Python", score: 92 },
    { id: 3, name: "Kevin", course: "JavaScript", score: 78 }
  ];

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

      <h2 className="text-center mt-4">Students</h2>

      <div className="d-flex justify-content-center flex-wrap">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            score={student.score}
          ></StudentCard>
        ))}
      </div>

      <Counter></Counter>

      <ColorPicker></ColorPicker>

      <Timer></Timer>

      <OnlineStatus></OnlineStatus>

      <Form></Form>
    </div>
  );
}

export default App;
