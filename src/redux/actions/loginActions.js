const type = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    LOGIN_FACEBOOK: 'LOGIN_FACEBOOK',
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
}
export default {type,action}