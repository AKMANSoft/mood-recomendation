import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/copy',
    element: <HomePage />
  },
 
])

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
