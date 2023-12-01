//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import Shop from './pages/Shop';
import About from './pages/About';
import Services from './pages/Services';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Pricing from './pages/Pricing';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
          <Route path='/edit/:id' element={<EditPage />}></Route>
          <Route path='/shop/:email' element={<Shop />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
