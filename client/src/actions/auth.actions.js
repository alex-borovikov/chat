import axios from "axios";
import {setLoader, setMessage, setUser} from "../store/userReducer";


export const register = (name, surname, email, password) => {
    return async (dispatch) => {
        try{
            const response = await axios.post('http://localhost:4000/api/auth/signup', {
                name,
                surname,
                email,
                password
            })
            dispatch(setMessage(response.data.message))
        }
        catch(err){
            // dispatch(setMessage(err.response.data.message))
            console.log(err.response?.data?.message)
        }
    }
}

export const login = (email, password) =>{
    return async (dispatch) => {
        try{
            const response = await axios.post('http://localhost:4000/api/auth/signin', {
                email,
                password
            })
            localStorage.setItem('userAuth', true)
            localStorage.setItem('token', response.data.token)
            const data = {
                message: response.data.message,
                user: response.data.user
            }
            dispatch(setUser(data))
        }
        catch(err){
            dispatch(setMessage(err.response?.data?.message))
        }
    }
}




export const auth = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:4000/api/auth/check', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = {
                message: response.data.message,
                user: response.data.user
            }
            dispatch(setUser(data))
            localStorage.setItem('token', response.data.token)
        }
        catch(err){
            console.log(err.response?.data?.message)
            localStorage.removeItem('token')
        }
    }
}

export const authWithGoogle = (token, userCred) => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:4000/api/auth/checkWithGoogle', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {userInfo: userCred}
            })
            const data = {
                message: response.data.message,
                user: response.data.user,
            }
            dispatch(setUser(data))
        } catch (err) {
            console.log(err.response?.data?.message)
        }
    }
}

