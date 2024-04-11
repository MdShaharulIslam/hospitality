import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Component/Routs/Routs";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AuthProvider from "./Component/provider/AuthProvider";
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
