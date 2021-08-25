import React from 'react'
import {Container} from './style'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import { navbar } from '../utils/Navbar'



export const  Root =()=>{
    return(
        <Router>
        <Container>
         <Navbar /> 
         <Switch>
            {
                 navbar.map((value)=> {
                     <Route path={value.path} component={value.component}/>
                 })
            }
             <Route exact path="/">
                    <Redirect to="/home" />
                 </Route>
        </Switch>
          </Container>
    </Router>
    )
}
