import React from 'react'
import Login from "./containers/Login/Login"
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/adm-atd">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/adm-atd/dashboard">Dashboard</NavLink><small></small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/adm-atd/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
