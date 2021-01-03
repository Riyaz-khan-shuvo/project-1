import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Shared/Menu/Menu'
import Home from "./components/HomePage/Home/Home";
import Secretary from "./components/KnowMore/Secretary/Secretary";
import President from "./components/KnowMore/President/President";
import Login from "./components/Login/Login";
import HowToReg from "./components/HowToReg/HowToReg";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Menu />
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/about/secretary">
            <Secretary/>
          </Route>
          <Route path="/about/president">
            <President/>
          </Route>
          <Route path="/how-to-registration">
            <HowToReg/>
          </Route>
          <Route exact path="/">
            <Menu />
            <Home />
          </Route>
          <Route path="*">
            <h3>Page Not Found</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
