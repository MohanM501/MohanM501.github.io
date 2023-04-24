import * as Types from "./actionTypes";

const changeColorMode=(dark)=>{
    return {
        type:Types.CHANGE_COLOR_MODE,
        payload:dark
    }
}

export {changeColorMode};