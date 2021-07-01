const type = {
    LOGIN: 'LOGIN',
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
    }
}
export default {type,action}