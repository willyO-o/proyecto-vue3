<template>



    <div class="col-lg-4   mt-3">

        <div class="card">
            <div class="card-header p-0 position-relative mt-2 mx-2 z-index-2">
                <span class="bg-dark text-white badge mt-2 me-2 position-absolute top-0 end-0"> {{ producto.categoria }}
                </span>
                <a class="d-block blur-shadow-image">
                    <img :src="extraerPrimeraImagen(producto.imagen)" alt="img-colored-shadow"
                        class="img-fluid border-radius-lg">
                </a>
            </div>
            <div class="card-body text-center">
                <h5 class="font-weight-normal">
                    <RouterLink :to='`/producto/${producto.id}`'>
                        {{ producto.titulo }} 
                    </RouterLink>
                </h5>
                <h3> Bs. {{ producto.precio }}</h3>
                <p class="mb-0">
                    {{ extractoTexto(producto.descripcion, 100) }}
                </p>
                <button @click="carritoStore.agregarProducto(producto)" type="button"
                    class="btn bg-gradient-info btn-sm mb-0 mt-3">
                    Añadir al carrito
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>

import { defineProps } from 'vue';

import { extraerPrimeraImagen, extractoTexto } from '@/helpers/productoHelper.js'

import { useCarritoStore } from '@/modules/public/stores/useCarritoStore.js'

const props = defineProps(['producto']);



</script>