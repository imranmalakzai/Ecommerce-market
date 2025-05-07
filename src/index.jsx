import React from "react";
import ReactDom from "react-dom/client"
import "./index.css"
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import ContextProvider from "./context/AppContext.jsx";

/**Injected To index.html */
const router = ReactDom.createRoot(document.getElementById("root"))

/**Display down below */
router.render(
    <ContextProvider>
      <App />
      <Toaster />
    </ContextProvider>
)
