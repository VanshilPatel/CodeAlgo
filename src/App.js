import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Problem from "./components/Problem";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';



// function App() {
//   return (
//     <div>
//      <Submissions/>

//     </div>
//   );
// }
const App = () => {
  return (
    // <div>
    //     <RouterProvider router={appRouter} />
    // </div>
    <>

      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/problem/:id" element={<Problem />} />
        </Routes>
      </Router>
    </>
  )
};

export default App;
