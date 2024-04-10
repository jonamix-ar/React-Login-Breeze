import Axios from 'axios'

const api = Axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_ENDPOINT_API,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export default api
