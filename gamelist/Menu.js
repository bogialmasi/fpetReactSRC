import React from 'react';
import logo  from "../../assets/logo2.png";

export class Menu extends React.Component{
    render(){
        return (
            <nav className="ui secondary menu">
                <img src={logo} />
                <a className="item" href="#"><i className="home icon"></i> Home</a>
                <a className="active item" href="index.html"><i className="headphones icon"></i> My game list</a>
                <a className="item" href="#"><i className="music icon"></i> Games</a>
                <a className="item" href="#"><i className="search icon"></i> Search</a>
                <div className="ui right dropdown item">
                John Doe
                <i className="dropdown icon"></i>
                <div className="menu">
                    <div className="item"><i className="user icon"></i> Profile</div>
                    <div className="item"><i className="settings icon"></i> Settings</div>
                    <div className="item"><i className="sign out icon"></i>Log out</div>
                </div>
                </div>
            </nav>
        )
    }
}