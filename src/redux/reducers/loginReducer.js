import loginActions from "../actions/loginActions";

const initState ={
    validatePhone:"",
    validateEmail:"",
    validateUsername:"",
}
const LoginReducer = (state = initState,action) =>{
    switch (action.type) {
        case loginActions.type.VALIDATE_PHONE_SUCCESS:
            return {...state,validatePhone: action.message}
        case loginActions.type.VALIDATE_EMAIL_SUCCESS:
            return {...state,validateEmail: action.message}
        case loginActions.type.VALIDATE_USERNAME_SUCCESS:
            return {...state,validateUsername: action.message}
        default:
            return {...state}
    }
}
export default LoginReducer