import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
