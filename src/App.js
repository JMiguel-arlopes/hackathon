import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
// import Registro from './pages/Register';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registry from "./pages/Registry";

export default function App() {
  const listagem = [
    { name: "vitor", token: 7 },
    { name: "victor", token: 9 },
    { name: "david", token: 12 },
    { name: "rafael", token: 4 },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/registry",
      element: (
        <Registry
          name="jotajota"
          total="60"
          numToken="15"
          perfilList={listagem}
        />
      ),
    },
  ]);

  return (
    <div className="App">
      <Header />

      <RouterProvider router={router} />
    </div>
  );
}
