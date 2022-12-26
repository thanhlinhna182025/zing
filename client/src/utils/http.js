import axios from 'axios'
const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000
})

export default http
