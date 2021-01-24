import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

// instance.get('/report')

export default instance