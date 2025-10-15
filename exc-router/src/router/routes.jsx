import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Bar from '../pages/Bar'
import Materiais from '../pages/Materiais'
import Sorveteria from '../pages/Sorveteria'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bar', element: <Bar /> },
      { path: '/materiais', element: <Materiais /> },
      { path: '/sorveteria', element: <Sorveteria /> }
    ]
  }
])

export default router