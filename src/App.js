import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Problem from "./components/Problem";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Premium from './components/Premium';
import PriceCard from './components/PriceCard';
import Info from './components/Info';

const App = () => {
  return ( 
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/problem/:id" element={<Problem />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;
