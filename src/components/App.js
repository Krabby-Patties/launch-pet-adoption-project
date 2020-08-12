import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import Navbar from "./Navbar"

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/pets" component={Navbar} />
    </BrowserRouter>
  )
}

export default App
