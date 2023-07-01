import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submissions from "./components/Problem";
import Login from './components/Login';
import SignUp from './components/SignUp';

import Premium from './components/Premium';
import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import Problem from './components/Problem'


<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>


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
          <Route path="/problems" element={<Home />} />
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
