import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/HomePage";

import "./Styles/App.css";
import Submissions from "./Components/Submissions";


const appRouter = createBrowserRouter([
    {

        path: "/",
        element: <Home />,
    },
    {
        path : "/submissions",
        element : <Submissions/>
      },
])

const App = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default App;
