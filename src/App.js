import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>}/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
