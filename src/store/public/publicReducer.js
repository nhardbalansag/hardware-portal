import { TEST } from "./publicAction";

const InitialStates = {
    test: null
}

export default(state = InitialStates, action) =>{
    switch(action.type){
        case TEST:
            return{
                ...state,
                test: action.data
            }
        default:
            return{
                ...state
            }
    }

    return state;
}