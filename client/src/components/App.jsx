import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Events from "./Events";
import Footer from "./Footer/Footer";
import Title from "./Title";
import Icengine from "./Icengine";
import Login from "./Login";
import Register from "./Register";
import EventRegister from "./EventRegister";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Title} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/events" component={Events} />
                    <Route path="/icengine" component={Icengine}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/registerforevent" exact component={EventRegister}/>
                </Switch>
                <Footer />
            </Fragment>
        </Router>
    );
}

export default App;


/* <Router>
        <div>
            <Navbar />
            <Route path="/title" componebts={Title}/>
            <Title />
            <hr />
            <Projects />
            <hr />
            <Events />
            <Footer />
        </div>
        </Router> 
*/
