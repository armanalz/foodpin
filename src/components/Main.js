import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Main extends Component {

    state = {

        rotate: 0,
        i: 0,
        bckShow: false,
        circulate: 0,
        animate: false,
        showSidebar: false,
        openMenu:false,
        description: {

            price: [32,45,71,59,60,90,29,44],
            title: ["green goddes chicken salad","salmon with vegetables","creamy pasta with broccoli",
                    "rigatoni with cheese","steak with vegetables","fresh carrot salad",
                    "kentucky chicken","lasanga with ketchup"
                   ],
            text: ["lorem ipsum dolor sit amet","lorem ipsum dolor sit amet",
                   "lorem ipsum dolor sit amet","lorem ipsum dolor sit amet",
                   "lorem ipsum dolor sit amet","lorem ipsum dolor sit amet",
                   "lorem ipsum dolor sit amet","lorem ipsum dolor sit amet"
                  ],
            color: ["pink","yellow","blue","green","violet","brown","aqua","magenta"]

        }

    }

    componentDidMount(){

        window.addEventListener('scroll',this.scrollHandler);
        window.addEventListener('resize',this.resizeHandler);

    }

    scrollHandler = () => {

        if (window.scrollY > 1) {

             this.setState({

                 bckShow:true

             })

        } else {

             this.setState({

                 bckShow:false

             })
        }
    }

    resizeHandler = () => {

        if (window.innerWidth > 600) {

             this.setState({

                showSidebar: false

             })

        } 
    }


    carouselHandler = (e) => {
     
        let  length = this.state.description.price.length-1;

        this.setState({
             animate: true
        })

        if(e.target.id === "right" && this.state.i < length) {

                this.setState({
                    circulate: this.state.circulate + 360,  rotate: this.state.rotate + 45,
                     i: this.state.i+1
                })              

        }else if(e.target.id === "right" && this.state.i >= length) {

                this.setState({
                    circulate: this.state.circulate + 360, rotate: this.state.rotate + 45,
                     i: 0
                })

        }else if(e.target.id === "left" && this.state.i > 0) {

                this.setState({
                    circulate: this.state.circulate - 360, rotate: this.state.rotate - 45,
                    i: this.state.i-1
                })

        }else if (e.target.id === "left" && this.state.i >= 0) {

                this.setState({
                    circulate: this.state.circulate - 360, rotate: this.state.rotate - 45,
                     i: length
                })

        } 

        setTimeout(() => {

            this.setState({
                 animate: false
            })
            
        }, 505);

    }

    sidebarOpenHandler = () => {


            this.setState({

                showSidebar: true, openMenu: true

            })

    }

    sidebarCloseHandler = (e) => {

        if(e.target.id !== "menu" && e.target.id !== "sidebar_navigation") {

            this.setState({

                 openMenu: false
    
            })

            setTimeout(() => {

                this.setState({

                    showSidebar: false

                })
                
            }, 400);

        }

    }

    render() {

        let bg = require(`../resources/img/img-${this.state.i}.png`)

        return (

            <main className="main">

                <div className="sidebar" 
                     style={{display:this.state.showSidebar ? "flex" : "none"}}
                     onClick={(e) => this.sidebarCloseHandler(e)}
                >

                   <nav className="sidebar_navigation" id="menu"
                        style={{animationName:this.state.openMenu ? "sidebarOpen" : "sidebarClose"}}
                   >
                        <Icon id="sidebar_navigation" name="icon-location-shopping"/>
                        <p id="menu" className="sidebar_navigation-item">breakfast</p>
                        <p id="menu" className="sidebar_navigation-item">lunch</p>
                        <p id="menu" className="sidebar_navigation-item">dinner</p>
                    </nav>

                </div>

                <header className={this.state.bckShow ? `header ${this.state.description.color[this.state.i]}` : "header"}>
                    <h4 className="header_title">FoodSpin</h4>
                    <nav className="header_navigation">
                        <p className="header_navigation-item">breakfast</p>
                        <p className="header_navigation-item">lunch</p>
                        <p className="header_navigation-item">dinner</p>
                    </nav>
                    <Icon id="header_navigation" name="icon-location-shopping"/>
                    <div className="header_menu" onClick={() => this.sidebarOpenHandler()}>
                            <div className="header_menu-item top"></div>
                            <div className="header_menu-item middle"></div>
                            <div className="header_menu-item bottom"></div>
                    </div>
                </header>

                <div className={`carousel ${this.state.description.color[this.state.i]}`}>

                    <div className={`carousel_circle ${this.state.description.color[this.state.i]}`}
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
                        <h1 className={`description_price 
                                        ${this.state.description.color[this.state.i]}`
                                      }
                            id={this.state.animate ? "text-animate" : ""}
                        >
                             ${this.state.description.price[this.state.i]}
                        </h1>
                        <h2 className="description_title"  id={this.state.animate ? "text-animate" : ""}>
                            {this.state.description.title[this.state.i]}
                        </h2>
                        <p className="description_text">
                            lorem ipsum dolor sit amet loren ipsum dolor
                            sit amet lorem ipsum dolor sit amet 
                            {this.state.description.text[this.state.i]}
                         </p>
                        <div className={`description_button 
                                         ${this.state.description.color[this.state.i]}`
                                       }
                             id={this.state.animate ? "button-animate" : ""}          
                        >
                            <p className="description_button-text"> add to card </p>
                        </div>
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
                             style={{
                                       transform:`rotate(${this.state.circulate}deg)`,
                                       backgroundImage:`url(${bg})`
                                    }}
                        >

                        </div>

                        <div className="controller_arrow right" id="right"
                             onClick={(e) => this.carouselHandler(e)}
                        >
                            <Icon id="right" name="icon-arrow-down2" 
                                  onClick={(e) => this.carouselHandler(e)}
                            />
                        </div>

                    </div> {/* controller */}

                </div>  {/* bottom-section */}

            </main>
        );
    }
}

export default Main;