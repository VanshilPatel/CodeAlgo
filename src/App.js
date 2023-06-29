import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Submissions from "./components/Submissions";



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
      
       <Route path="/" element={<Submissions />} />
     
       <Route path="/submissions/:id" element={<Submissions />} />

    </Routes>
  </Router>
  </>
  )
};

export default App;
