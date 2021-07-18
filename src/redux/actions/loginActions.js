const type = {
    LOGIN: 'LOGIN',
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
}
export default {type,action}