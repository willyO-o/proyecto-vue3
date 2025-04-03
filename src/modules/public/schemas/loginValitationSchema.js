import * as yup from 'yup';


export const loginValitationSchema = yup.object({
    email: yup.string().email('Ingrese un correo eletronico valido').required('El correo es requerido'),
    password: yup.string().required('La contraseña de usuario es requerida')
})