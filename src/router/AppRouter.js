import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About'
import Contact from '../components/Contact';
import Header from '../components/Header';
import Skills from '../components/Skills';
import ProfilePicture from '../components/ProfilePicture';
import '../App.css';
import Projects from '../components/Projects';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header name="Justin Xie"/>
            <div className="main">
                <ProfilePicture />
                <Switch>
                    <Route path="/" exact={true} component={About} />
                    <Route path="/projects" exact={true} component={Projects} />
                    <Route path="/contact" exact={true} component={Contact} />
                    <Route path="/skills" exact={true} component={Skills} />
                </Switch>    
            </div>  
        </div>
    </BrowserRouter>
);

export default AppRouter;