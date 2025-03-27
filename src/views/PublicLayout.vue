<template>


    <!-- Navbar Transparent -->
    <Navegacion />
    <!-- End Navbar -->
    <!-- -------- START HEADER 7 w/ text and video ------- -->
    <Header />
    <!-- -------- END HEADER 7 w/ text and video ------- -->
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">

        <RouterView />


    </div>


    <Footer />



</template>

<script setup>

import Navegacion from '@/modules/public/includes/Navegacion.vue'
import Footer from '@/modules/public/includes/Footer.vue'

import Header from '@/modules/public/includes/Header.vue'

</script>