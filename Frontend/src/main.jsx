import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import App from "./App.jsx";
import './index.css'
// Import pages
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import GamePlayPage from "./pages/GamePlayPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/gameplay",
    element: <GamePlayPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>,
)
