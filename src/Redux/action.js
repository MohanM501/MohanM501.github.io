import * as Types from "./actionTypes";

const changeColorMode=(dark)=>{
    return {
        type:Types.CHANGE_COLOR_MODE,
        payload:dark
    }
}

const setWindowSize1=(windowSize)=>{
    return{
        type:Types.SET_WINDOW_SIZE,
        payload:windowSize
    }
}

export {changeColorMode,setWindowSize1};