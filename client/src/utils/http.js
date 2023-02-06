import axios from 'axios'
const apiUrl =
  process.env.NODE_ENV !== 'production' ? 'https://zing-api-azure.vercel.app/api' : 'https://localhost:5000/api'
const http = axios.create({
  baseURL: apiUrl,
  timeout: 5000
})

export default http
