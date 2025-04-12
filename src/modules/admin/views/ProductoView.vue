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
                                        Nombre Producto</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Categoria</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Stock Actual</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Fecha Creacion</th>

                                    <th class="text-secondary opacity-7"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="fila in listadoProductos" :key="fila.id">
                                    <td>
                                        <div class="d-flex px-2 py-1">
                                            <div>
                                                <img :src="extraerPrimeraImagen(fila.imagen)"
                                                    class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="mb-0 text-sm">{{ fila.titulo }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">
                                            {{ fila.categoria }}
                                        </p>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span
                                            :class="`${fila.stock > 5 ? 'bg-gradient-success' : 'bg-gradient-danger'}`"
                                            class="badge badge-sm ">
                                            {{ fila.stock }}
                                        </span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">
                                            {{ fila.creado_el }}
                                        </span>
                                    </td>
                                    <td class="align-middle">
                                        <a @click="mostrarDetalles(fila.id)" href="javascript:;"
                                            class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <RouterLink :to="`/admin/productos/editar/${fila.id}`"
                                            class="text-secondary font-weight-bold text-xs mx-2" data-toggle="tooltip"
                                            data-original-title="Editar producto">
                                            <i class="fas fa-pencil"></i>
                                        </RouterLink>
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
                                :porPagina="parametros.limit" @cambiar-pagina="listarProductos" />


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card mt-4">
                        <!-- Card image -->
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <CarruselProducto
                                :imagenes="JSON.parse(datosProducto.imagen)"
                            />
                        </div>
                        <!-- Card body -->
                        <div class="card-body">
                            <h4 class="font-weight-normal mt-3">
                                {{ datosProducto.titulo }}
                            </h4>
                            <ul class="list-group list-group-flush mt-2">
                                <li class="list-group-item">Categoria: {{ datosProducto.categoria }}</li>
                                <li class="list-group-item">Stock: {{ datosProducto.stock }}</li>
                                <li class="list-group-item">Precio: {{ datosProducto.precio }}</li>
                            </ul>
                            <p class="card-text mb-4">
                                {{ datosProducto.descripcion }}
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>

</template>


<script setup>

import { ref, onMounted } from 'vue'

import { cargarProductos, eliminarProducto, cargarProductoId } from '@/services/productoServicio'

import { extraerPrimeraImagen } from '@/helpers/productoHelper'
import Paginador from '@/modules/admin/components/Paginador.vue'

import CarruselProducto from '@/modules/public/components/CarruselProducto.vue'

import Swal from 'sweetalert2'




const listadoProductos = ref([])

const datosProducto = ref({
    id:0,
    titulo:'',
    imagen:'[]'
})

const totalProductos = ref(0)

let modalDetalles = null;

const parametros = ref({
    limit: 10,
    page: 1,
    search: ''
})


const listarProductos = async (pagina = 1) => {

    parametros.value.page = pagina

    const resultado = await cargarProductos(parametros.value)

    listadoProductos.value = resultado.data;

    totalProductos.value = resultado.total


}

const mostrarDetalles = async (idProducto) => {


    const resultado = await cargarProductoId(idProducto)

    datosProducto.value = resultado
    console.log(resultado);

    modalDetalles.show()

}



const eliminarItem = (idProducto) => {

    Swal.fire({
        title: "Esta usted seguro?",
        text: "Desea eliminar este producto?, esta accion no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {

            eliminarProducto(idProducto)
                .then(respuesta => {
                    Swal.fire({
                        title: "Exitoso!",
                        text: "El producto ha sido eliminado.",
                        icon: "success"
                    });
                    listarProductos()
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


    // console.log("producto eliminado :" + idProducto);


    // const resultado = await eliminarProducto(idProducto)


}



onMounted(() => {


    modalDetalles = new bootstrap.Modal(document.getElementById('exampleModal'))

    listarProductos()
})




</script>