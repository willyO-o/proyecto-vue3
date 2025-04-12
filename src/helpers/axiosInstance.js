import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",

    },
});


axiosInstance.interceptors.request.use((config) => {

    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;

})


let fueRefrescado = false;

let solicitudesPendientes = [];






axiosInstance.interceptors.response.use(
    (response) => response,
    // en caso de error  no autorizado se ejejuta este bloque
    async (error) => {

        const solicitudOriginal = error.config

        const codigoEstado = error.response.status // 401,404,403,500, etc

        if (codigoEstado == 401 && !solicitudOriginal._refrescado ) {

            if (fueRefrescado) {

                return new Promise((resolve, reject) => {
                    solicitudesPendientes.push({ resolve, reject })
                }).then(() => {
                    return axiosInstance(solicitudOriginal)
                }).catch((error) => {
                    return Promise.reject(error)
                })
            }

            fueRefrescado = true
            solicitudOriginal._refrescado = true

            try {

                await renovarAccessToken()

                return axiosInstance(solicitudOriginal)

            } catch (errorToken) {
                // en caso de que el token no hay podido ser renovado se rechza la promesa

                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('usuario')

            } finally {
                fueRefrescado = false

                solicitudesPendientes.forEach((solicitud) => {
                    solicitud.resolve()
                })

                solicitudesPendientes = []
            }

        }

        

        return Promise.reject(error)


    }

)

const renovarAccessToken = async () => {

    const refreshToken = localStorage.getItem('refreshToken')

    const respuesta = await axios.post(import.meta.env.VITE_API_URL + '/auth/refresh', { refresh_token: refreshToken })

    const nuevoToken = respuesta.data.access_token.token

    localStorage.setItem('accessToken', nuevoToken)

}