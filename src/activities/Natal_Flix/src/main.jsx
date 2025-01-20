import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import { MovieDetails } from './pages/MovieDetails/MovieDetails.jsx'
import './styles/global.scss'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/movie/:id',
    element: <MovieDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
