import React from "react"
import ReactDOM from "react-dom/client"
import "./popup.css"
import Totp from "./Totp"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Totp />
  </React.StrictMode>
)
