import { axiosInstance } from '@/helpers/axiosInstance';




export const cargarProductos = async (parametros = {}) => {



    const respuesta = await axiosInstance.get("/productos", { params: parametros });

    return respuesta.data;

}


export const cargarProductoId = async (id) => {

    const respuesta = await axiosInstance.get('/productos/' + id)

    return respuesta.data;

}

export const registrarProducto = async (producto) => {

    const respuesta = await axiosInstance.post('/productos', producto)

    return respuesta.data

}

export const actualizarProducto = async (producto, idProducto) => {

    const respuesta = await axiosInstance.put('/productos/' + idProducto)

    return respuesta.data

}


