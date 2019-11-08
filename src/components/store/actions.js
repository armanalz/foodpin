
export const carouselHandler = (e) => {

    return {

        type: carouselHandler,
        result: e.target.id
    }
}

export const animationFalse = () => {

    return {

        type: animationFalse
    }
}

export const animationTrue = () => {

    return {

        type: animationTrue
    }
}

export const animateHandler = (e) => {

    return dispatch => {

            e.persist()

            dispatch(animationTrue())

            setTimeout( () => {
                
                dispatch(carouselHandler(e));

            }, 200);

            setTimeout( () => {

                dispatch(animationFalse());
    
            }, 501);
    }
}

export const sidebarOpenHandler = () => {

    return {
        
        type: sidebarOpenHandler
    }
}

export const sidebarCloser = (e) => {

    return {
        
        type: sidebarCloser,
        val: e.target.id
    }
}

export const menuCloser = () => {

    return {
        
        type: menuCloser
    }
}

export const sidebarCloseHandler = (e) => {

    return dispatch => {

        e.persist()
            
        dispatch(sidebarCloser(e));

        setTimeout( () => {

            dispatch(menuCloser());

        }, 400);
    }
}

export const scrollHandler = () => {

    return {
        
        type: scrollHandler
    }
}

export const resizeHandler = () => {

    return {
        
        type: resizeHandler
    }
}