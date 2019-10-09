import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Main extends Component {

    state = {

        rotate: 0

    }

    carouselHandler = (e) => {
     
        if(e.target.id === "right"){
            this.setState({
            rotate: this.state.rotate + 45
            })
            console.log(e.target.id)
        }else  if(e.target.id === "left"){

            this.setState({
                rotate: this.state.rotate - 45
                })
                console.log(e.target.id)

        }

    }
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

                    <div className="carousel_circle"
                         style ={{transform:`rotate(${this.state.rotate}deg)`}}
                    >
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

                <div className="bottom-section">

                    <div className="description">
                        <h1 className="description_price">$32</h1>
                        <h2 className="description_title">green goddess chicken salad</h2>
                        <p className="description_text">lorem ipsum dolor sit amet loren ipsum dolor
                                      sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                         </p>
                        <div className="description_button">add to card</div>
                    </div>

                    <div className="controller">
                        
                        <div className="controller_arrow left" id="left"
                             onClick={(e) => this.carouselHandler(e)}
                        >
                            <Icon id="left" name="icon-arrow-down2"
                                  onClick={(e) => this.carouselHandler(e)}
                            />
                        </div>

                        <div className="controller_middle"></div>

                        <div className="controller_arrow right" id="right"
                             onClick={(e) => this.carouselHandler(e)}
                        >
                            <Icon id="right" name="icon-arrow-down2" 
                                  onClick={(e) => this.carouselHandler(e)}
                            />
                        </div>

                    </div>

                </div>  {/* bottom-section */}
            </main>
        );
    }
}

export default Main;