import { axiosInstance } from '@/helpers/axiosInstance';




export const cargarProductos = async (parametros = {}) => {



    const respuesta = await axiosInstance.get("/productos", { params: parametros });

    return respuesta.data;

}


export const cargarProductoId = async (id) => {

    const respuesta = await axiosInstance.get('/productos/' + id)

    return respuesta.data;

}


