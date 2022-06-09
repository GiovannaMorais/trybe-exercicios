const INITIAL_STATE = [];

const ADD_REGISTER = 'ADD_REGISTER' 
const DELETE_REGISTER ='DELETE_REGISTER'

const registerReducer = (state = INITIAL_STATE, action) =>{
switch(action.type) {
    case ADD_REGISTER:
        return [...state,action.data];
        case DELETE_REGISTER:
            return state.filter(registrado => registrado !== action.value)
        default:
            return state;
}
}
export default registerReducer;