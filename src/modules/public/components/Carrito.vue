<template>
    <li class="nav-item dropdown dropdown-hover mx-2">
        <a class="nav-link ps-2 d-flex cursor-pointer align-items-center font-weight-semibold" id="dropdownMenuPages"
            data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-cart-shopping me-1 mt-1"></i>
        </a>


        <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
            aria-labelledby="dropdownMenuPages">
            <div class="d-none d-lg-block">

                <div>
                    <div v-for="item in carritoStore.carrito" :key="item.id"
                        class="d-flex ps-1 pe-2 py-1 position-relative">
                        <div>

                            <span class="position-absolute top-0 end-0" @click="carritoStore.eliminarProducto(item.id)">
                                <i class="fas fa-trash text-danger"></i>
                            </span>

                            <img :src="extraerPrimeraImagen(item.imagen)" class="avatar avatar-sm me-3">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-xs">{{ item.titulo }}</h6>
                            <p class="text-xs text-secondary mb-0">
                                {{ item.cantidad }} x {{ item.precio }} Bs.
                            </p>
                        </div>
                    </div>


                    <h4 v-if="carritoStore.carrito.length == 0"
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        No Tienes productos en el carrito
                    </h4>
                </div>

                <div v-if="carritoStore.carrito.length > 0">
                    <hr class="border">
                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                        Total {{ carritoStore.calcularTotalCarrito() }} Bs.
                    </h6>

                    <div class="justify-content-between d-flex">
                        <RouterLink to="/carrito" class="dropdown-item border-radius-md text-info">
                            <i class="fas fa-shopping-cart me-1"></i>
                            <span>Ver Carrito</span>
                        </RouterLink>
                        <RouterLink href="/pagar" class="dropdown-item border-radius-md">
                            <i class="fas fa-credit-card me-1"></i>
                            <span>Pagar</span>
                        </RouterLink>
                    </div>

                </div>


            </div>


        </div>
    </li>

</template>


<script setup>

import { useCarritoStore } from '@/modules/public/stores/useCarritoStore.js'

import { extraerPrimeraImagen } from '@/helpers/productoHelper.js'


const carritoStore = useCarritoStore()


</script>