import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    color: "black",
    position: "relative",
    marginLeft: "2%",
    top: "4.5vh",
    left: "55%",
    fontSize: "3vh",
    fontFamily: "'Rokkitt', serif"
};

const Header = (props) => (
    <div className="topnav">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Lobster|Rokkitt|Shrikhand');
        </style>  
        <header>
            <p className="name" style={{fontFamily: "'Shrikhand', cursive"}}>Justin Xie</p>
            <NavLink className="option" style={style} exact={true} to="/" activeClassName="is-active">About</NavLink>
            <NavLink className="option" style={style} to="/skills" activeClassName="is-active">Skills</NavLink>
            <NavLink className="option" style={style} to="/projects" activeClassName="is-active">Projects & Experience</NavLink>
            <NavLink className="option" style={style} to="/contact" activeClassName="is-active">Contact</NavLink>
        </header>
        
    </div>
);

export default Header;