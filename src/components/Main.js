import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Main extends Component {

    state = {

        rotate: 0,
        i: 0,
        circulate: 0,
        description: {

            price: [32,45,71,59,60,90,29,44],
            title: ["green goddes chicken salad","ghorme","gheime","6andaz","ghoorzbij","kuiipala","khulabe","piazkhoroush"],
            text: ["lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet","lorem ipsum dolor sit amet"],

        }

    }

    carouselHandler = (e) => {
     
        let  length = this.state.description.price.length-1;

        this.setState({
            circulate: this.state.circulate + 360
        })

        if(e.target.id === "right" && this.state.i < length) {
            this.setState({
                   rotate: this.state.rotate + 45, i: this.state.i+1
            })

        }else if(e.target.id === "right" && this.state.i >= length) {

            this.setState({
                  rotate: this.state.rotate + 45, i: 0
            })

        }else if(e.target.id === "left" && this.state.i > 0) {

            this.setState({
                rotate: this.state.rotate - 45, i: this.state.i-1
            })

        }else if (e.target.id === "left" && this.state.i >= 0) {

            this.setState({
                rotate: this.state.rotate - 45, i: length
            })

        }

    }
    render() {

        let bg = require(`../resources/img/img-${this.state.i}.png`)

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
                        <h1 className="description_price">${this.state.description.price[this.state.i]}</h1>
                        <h2 className="description_title">{this.state.description.title[this.state.i]}</h2>
                        <p className="description_text">lorem ipsum dolor sit amet loren ipsum dolor
                                      sit amet lorem ipsum dolor sit amet {this.state.description.text[this.state.i]}
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

                        <div className="controller_middle" 
                             style={{transform:`rotate(${this.state.circulate}deg)`,backgroundImage:`url(${bg})`}}
                        >

                        </div>

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