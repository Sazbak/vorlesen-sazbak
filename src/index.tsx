import React from "react"
import ReactDOM from "react-dom/client"
import App from "pages/home/App"
import About from "pages/about/about"
import Imprint from "pages/imprint/imprint"
import PrivacyPolicy from "pages/privacy-policy/privacy-policy"
import FAQ from "pages/faq/faq"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "imprint",
    element: <Imprint />
  },
  {
    path: "privacypolicy",
    element: <PrivacyPolicy />
  },
  {
    path: "faq",
    element: (
      <FAQ
        faqElements={[
          {
            headline: "Onboarding",
            subElements: [
              {
                title: "How does it work?",
                content:
                  "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."
              },
              {
                title: "How does it work?",
                content:
                  "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."
              }
            ]
          },
          {
            headline: "Onboarding",
            subElements: [
              {
                title: "How does it work?",
                content:
                  "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."
              },
              {
                title: "How does it work?",
                content:
                  "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."
              }
            ]
          }
        ]}
      />
    )
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// "Sed porttitor curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.",
// "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.",
// "Sed porttitor curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh."
