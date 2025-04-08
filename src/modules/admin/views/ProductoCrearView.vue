<template>

    <div class="row">

        <div class="col-md-10">
            <div class="card-header">
                <h3>
                    {{ route.params.idProducto ? "Modificar" : "Registrar" }} Producto
                </h3>
            </div>
            <div class="card">
                <div class="card-body">

                    <Form :validation-schema="validacionProductoSchema" @submit="enviarDatos">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="form-label">Nombre del Producto</label>

                                <div class="input-group input-group-outline ">
                                    <Field type="text" v-model="datosFormularioProducto.titulo" name="titulo"
                                        class="form-control" />
                                </div>
                                <ErrorMessage class="text-danger" name="titulo" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Categoria</label>
                                <div class="input-group input-group-outline ">
                                    <Field v-model="datosFormularioProducto.categoria_id" as="select"
                                        name="categoria_id" class="form-control">
                                        <option value="0">Seleccione Categoria</option>
                                        <option v-for="categoria in listadoCategorias" :key="categoria.id"
                                            :value="categoria.id">
                                            {{ categoria.categoria }}
                                        </option>
                                    </Field>
                                </div>
                                <ErrorMessage class="text-danger" name="categoria_id" />

                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6">
                                <label class="form-label">Success</label>

                                <div class="input-group input-group-outline  ">
                                    <Field v-model="datosFormularioProducto.precio" type="number" name="precio"
                                        class="form-control" />
                                </div>
                                <ErrorMessage class="text-danger" name="precio" />

                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Stock del Producto</label>

                                <div class="input-group input-group-outline  ">
                                    <Field v-model="datosFormularioProducto.stock" type="number" name="stock"
                                        class="form-control" />
                                </div>
                                <ErrorMessage class="text-danger" name="stock" />


                            </div>
                        </div>

                        <div class="row">

                            <div class="col-12 mt-3">

                                <label class="form-label">Descripción del Producto</label>

                                <div class="input-group input-group-outline  ">
                                    <Field v-model="datosFormularioProducto.descripcion" as="textarea"
                                        name="descripcion" class="form-control" />
                                </div>

                                <ErrorMessage class="text-danger" name="descripcion" />

                            </div>


                        </div>

                        <div class="row mt-3">
                            <label class="form-label">Url de la imagen del producto</label>

                            <div class="col-12 d-flex">

                                <div class="input-group input-group-outline  ">
                                    <input v-model="urlImagen" type="text" name="urlImagen" class="form-control">
                                </div>


                                <button @click="adicionarImagen" :disabled="!urlImagen" type="button"
                                    class="input-group-text btn btn-primary mb-0" id="basic-addon1">Agregar</button>

                            </div>


                        </div>
                        <div class="row mt-3">
                            <div v-for="(img, index) in listadoImagenes" :key="index" class="col-md-3">
                                <div class="card bg-dark text-white border-0 position-relative">
                                    <span @click="quitarImagen(index)" class="position-absolute top-0 end-0 me-2 mt-2">
                                        <i class="fas fa-trash-alt text-danger cursor-pointer"></i>
                                    </span>
                                    <img class="card-img" :src="img" alt="Card image">
                                </div>
                            </div>

                            <div v-if="listadoImagenes.length == 0" class="col-12">
                                <h5 class="text-center p-5">
                                    Sin imagenes agregadas

                                </h5>
                            </div>


                        </div>


                        <div class="row">

                            <div class="col-12 mt-5">
                                <button class="btn btn-dark" type="submit">
                                    Guardar Producto
                                </button>
                            </div>


                        </div>



                    </Form>
                </div>
            </div>
        </div>
    </div>


</template>


<script setup>

import { validacionProductoSchema } from '@/modules/admin/schemas/validacionProductoSchema'

import { Form, Field, ErrorMessage } from 'vee-validate'

import { ref, reactive, onMounted } from 'vue'

import { cargarCategorias } from '@/services/categoriaServicio'

import { registrarProducto, cargarProductoId, actualizarProducto } from '@/services/productoServicio'

import { useRouter, useRoute } from 'vue-router'

import Swal from 'sweetalert2'

const router = useRouter()
const route = useRoute()
const listadoCategorias = ref([])

let datosFormularioProducto = reactive({
    titulo: "",
    descripcion: "",
    imagen: "[]",
    precio: 0,
    stock: 0,
    categoria_id: "0"
})

const urlImagen = ref("");

const listadoImagenes = ref([])


const adicionarImagen = () => {

    // if(urlImagen.indexOf(".jpg")== -1 || urlImagen.indexOf(".jpeg")== -1 || urlImagen.indexOf(".png")== -1 ){
    //     return false
    // }

    listadoImagenes.value.push(urlImagen.value)

    urlImagen.value = ''

}

const quitarImagen = (indice) => {

    listadoImagenes.value = listadoImagenes.value.filter((img, index) => index != indice)
}


const enviarDatos = async () => {

    if (listadoImagenes.value.length < 1) {
        return alert("Por favor ingrese alguna imagen del producto")
    }

    datosFormularioProducto.imagen = JSON.stringify(listadoImagenes.value)
    delete datosFormularioProducto.id
    delete datosFormularioProducto.creado_el
    delete datosFormularioProducto.categoria

    console.log(datosFormularioProducto);

    try {

        if (route.params.idProducto) {

            const resultado = await actualizarProducto(datosFormularioProducto, route.params.idProducto)

        } else {
            const resultado = await registrarProducto(datosFormularioProducto)

        }

        Swal.fire("Exitoso!!", `Producto ${route.params.idProducto ? "Actualizado" : "Registrado"} correctamente`, "success")

        setTimeout(() => {
            router.push('/admin/productos')
        }, 1500)


    } catch {

        Swal.fire("Error!!", "Producto Ocurrio un error, revise e intente nuevamente", "error")

    }



}

const listarCategorias = async () => {

    const resultado = await cargarCategorias();

    listadoCategorias.value = resultado.data;

}

const listarProductoId = async (idProducto) => {

    const resultado = await cargarProductoId(idProducto)

    datosFormularioProducto = resultado

    listadoImagenes.value = JSON.parse(resultado.imagen)

}


onMounted(() => {



    if (route.params.idProducto > 0) {

        console.log(route.params.idProducto);

        listarProductoId(route.params.idProducto)
    }

    listarCategorias()
})




</script>
