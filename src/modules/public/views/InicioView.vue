<template>


    <!-- Section with four info areas left & one card right with image and waves -->
    <section class="py-7">
        <div class="container">

            <h2 class="text-center mb-5">Productos mas Vendidos</h2>

            <div class="row">


                <TarjetaProducto v-for="item in listadoProductos" :key="item.id" :producto="item" />

            </div>
        </div>
    </section>
    <!-- END Section with four info areas left & one card right with image and waves -->
    <!-- -------- START Features w/ pattern background & stats & rocket -------- -->
    <section class="pb-5 position-relative bg-gradient-dark mx-n3">
        <div class="container">
            <div class="row">
                <div class="col-md-8 text-start mb-5 mt-5">
                    <h3 class="text-white z-index-1 position-relative">The Executive Team</h3>
                    <p class="text-white opacity-8 mb-0">There’s nothing I really wanted to do in life that I wasn’t
                        able to get good at. That’s my skill.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="card card-profile mt-4">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                <a href="javascript:;">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src="/assets/img/team-5.jpg"
                                            alt="image">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-8 col-md-6 col-12 my-auto">
                                <div class="card-body ps-lg-0">
                                    <h5 class="mb-0">Emma Roberts</h5>
                                    <h6 class="text-info">UI Designer</h6>
                                    <p class="mb-0">Artist is a term applied to a person who engages in an activity
                                        deemed to be an art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="card card-profile mt-lg-4 mt-5">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                <a href="javascript:;">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src="/assets/img/bruce-mars.jpg"
                                            alt="image">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-8 col-md-6 col-12 my-auto">
                                <div class="card-body ps-lg-0">
                                    <h5 class="mb-0">William Pearce</h5>
                                    <h6 class="text-info">Boss</h6>
                                    <p class="mb-0">Artist is a term applied to a person who engages in an activity
                                        deemed to be an art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 col-12">
                    <div class="card card-profile mt-4 z-index-2">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                <a href="javascript:;">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg"
                                            src="/assets/img/ivana-squares.jpg" alt="image">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-8 col-md-6 col-12 my-auto">
                                <div class="card-body ps-lg-0">
                                    <h5 class="mb-0">Ivana Flow</h5>
                                    <h6 class="text-info">Athlete</h6>
                                    <p class="mb-0">Artist is a term applied to a person who engages in an activity
                                        deemed to be an art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="card card-profile mt-lg-4 mt-5 z-index-2">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                <a href="javascript:;">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src="/assets/img/ivana-square.jpg"
                                            alt="image">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-8 col-md-6 col-12 my-auto">
                                <div class="card-body ps-lg-0">
                                    <h5 class="mb-0">Marquez Garcia</h5>
                                    <h6 class="text-info">JS Developer</h6>
                                    <p class="mb-0">Artist is a term applied to a person who engages in an activity
                                        deemed to be an art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------- END Features w/ pattern background & stats & rocket -------- -->
    <section class="pt-4 pb-6" id="count-stats">
        <div class="container">
            <div class="row mb-7">
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-nasa.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-netflix.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-spotify.svg" alt="logo">
                </div>
                <div class="col-lg-2 col-md-4 col-6 mb-4">
                    <img class="w-100 opacity-7" src="/assets/img/logos/gray-logos/logo-vodafone.svg" alt="logo">
                </div>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-md-3">
                    <h1 class="text-gradient text-info" id="state1" countTo="5234">0</h1>
                    <h5>Projects</h5>
                    <p>Of “high-performing” level are led by a certified project manager</p>
                </div>
                <div class="col-md-3">
                    <h1 class="text-gradient text-info"><span id="state2" countTo="3400">0</span>+</h1>
                    <h5>Hours</h5>
                    <p>That meets quality standards required by our users</p>
                </div>
                <div class="col-md-3">
                    <h1 class="text-gradient text-info"><span id="state3" countTo="24">0</span>/7</h1>
                    <h5>Support</h5>
                    <p>Actively engage team members that finishes on time</p>
                </div>
            </div>
        </div>
    </section>
    <!-- -------- START PRE-FOOTER 1 w/ SUBSCRIBE BUTTON AND IMAGE ------- -->
    <section class="my-5 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 m-auto">
                    <h4>Be the first to see the news</h4>
                    <p class="mb-4">
                        Your company may not be in the software business,
                        but eventually, a software company will be in your business.
                    </p>
                    <div class="row">
                        <div class="col-8">
                            <div class="input-group input-group-outline">
                                <label class="form-label">Email Here...</label>
                                <input type="text" class="form-control mb-sm-0">
                            </div>
                        </div>
                        <div class="col-4 ps-0">
                            <button type="button"
                                class="btn bg-gradient-info mb-0 h-100 position-relative z-index-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 ms-auto">
                    <div class="position-relative">
                        <img class="max-width-50 w-100 position-relative z-index-2" src="/assets/img/macbook.png"
                            alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------- END PRE-FOOTER 1 w/ SUBSCRIBE BUTTON AND IMAGE ------- -->

</template>

<script setup>

import { cargarProductos } from '@/services/productoServicio.js'

import { onMounted, ref } from 'vue'



import TarjetaProducto from '@/modules/public/components/TarjetaProducto.vue'


const listadoProductos = ref([])



const listarProductos = async () => {

    const respuesta = await cargarProductos({ page: 1, limit: 3 })

    // console.log()

    listadoProductos.value = respuesta.data

}




onMounted(() => {


    listarProductos()

})



</script>