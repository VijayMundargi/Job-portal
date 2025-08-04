// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home"
import SubscriptionPage from "./component/SubscriptionPage";
import PlanCard from "./component/PlanCard";
import MembershipPlans from "./component/MembershipPlans";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path:"/Login",
    element:<Login/>
  },
  
  {
    path:"/subscription",
    element:<SubscriptionPage/>
  },
  {
    path:"/plan",
    element:<PlanCard/>
  },
  {
    path:"/member",
    element:<MembershipPlans/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
