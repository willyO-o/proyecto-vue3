import { axiosInstance } from "@/helpers/axiosInstance";


export const autenticarUsuario = async (datosUsuario) =>{

    const respuesta =  await axiosInstance.post('/auth/login', datosUsuario)

    return respuesta.data;

}


export const solicitarDatosUsuario = async ()=>{

    const respuesta = await axiosInstance.get('/auth/me')

    return respuesta.data;
}
