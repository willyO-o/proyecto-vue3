import * as yup from 'yup'

export const validacionProductoSchema = yup.object({
    titulo: yup.string().required('Este campo es requerido'),
    descripcion: yup.string(),
    precio: yup.number().required('El precio del producto es requerido').min(0.5,'El precio no puede ser menor a cero'),
    stock: yup.number().required().min(0,'El valor minis debe ser 0'),
    categoria_id: yup.number().required('Seleccione una Categoria').min(1, 'Seleccione una categoria valida')
})


