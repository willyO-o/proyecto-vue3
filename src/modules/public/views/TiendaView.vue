<template>

    <section class="py-5">

        <div class="container">

            <h2 class="text-center"> Listado Productos </h2>

            <div class="row">

                <div class="col-md-6">

                    <div class="input-group input-group-static mb-4">
                        <label for="selecCategoria" class="ms-0">Filtrar por Categoria</label>
                        <select @change="listarProductos" v-model="categoriaSeleccionada" class="form-control"
                            id="selecCategoria">
                            <option value="0"> Seleccione Categoria</option>
                            <option :value="categoria.id" v-for="categoria in listadoCategorias" :key="categoria.id">
                                {{ categoria.categoria }}
                            </option>

                        </select>
                    </div>
                </div>

            </div>

            <div class="row">

                <TarjetaProducto v-for="item in listadoProductos" :key="item._id" :producto="item" />


                <div v-if="listadoProductos.length == 0" class="col-md-12">

                    <h4 class="text-center"> No se encontraron Resultados </h4>

                </div>

            </div>

        </div>


    </section>

</template>


<script setup>


import { cargarProductos } from '@/services/productoServicio.js'

import { cargarCategorias } from '@/services/categoriaServicio.js'

import { ref, onMounted } from 'vue'

import TarjetaProducto from '@/modules/public/components/TarjetaProducto.vue'


const listadoProductos = ref([])

const listadoCategorias = ref([])

const categoriaSeleccionada = ref(0)

const listarProductos = async () => {



    const respuesta = await cargarProductos({ page: 1, limit: 9, categoria_id: categoriaSeleccionada.value })

    listadoProductos.value = respuesta.data

}


const listarCategorias = async () => {

    const respuesta = await cargarCategorias({ page: 1, limit: 100 })

    listadoCategorias.value = respuesta.data
}




onMounted(() => {

    listarProductos()

    listarCategorias()



})






</script>