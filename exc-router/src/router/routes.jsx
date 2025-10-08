import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";
import Materiais from "../pages/Materiais";

const router = createBrowserRouter([        // router vai ser um objeto que vai receber um retorno... (eu achors)
  { path: "/", element: <Home /> },         // path : caminho que é a rota efetivamente
  { path: "/bar", element: <Bar /> },
  { path: "/sorveteria", element: <Sorveteria /> },
  { path: "/materiais", element: <Materiais /> },
]);         

export default router