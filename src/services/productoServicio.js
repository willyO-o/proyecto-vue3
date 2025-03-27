import axios from "axios";


export const cargarProductos = async () => {

    const respuesta = await axios.get("https://shop.preparateaqui.com/api/v1/productos?page=1&limit=10");

    return respuesta.data;

}


