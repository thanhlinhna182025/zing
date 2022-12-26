import http from '../utils/http'

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const respone = await http({
        url: '/home',
        method: 'GET'
      })
      if (respone.statusText !== 'OK') {
        throw new Error(respone.error.message)
      }
      resolve(respone.data)
    } catch (error) {
      reject(error)
    }
  })
