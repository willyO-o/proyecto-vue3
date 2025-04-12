<template>

<div class="row">
        <div class="col-12">
            <div class="card my-4">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div
                        class="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3  d-flex justify-content-between">
                        <h6 class="text-white text-capitalize ps-3">Listado de Productos</h6>

                        <RouterLink to="/admin/productos/crear" class="btn btn-primary mb-0 me-2">
                            <i class="fas fa-plus"></i>
                            Registrar Nuevo
                        </RouterLink>
                    </div>
                </div>

                <div class="card-body px-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Nombre Categoria</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Estado</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Fecha creacion</th>
      
                                    <th class="text-secondary opacity-7"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="fila in listadoCategorias" :key="fila.id">

                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">
                                            {{ fila.categoria }}
                                        </p>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span
                                            :class="`${fila.estado == 'activo' ? 'bg-gradient-success' : 'bg-gradient-danger'}`"
                                            class="badge badge-sm ">
                                            {{ fila.estado }}
                                        </span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">
                                            {{ fila.creado_el }}
                                        </span>
                                    </td>
                                    <td class="align-middle">

                                        <a href="javascript:;"
                                            class="text-secondary font-weight-bold text-xs mx-2" data-toggle="tooltip"
                                            data-original-title="Editar Categoria">
                                            <i class="fas fa-pencil"></i>
                                        </a>
                                        <a @click="eliminarItem(fila.id)" href="javascript:;"
                                            class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-trash-alt"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                        <div class="mt-3">

                            <Paginador :paginaActual="parametros.page" :totalProductos="totalProductos"
                                :porPagina="parametros.limit" @cambiar-pagina="listarCategorias" />


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import {ref, onMounted} from 'vue'

import {cargarCategorias, eliminarCategoria} from '@/services/categoriaServicio.js'

import Paginador from '@/modules/admin/components/Paginador.vue'

import Swal from 'sweetalert2'

const listadoCategorias = ref([])

const parametros = ref({
    page: 1,
    limit:10
})
const totalProductos = ref(0)

const listarCategorias = async (pagina = 1) =>{

    parametros.value.page = pagina

    const resultado =  await cargarCategorias(parametros.value)

    listadoCategorias.value = resultado.data
    totalProductos.value= resultado.total
}


const eliminarItem = (idCategoria) =>{

    Swal.fire({
        title: "Esta usted seguro?",
        text: "Desea eliminar esta Categoria?, esta accion no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {

            eliminarCategoria(idCategoria)
                .then(respuesta => {
                    Swal.fire({
                        title: "Exitoso!",
                        text: "La categoria ha sido eliminada.",
                        icon: "success"
                    });
                    listarCategorias()
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        title: "Error!",
                        text: "Ha ocurrido un error, verifique en intente nuevamente.",
                        icon: "error"
                    });
                })

        }
    });



}

onMounted( ()=>{

    listarCategorias()
})





</script>