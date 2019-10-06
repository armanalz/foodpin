import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <header className="header">
                    <h4 className="header_title">FoodSpin</h4>
                    <nav className="header_navigation">
                        <p className="header_navigation-item">breakfast</p>
                        <p className="header_navigation-item">lunch</p>
                        <p className="header_navigation-item">dinner</p>
                    </nav>
                    <Icon name="icon-location-shopping"/>
                </header>
                <div className="carousel">

                    <div className="carousel_circle">
                        <div className="carousel_circle-item top"> </div>
                        <div className="carousel_circle-item top-left"> </div>
                        <div className="carousel_circle-item left"> </div>
                        <div className="carousel_circle-item bottom-left"> </div>
                        <div className="carousel_circle-item bottom"> </div>
                        <div className="carousel_circle-item bottom-right"> </div>
                        <div className="carousel_circle-item right"> </div>
                        <div className="carousel_circle-item top-right"> </div>                   
                    </div>

                </div> {/* carousel */}

                <div className=""></div>
            </main>
        );
    }
}

export default Main;