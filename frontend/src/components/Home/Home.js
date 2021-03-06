import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render(){
        return(
        <div className="home-container">
            <div className="home-left">
            </div>
            <div className="home-center">
                <h1>Okinawa Memory Initiative</h1>
                <p>An international, public history project that explores the founding years of the American military occupation of Okinawa.</p>
            </div>
            <div className="home-right">
            </div>
        </div>
        )
    }
}

export default Home;