import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
// import Registro from './pages/Register';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registry from "./pages/Registry";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/registry",
      element: <Registry />,
    },
  ]);

  return (
    <div className="App">
      <Header />

      <RouterProvider router={router} />
    </div>
  );
}
