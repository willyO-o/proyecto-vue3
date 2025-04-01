<template>


    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active">
            </li>
            <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            
            <div v-for="(imagen, index) in imagenes" :key="index" class="carousel-item active">
                <img class="d-block w-100" :src="imagen" alt="First slide">
            </div>

            <!-- <div class="carousel-item">
                <img class="d-block w-100"
                    src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-2-min.jpg"
                    alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"
                    src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/products/product-3-min.jpg"
                    alt="Third slide">
            </div> -->

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

</template>


<script setup>

import { defineProps } from 'vue'

const props = defineProps(['imagenes']);


</script>