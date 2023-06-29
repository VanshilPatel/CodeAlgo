import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Problem from "./components/Problem";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Home from './components/Home/Home';
=======
import Premium from './components/Premium';
import PriceCard from './components/PriceCard';
import Info from './components/Info';
>>>>>>> 2e21ea16aa59e8f8788645da921be259ae8966e3



// function App() {
//   return (
//     <div>
//      <Submissions/>

//     </div>
//   );
// }
const App = () => {
  return (
<<<<<<< HEAD
    // <div>
    //     <RouterProvider router={appRouter} />
    // </div>
    <>
=======
      // <div>
      //     <RouterProvider router={appRouter} />
      // </div>
      <>
      
      <Router>
    <Routes>
      
       <Route path="/" element={<Premium />} />
     
       <Route path="/submissions/:id" element={<Submissions />} />
>>>>>>> 2e21ea16aa59e8f8788645da921be259ae8966e3

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
