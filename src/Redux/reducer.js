import * as Types from "./actionTypes";

let initialState={
    isDark:true
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case Types.CHANGE_COLOR_MODE:
            return {
                ...oldState,
                isDark:payload
            }
        default:
            return oldState;
    }
}

export {reducer};