import { BASE_URL } from '../constants/api-random-user'

export const fetchData = (path = '', fetchOpt = {}, params) => {
  const url = new URL(`${BASE_URL}${path}`)
  if (params != null) {
    Object.keys(params).forEach(key => {
      return url.searchParams.append(key, params[key])
    })
  }
  return fetch(url, fetchOpt)
    .then(res => {
      if(!res.ok) {
        return Promise.reject({
          status: res.status,
          statusText: res.statusText,
        })
      }

      return res.json()
    })
    .catch(e => console.log('Fetch exception', e))
}