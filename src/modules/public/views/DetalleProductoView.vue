<template>


    <section class="py-5">

        <div class="container">

            <div class="row">

                <div class="col-md-6">

                    <CarruselProducto :imagenes="imagenes" />

                </div>
                <div class="col-md-6">

                    <div class="card shadow-lg">
                        <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">
                            {{ datosProducto.categoria }}
                        </span>
                        <div class="card-header text-center pt-4 pb-3">
                            <h3 class="font-weight-bold mt-2">
                                {{ datosProducto.titulo }}
                            </h3>
                        </div>

                        <div class="card-body text-lg-start text-center pt-0">

                            <div class="d-flex justify-content-lg-start justify-content-center p-2">


                                <h4> Precio: {{ datosProducto.precio }} Bs</h4>
                            </div>

                            <div class="d-flex justify-content-lg-start justify-content-center p-2">

                                <span class="ps-3 "> stok: </span> <b class="mx-1"> {{ datosProducto.stock }} </b>
                                unidades
                            </div>


                            <div class="d-flex justify-content-lg-start justify-content-center p-2">
                                <div class="col-md-6">

                                    <div class="d-flex justify-content-lg-start justify-content-center p-2">
                                        <a @click="reducirCantidad()" class="input-group-text btn btn-sm btn-dark mb-0"
                                            id="basic-addon1">
                                            <i class="fas fa-minus"></i>
                                        </a>
                                        <input type="text" class="form-control form-control-sm text-center border"
                                            aria-label="Username" aria-describedby="basic-addon1"
                                            v-model="cantidadProducto" />
                                            
                                        <a @click="adicionarCantidad()"
                                            class="input-group-text  btn btn-sm btn-dark mb-0" id="basic-addon1">
                                            <i class="fas fa-add"></i>
                                        </a>
                                    </div>

                                </div>

                            </div>

                            <div class="d-flex justify-content-lg-start justify-content-center p-2">

                                <button @click="carritoStore.agregarProducto(datosProducto, cantidadProducto)"
                                    :disabled="carritoStore.cantidadProducto(datosProducto.id) >= datosProducto.stock"
                                    class="btn btn-info">

                                    <i class="fas fa-shopping-cart"></i>
                                    Agregar al Carrito

                                </button>

                                <RouterLink to="pagar" class="btn btn-dark ms-2">
                                    <i class="fas fa-credit-card"></i>
                                    Comprar
                                </RouterLink>

                            </div>

                        </div>
                    </div>

                </div>

                <div class="col-12 mt-2">
                    <div class="card">
                        <div class="card-body">
                            <h6>Descripcion del producto</h6>
                            <p>{{ datosProducto.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>



</template>

<script setup>

import CarruselProducto from '@/modules/public/components/CarruselProducto.vue';


import { ref, onMounted } from 'vue'

import { cargarProductoId } from '@/services/productoServicio.js'

import { useRoute } from 'vue-router';

import { useCarritoStore } from '@/modules/public/stores/useCarritoStore.js';


const carritoStore = useCarritoStore()



const route = useRoute()


const imagenes = ref([])

const datosProducto = ref({})

const cantidadProducto = ref(1)


const listarProducto = async () => {

    const respuesta = await cargarProductoId(route.params.idProducto)


    datosProducto.value = respuesta

    imagenes.value = JSON.parse(datosProducto.value.imagen)

}

const adicionarCantidad = () => {

    if (cantidadProducto.value < datosProducto.value.stock) {
        cantidadProducto.value++
    }

}

const reducirCantidad = () => {

    if (cantidadProducto.value > 1) {
        cantidadProducto.value--
    }

}


onMounted(() => {
    listarProducto()
})



</script>