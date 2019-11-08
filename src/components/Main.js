import React, { Component } from 'react';
import * as actionCreator from './store/actions';
import { connect } from 'react-redux';
import Icon from './utilities/Icon';


class Main extends Component {

    componentDidMount() {

        window.addEventListener('scroll',this.props.scrollHandler);
        window.addEventListener('resize',this.props.resizeHandler);

    }
   
    render() {

        let bg = require(`../resources/img/img-${this.props.i}.png`)

        return (

            <main className="main">

                <div className="sidebar" 
                     style={{display:this.props.showSidebar ? "flex" : "none",
                             animationName:this.props.openMenu ? "" : "fadeMenu"}}
                     onClick={this.props.sidebarCloseHandler}
                >

                   <nav className="sidebar_navigation" id="menu"
                        style={{animationName:this.props.openMenu ? "sidebarOpen" : "sidebarClose"}}
                   >
                        <Icon id="sidebar_navigation" name="icon-location-shopping"/>
                        <p id="menu" className="sidebar_navigation-item">breakfast</p>
                        <p id="menu" className="sidebar_navigation-item">lunch</p>
                        <p id="menu" className="sidebar_navigation-item">dinner</p>
                    </nav>

                </div>

                <header className={
                        this.props.bckShow ? `header ${this.props.color[this.props.i]}` : "header"
                        }
                >
                    <h4 className="header_title">FoodSpin</h4>
                    <nav className="header_navigation">
                        <p className="header_navigation-item">breakfast</p>
                        <p className="header_navigation-item">lunch</p>
                        <p className="header_navigation-item">dinner</p>
                    </nav>
                    <Icon id="header_navigation" name="icon-location-shopping"/>
                    <div className="header_menu" onClick={this.props.sidebarOpenHandler}>
                            <div className="header_menu-item top"></div>
                            <div className="header_menu-item middle"></div>
                            <div className="header_menu-item bottom"></div>
                    </div>
                </header>

                <div className={`carousel ${this.props.color[this.props.i]}`}>

                    <div className={`carousel_circle ${this.props.color[this.props.i]}`}
                         style ={{transform:`rotate(${this.props.rotate}deg)`}}
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
                                        ${this.props.color[this.props.i]}`
                                      }
                            id={this.props.animate ? "text-animate" : ""}
                        >
                             ${this.props.price[this.props.i]}
                        </h1>
                        <h2 className="description_title"  id={this.props.animate ? "text-animate" : ""}>
                            {this.props.title[this.props.i]}
                        </h2>
                        <p className="description_text">
                            lorem ipsum dolor sit amet loren ipsum dolor
                            sit amet lorem ipsum dolor sit amet 
                            {this.props.text[this.props.i]}
                         </p>
                        <div className={`description_button 
                                         ${this.props.color[this.props.i]}`
                                       }
                             id={this.props.animate ? "button-animate" : ""}          
                        >
                            <p className="description_button-text"> add to card </p>
                        </div>
                    </div>

                    <div className="controller">
                        
                        <div className="controller_arrow left" id="left"
                              onClick={this.props.animateHandler}
                        >
                            <Icon id="left" name="icon-arrow-down2"
                                  onClick={this.props.animateHandler}
                            />
                        </div>

                        <div className="controller_middle" 
                             style={{
                                       transform:`rotate(${this.props.circulate}deg)`,
                                       backgroundImage:`url(${bg})`
                                    }}
                        >

                        </div>

                        <div className="controller_arrow right" id="right"
                               onClick={this.props.animateHandler}
                        >
                            <Icon id="right" name="icon-arrow-down2" 
                                  onClick={this.props.animateHandler}
                            />
                        </div>

                    </div> {/* controller */}

                </div>  {/* bottom-section */}

            </main>
        );
    }
}

const mapStateToProps = state => {

    return {

        rotate: state.rotate,
        i: state.i,
        circulate: state.circulate,
        bckShow: state.bckShow,
        animate: state.animate,
        showSidebar: state.showSidebar,
        openMenu: state.openMenu,
        color: state.color,
        price: state.price,
        title: state.title,
        text: state.text
    };
}

const mapDispatchToProps = dispatch => {

    return {

        animateHandler: (e) =>  { dispatch(actionCreator.animateHandler(e))},
        sidebarOpenHandler: () => setTimeout(() => { dispatch(actionCreator.sidebarOpenHandler())}, 200),
        sidebarCloseHandler: (e) => { dispatch(actionCreator.sidebarCloseHandler(e))},
        scrollHandler: () => { dispatch(actionCreator.scrollHandler())},
        resizeHandler: () => { dispatch(actionCreator.resizeHandler())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);