import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={thisIsPotatoe} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
