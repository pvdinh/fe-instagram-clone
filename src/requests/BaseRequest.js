import {axiosJwt} from "../axios/axiosConfig";
import {BASE_URL} from "../url";

export default class BaseRequest {
    version = 'api/v1';

    async get(url, params = {}) {
        try {
            const response =await axiosJwt.get(`${BASE_URL}/${this.version}/${url}`,{params:params})
            this._responseHandle(response)
        } catch (e) {
            this._errorHandle(e)
        }
    }

    async post(url, data = {}) {
        try {
            const response = await axiosJwt.post(`${BASE_URL}/${this.version}/${url}`,{...data})
            this._responseHandle(response)
        } catch (e) {
            this._errorHandle(e)
        }
    }

    async put(url, data = {}) {
        try {
            const response = await axiosJwt.put(`${BASE_URL}/${this.version}/${url}`,{...data})
        } catch (e) {
            this._errorHandle(e)
        }
    }

    async delete(url, params = {}) {
        try {
            const response=await axiosJwt.delete(`${BASE_URL}/${this.version}/${url}`,{params:params})
            this._responseHandle(response)
        } catch (e) {
            this._errorHandle(e)
        }
    }

    _responseHandle(response) {
        return response.statusCode === 200 ?
            {
                statusCode: response.data.statusCode,
                data: response.data.data,
            }
            :
            {
                statusCode: response.data.statusCode,
                message: response.data.message,
            }
    }

    _errorHandle(err){
        if(err.response && err.response.status === 401){
            window.location.href="/"
        }
        throw err
    }
}