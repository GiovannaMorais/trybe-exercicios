const ADD_REGISTER = 'ADD_REGISTER'
const LOGIN ='LOGIN'
const DELETE_REGISTER ='DELETE_REGISTER'
export const addRegister = (value) => ({type:ADD_REGISTER,data:value})
export const login = (value) => ({type:LOGIN,value})
export const deleteRegister = value => ({ type: DELETE_REGISTER, value });