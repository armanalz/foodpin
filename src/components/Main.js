import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main className="main">
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

                </div>
            </main>
        );
    }
}

export default Main;