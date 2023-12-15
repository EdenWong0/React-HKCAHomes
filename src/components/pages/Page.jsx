import React from 'react'
import Header from '../basic/header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../home/Home'

const Page = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </>
  )
}

export default Page