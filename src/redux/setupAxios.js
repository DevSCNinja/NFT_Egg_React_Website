export default function setupAxios(axios, store) {
    // ** Add request interceptor
    axios.interceptors.request.use(
      config => {
        const {
          auth
        } = store.getState()

        if (auth.user && auth.user.token) {
          config.headers.Authorization = auth.user.token
        }

        return config
      },
      err => Promise.reject(err)
    )
    
    // ** Add response interceptor
    axios.interceptors.response.use(
      response => response,
      error => {
        const { response } = error
        // ** if (status === 401) {
        if (response && response.status === 401) {
          window.location.href = "/not-authorized"
        }
        return Promise.reject(error)
      }
    )
  }
  