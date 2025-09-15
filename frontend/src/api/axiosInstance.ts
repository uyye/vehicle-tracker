import axios from 'axios'

const url = 'http://localhost:3000'
const instance = axios.create({
    baseURL:url,
    headers:{
        'Content-Type':'application/json'
    }
})

export default instance