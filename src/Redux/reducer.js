import * as Types from "./actionTypes";

let initialState={
    isDark:true,
    windowSize:0
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case Types.CHANGE_COLOR_MODE:
            return {
                ...oldState,
                isDark:payload
            }
    
        case Types.SET_WINDOW_SIZE:
            return{
                ...oldState,
                windowSize:payload
            }

        default:
            return oldState;
    }
}

export {reducer};