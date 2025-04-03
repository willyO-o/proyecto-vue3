<template>


    <div class="container">
        <h2 class="text-center my-3">
            Detalles del Carrito
        </h2>
        <div class="row">

            <div class="col-md-9">

                <div class="card">
                    <div class="table-responsive">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Nombre Producto
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Precio
                                    </th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        cantidad Producto</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Sub-Total
                                    </th>
                                    <th class="text-secondary opacity-7"></th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr v-for="item in carritoStore.carrito" :key="item.id">
                                    <td>
                                        <div class="d-flex px-2 py-1">
                                            <div>
                                                <img :src="extraerPrimeraImagen(item.imagen)"
                                                    class="avatar avatar-sm me-3">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="mb-0 text-xs">{{ item.titulo }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">{{ item.precio }} Bs.</p>
                                    </td>
                                    <td class="align-middle text-center text-sm">

                                        <div class="d-flex justify-content-lg-start justify-content-center p-2">
                                            <a @click="restarCantidad(item)"
                                                class="input-group-text btn btn-sm btn-dark mb-0" id="basic-addon1">
                                                <i class="fas fa-minus"></i>
                                            </a>
                                            
                                            <input type="text" class="form-control form-control-sm text-center border"
                                                aria-label="Username" aria-describedby="basic-addon1"
                                                :value="carritoStore.cantidadProducto(item.id)" />

                                            <a @click="carritoStore.agregarProducto(item, 1)"
                                                :class="carritoStore.cantidadProducto(item.id) >= item.stock ? 'disabled': ''"
                                                class="input-group-text   btn btn-sm btn-dark mb-0" id="basic-addon1">
                                                <i class="fas fa-add"></i>
                                            </a>
                                        </div>


                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-normal">
                                            {{ item.precio * carritoStore.cantidadProducto(item.id) }} Bs.
                                        </span>
                                    </td>
                                    <td class="align-middle">
                                        <a href="javascript:;" @click="carritoStore.eliminarProducto(item.id)"
                                            class="text-danger font-weight-normal text-xs" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>


                                <tr v-if="carritoStore.carrito.length == 0">
                                    <td colspan="100%" class="p-4">
                                        <h4 class="text-center">No tiene Productos en Tu carrito de Compras</h4>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-4">
                <div class="card shadow-lg">
                    <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">Resumen</span>
                    <div class="card-header text-center pt-4 pb-3">
                        <h3 class="font-weight-bold mt-2">
                            <small class="text-lg mb-auto">Total</small> <small class="text-lg">Bs.</small>
                            <br>
                            {{ carritoStore.calcularTotalCarrito() }}
                        </h3>
                    </div>
                    <div class="card-body text-lg-start text-center pt-0">
                       

                        <RouterLink to="/pagar" class="btn btn-icon bg-gradient-dark d-lg-block mt-3 mb-0">
                            Pagar
                            <i class="fas fa-credit-card text-lg ms-1" aria-hidden="true"></i>
                        </RouterLink>
                    </div>
                </div>
            </div>

        </div>

    </div>




</template>

<script setup>

import { useCarritoStore } from '@/modules/public/stores/useCarritoStore.js'
import { extraerPrimeraImagen } from '@/helpers/productoHelper.js'


const carritoStore = useCarritoStore()

const restarCantidad = (producto) => {

    if (carritoStore.cantidadProducto(producto.id) > 1) {
        carritoStore.agregarProducto(producto, -1)

    }
    return

}




</script>