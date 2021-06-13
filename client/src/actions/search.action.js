import axios from 'axios'
export const searchUser = async(value) => {
    try{
        const response = await axios.post('http://localhost:4000/api/user/search', {
            name: value
        })
        return {
            message: response.data.message,
            result: response.data.resultArray
        }
    }
    catch(err){
        console.log(err.response?.data?.message)
    }
}