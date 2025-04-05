<template>

    <Aside />

    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        
        
        <!-- Navbar -->

        <Nav />
 
        <!-- End Navbar -->
        <div class="container-fluid py-2">

            
            <RouterView  />  


            <Footer />

        </div>
    </main>

    <MenuOculto />


</template>


<script setup>
import Aside from '@/modules/admin/includes/Aside.vue';
import Footer from '@/modules/admin/includes/Footer.vue';
import MenuOculto from '@/modules/admin/includes/MenuOculto.vue';

import Nav from '@/modules/admin/includes/Nav.vue';


</script>