import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./Styles/App.css";
import Submissions from "./Components/Submissions";
import Main from "./Components/Main";


// const appRouter = createBrowserRouter([
//     {

//         path: "/",
//         element: <Home />,
//     },
//     {
//         path : "/submissions",
//         element : <Submissions/>
//       },
// ])



const App = () => {
    return (
        // <div>
        //     <RouterProvider router={appRouter} />
        // </div>
        <Router>
      <Routes>
        
         <Route path="/" element={<Main />} />
       
         <Route path="/submissions/:id" element={<Submissions />} />

      </Routes>
    </Router>
    )
};

export default App;
