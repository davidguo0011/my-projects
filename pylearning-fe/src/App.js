import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExercisePage from './pages/ExercisePage/ExercisePage';

function App() {
  return (
    <>
      <ToastContainer style={{ width: '400px' }} />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/exercise' element={<ExercisePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
