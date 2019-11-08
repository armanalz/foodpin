import * as actionTypes from './actions';

const initialState = {

    rotate: 0,
    i: 0,
    bckShow: false,
    circulate: 0,
    animate: false,
    showSidebar: false,
    openMenu:false,
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

const reducer = (state = initialState, action) => {

    let length = state.price.length - 1;

    switch (action.type) {
       
        case actionTypes.carouselHandler:

                if(action.result === "right" && state.i < length) {

                    return {

                           ...state,
                           circulate: state.circulate + 360,  rotate: state.rotate + 45,
                            i: state.i + 1
                   
                    }

               }else if(action.result === "right" && state.i >= length) {
       
                    return {

                           ...state,
                           circulate: state.circulate + 360, rotate: state.rotate + 45,
                            i: 0

                    }                  
       
               }else if(action.result === "left" && state.i > 0) {

                    return {

                          ...state,
                          circulate: state.circulate - 360, rotate: state.rotate - 45,
                          i: state.i - 1
                    }
   
               }else if (action.result === "left" && state.i >= 0) {
   
                    return {

                          ...state,
                          circulate: state.circulate - 360, rotate: state.rotate - 45,
                          i: length
                        
                    }
               }
        
        case actionTypes.sidebarOpenHandler:

             return {

                  ...state,
                  showSidebar: true, openMenu: true

             }

        case actionTypes.sidebarCloser:

                if(action.val !== "menu" && action.val !== "sidebar_navigation") {

                    return {

                        ...state,
                        openMenu: false
    
                    }
        
                }else {

                    return {

                        ...state
    
                    }
                }

        case actionTypes.menuCloser:

                return {

                    ...state,
                    showSidebar: false
    
                }     
                
        case actionTypes.animationFalse:

                return {

                    ...state,
                    animate: false,

                }

        case actionTypes.animationTrue:

                return {
        
                    ...state,
                    animate: true,
        
                }           
            
        case actionTypes.scrollHandler:

            if (window.scrollY > 1) {

                return {

                    ...state,
                    bckShow:true
   
                }
    
            } else {
   
                return {

                    ...state,
                    bckShow:false
   
                }
            }
                
        case actionTypes.resizeHandler:

            if (window.innerWidth > 600) {

                return {

                    ...state,
                   showSidebar: false
   
                }
   
           }       

    }



    return state;
    
};

export default reducer;