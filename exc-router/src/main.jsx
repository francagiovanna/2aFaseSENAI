import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { GlobalContext, GlobalContextProvider } from './context/GlobalContext'


createRoot(document.getElementById('root')).render(
  <GlobalContextProvider >
 <RouterProvider router={router}>
 </RouterProvider>
 </GlobalContextProvider>
)