const INITIAL_STATE = {};
const LOGIN ='LOGIN'
const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN: 
        return action.value
        default:
            return state;
    }
}
export default loginReducer;