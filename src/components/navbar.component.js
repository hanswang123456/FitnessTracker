import React, {Component} from "react";
import {Link} from 'react-router-dom'



export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
                <Link to="/" className="navbar-title">ExerciseTracker</Link>
                        <div className="nav-item">
                            <Link to="/">Exercises</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/create">Log Exercise</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/user">Create User</Link>
                        </div>
            </nav>
        )
    }
}