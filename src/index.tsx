import React from "react"
import ReactDOM from "react-dom/client"
import App from "pages/home/App"
import About from "pages/about/about"
import Imprint from "pages/imprint/imprint"
import PrivacyPolicy from "pages/privacy-policy/privacy-policy"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/imprint",
    element: <Imprint />
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
