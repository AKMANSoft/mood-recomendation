import React, { Suspense } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"


const LoginPage = React.lazy(() => import("./pages/Login.page"))
const SignUpPage = React.lazy(() => import("./pages/Signup.page"))
const ForgotPasswordPage = React.lazy(() => import("./pages/ForgotPasword.page"))
const InstructionsPage = React.lazy(() => import("./pages/Instructions.page"))
const CreateNewPasword = React.lazy(() => import("./pages/CreateNewPasword.page"))
const HomePage = React.lazy(() => import("./pages/Home.page"))


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Navigate to={"/login"} />)
  },
 
  {
    path: "/login",
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    )
  },
  {
    path: "/home",
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    )
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <SignUpPage />
      </Suspense>
    )
  },
  {
    path: "/forgotpassowrd",
    element: (
      <Suspense>
        <ForgotPasswordPage />
      </Suspense>
    )
  },
  {
    path: "/instructions",
    element: (
      <Suspense>
        <InstructionsPage />
      </Suspense>
    )
  },
  {
    path: "/newpasword",
    element: (
      <Suspense>
        <CreateNewPasword />
      </Suspense>
    )
  },
  {
    path: "/donate",
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    )
  },
  
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
