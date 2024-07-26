export const TEST = 'TEST'

export const StateTest = () =>{
    return async(dispatch, getstate) =>{
        dispatch({
            type: TEST,
            data: 'state test'
        })
    }
}