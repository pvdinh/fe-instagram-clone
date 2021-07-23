const type = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    LOGIN_FACEBOOK: 'LOGIN_FACEBOOK',
    VALIDATE_PHONE: 'VALIDATE_PHONE',
    VALIDATE_EMAIL: 'VALIDATE_EMAIL',
    VALIDATE_PHONE_SUCCESS: 'VALIDATE_PHONE_SUCCESS',
    VALIDATE_EMAIL_SUCCESS: 'VALIDATE_EMAIL_SUCCESS',
    VALIDATE_USERNAME: 'VALIDATE_USERNAME',
    VALIDATE_USERNAME_SUCCESS: 'VALIDATE_USERNAME_SUCCESS',
}
const action = {
    login: (username, password) => {
        return {
            type: type.LOGIN,
            payload:{
                username:username,
                password:password,
            }
        }
    },
    loginFacebook:(token)=>{
        return{
            type:type.LOGIN_FACEBOOK,
            token:token,
        }
    },
    logout:()=>{
        return{
            type:type.LOGOUT,
        }
    },
    register:(data)=>{
        return{
            type:type.REGISTER,
            payload:{
                data:data,
            },
        }
    },
    validatePhone:(s)=>{
        return{
            type:type.VALIDATE_PHONE,
            s:s,
        }
    },
    validateEmail:(s)=>{
        return{
            type:type.VALIDATE_EMAIL,
            s:s,
        }
    },
    validateUsername:(s)=>{
        return{
            type:type.VALIDATE_USERNAME,
            s:s,
        }
    },
}
export default {type,action}