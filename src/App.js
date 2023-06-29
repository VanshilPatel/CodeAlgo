import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submissions from "./components/Submissions";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Premium from './components/Premium';
import PriceCard from './components/PriceCard';
import Info from './components/Info';



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
    <Routes>
      
       <Route path="/" element={<Premium />} />
     
       <Route path="/submissions/:id" element={<Submissions />} />

    </Routes>
  </Router>
  </>
  )
};

export default App;
