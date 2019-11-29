import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const postPhone = newEntry =>{
    const request = axios.post(baseUrl, newEntry)
    return request.then(response => response.data)
}

const deletePhone = entryId =>{
    const request = axios.delete(baseUrl + `/${entryId}`)
    return request.then(response => response.data)
}

export default {getAll, postPhone, deletePhone}