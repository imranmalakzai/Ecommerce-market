import React from "react";
import ReactDom from "react-dom/client"
import "./index.css"
import { Toaster } from "react-hot-toast";


/**Injected To index.html */
const router = ReactDom.createRoot(document.getElementById("root"))

/**Display down below */
router.render(
  <React.StrictMode>
    <h3>Hello, How are you what is your name</h3>
    <Toaster />
  </React.StrictMode>
)
