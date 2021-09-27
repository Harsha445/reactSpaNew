import React,{ useEffect, useState } from "react"
import { FaReact, FaRegAddressBook } from "react-icons/fa";
import "./App.css";
import App from "../react/App";
import {createBrowserHistory} from "history";
import {Route, Switch,Router} from "react-router-dom";
const history=createBrowserHistory();
const NavLinks = () => {
    const [val, setVal] = useState(0);

    return (
            <div className="nav-container">
            <ul>
                <li >
                    <a href="/react"><FaReact/>
                    </a>
                    </li>
                <li >
                    <a href="/react"><FaRegAddressBook/></a>
                </li>
                    
                    <li>
                        <a href="/react">
                            Project
                        </a>
                    </li>
            </ul>
            </div>
       
    )
}
export default () => {
    return(
        <Router history={history}>
            <NavLinks></NavLinks>
            <hr/>
            <Switch>
                <Route path="/react" component={App}></Route>
                <Route path="/react" component={App}></Route>
                <Route path="/react" component={App}></Route>
            </Switch>
        </Router>
    )
}  
