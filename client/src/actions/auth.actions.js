import axios from "axios";
import {setMessage} from "../store/userReducer";


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
            console.log({err})
        }
    }
}