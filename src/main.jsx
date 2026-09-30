import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Rotas
import HomePage from './routes/HomePage.jsx'
import ShopePage from './routes/ShopePage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: ([
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/carrinho',
        element: <ShopePage />
      }
    ])
  }
])

//Context
import { ProductContextProvider } from './Context/ProductContext.jsx'
import { CartContext, CartContextProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <ProductContextProvider >
        <RouterProvider router={router} />
      </ProductContextProvider>
    </CartContextProvider>

  </StrictMode>,
)
