
import { axiosInstance } from "@/helpers/axiosInstance";


export const cargarCategorias = async (parametros = {}) => {

    const respuesta = await axiosInstance.get('/categorias', { params:parametros})
    
    return respuesta.data;

}

export const eliminarCategoria = async (idCategoria) =>{

    const respuesta = await axiosInstance.delete('/categorias/'+idCategoria)

    return  respuesta.data
}