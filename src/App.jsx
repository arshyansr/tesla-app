import HomePage from './components/page-main/home-page/Home'
import './App.css';
import { Route , Routes } from 'react-router-dom';
import SignIn from './components/Sign in/sign-in';
import Login from './components/login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Sign' element={<SignIn />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
}

export default App;
