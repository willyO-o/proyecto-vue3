<template>

    <div class="container my-auto py-5">
        <div class="row">
            <div class="col-lg-4 col-md-8 col-12 mx-auto">
                <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                            <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar Sesión</h4>
                            <div class="row mt-3">
                                <div class="col-2 text-center ms-auto">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fab fa-facebook text-white text-lg"></i>
                                    </a>
                                </div>
                                <div class="col-2 text-center px-1">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fab fa-github text-white text-lg"></i>
                                    </a>
                                </div>
                                <div class="col-2 text-center me-auto">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fab fa-google text-white text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        <Form :validation-schema="loginValitationSchema" @submit="autenticar()" role="form"
                            class="text-start">
                            <div class="input-group input-group-outline ">
                                <Field v-model="datosFormulario.email" name="email" placeholder="Correo Electronico"
                                    type="email" class="form-control" />
                            </div>
                            <ErrorMessage name="email" class="text-danger mb-3" />

                            <div class="input-group input-group-outline ">
                                <Field v-model="datosFormulario.password" name="password"
                                    placeholder="Contraseña de Usuario" type="password" class="form-control" />
                            </div>
                            <ErrorMessage name="password" class="text-danger" />
                            <div class="form-check form-switch d-flex align-items-center my-3">
                                <input v-model="datosFormulario.rememberMe" class="form-check-input" type="checkbox"
                                    id="rememberMe" checked>
                                <label class="form-check-label mb-0 ms-3" for="rememberMe">Recordar Sesion</label>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn bg-gradient-dark w-100 my-4 mb-2">Iniciar
                                    Sesión</button>
                            </div>
                            <p class="mt-4 text-sm text-center">
                                Olvidaste tu contraseña?
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import { reactive, onBeforeMount } from 'vue';

import { loginValitationSchema } from '@/modules/public/schemas/loginValitationSchema.js'

import { Form, Field, ErrorMessage } from 'vee-validate'

import { autenticarUsuario, solicitarDatosUsuario } from '@/services/autenticacionServicio.js'

import { useRouter } from 'vue-router'

import Swal from 'sweetalert2';


const router = useRouter()

const datosFormulario = reactive({
    email: '',
    password: '',
    rememberMe: false
})



const autenticar = async () => {


    try {

        const resultado = await autenticarUsuario(datosFormulario)

        const accessToken = resultado.access_token.token;

        const refreshToken = resultado.refresh_token.token;

        localStorage.setItem('accessToken', accessToken)

        localStorage.setItem('refreshToken', refreshToken)

        const datosUsuario = await solicitarDatosUsuario();

        localStorage.setItem('usuario', JSON.stringify(datosUsuario))


        Swal.fire({
            title: "Exitoso!",
            text: "Bienvenido al Sistema, se le redireccionara en 3 segundos.",
            icon: "success"
        });

        setTimeout(() => {
            // redireccionr despues de 3 segundos
            router.push('/admin')
        }, 3000)


    } catch (error) {
        console.log(error)


        Swal.fire({
            title: "Error!",
            text: "Usuario o Contraseña Incorrectos",
            icon: "error"
        });
    }



}



onBeforeMount(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
        router.push('/admin')
    }

})

</script>