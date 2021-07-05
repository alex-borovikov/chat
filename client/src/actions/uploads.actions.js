import axios from "axios";
import {setDisplayFileInfo, setUploadFileInfo, setUploadLoading, setUploadStatus} from "../store/chatReducer";


export const uploadFile = file =>  {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)

            dispatch(setUploadLoading(true))

            const response = await axios.post(`http://localhost:4000/api/user/file/upload`, formData, {
                // headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength =
                        progressEvent.lengthComputable ?
                        progressEvent.total :
                        progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        dispatch(setUploadStatus(progress))
                        if(progress === 100) {
                            dispatch(setUploadLoading(false))
                            dispatch(setUploadStatus(0))
                        }
                    }
                }
            });
            console.log(response.data.info)
            dispatch(setUploadFileInfo({name: response.data.info.name, size: response.data.info.size, path: response.data.info.path, id: response.data.info._id}))
            dispatch(setDisplayFileInfo(true))
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}