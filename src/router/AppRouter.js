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
        <div className="main">
            <Header name="Justin Xie"/>
            <ProfilePicture 
                pictureSRC="Justin.png"
            />
            <Switch>
                <Route path="/" exact={true} component={About} />
                <Route path="/projects" exact={true} component={Projects} />
                <Route path="/contact" exact={true} component={Contact} />
                <Route path="/skills" exact={true} component={Skills} />
            </Switch>    
        </div> 
    </BrowserRouter>
);

export default AppRouter;