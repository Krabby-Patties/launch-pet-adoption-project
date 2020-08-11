import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PetTypesIndex from "./PetTypesIndex"
import Navbar from "./Navbar"
import AvailablePetsIndex from "./AvailablePetsIndex"
import AdoptionForm from "./AdoptionForm"
import NewPetForm from "./NewPetForm"

const App = props => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/pets" component={PetTypesIndex} />
      <Route exact path="/pets/new" component={AdoptionForm}/>
      <Route exact path="/adoptions/new" component={NewPetForm}/>
      <Route exact path="/pets/:species" component={AvailablePetsIndex}/>
    </Switch>
    </BrowserRouter>



  )
}

export default App
