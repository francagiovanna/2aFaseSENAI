import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Pagina1 from "../pages/Pagina1";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";
import Produtos from "../pages/Produtos";

const router = createBrowserRouter([        // router vai ser um objeto que vai receber um retorno... (eu achors)
  { path: "/", element: <Home /> },         // path : caminho que é a rota efetivamente
  { path: "/pagina1", element: <Pagina1 /> },
  { path: "/pagina2", element: <Pagina2 /> },
  { path: "/pagina3", element: <Pagina3 /> },
  { path: "/produtos", element: <Produtos /> },
]);         

export default router