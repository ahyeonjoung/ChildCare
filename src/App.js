import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/home/HomeMain'
import LabPage from './components/addPages/lab/LabPage'
import ProgramPage from './components/addPages/program/ProgramPage'
import BoardPage from './components/addPages/board/BoardPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main/:lang" component={Home} />
        <Route path="/lab/:lang" component={LabPage} />
        <Route path="/program/:lang" component={ProgramPage} />
        <Route path="/board/:lang" component={BoardPage} />
      </Switch>
    </Router>
  )
}

export default App