import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from "react-router-dom"

//**Import pages */
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import EmailVerify from "./pages/EmailVerify.jsx"
import ResetPassword from "./pages/ResetPassword.jsx"
import Layout from "./pages/Layout.jsx"





//** React Router Dom */
const Router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="reset-password" element={<ResetPassword />} />
    <Route path="verify-email" element={<EmailVerify />}/>
  </Route>

))


function App() {
  return (
    <RouterProvider router={Router}/>
  )
}

export default App