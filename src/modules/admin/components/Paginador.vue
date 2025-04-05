<template>

    <div class="pagination-container justify-content-center">

        <ul class="pagination pagination-secondary">

            <li class="page-item">
                <a 
                @click="paginar(paginaActual-1)" 
                class="page-link" href="javascript:;" aria-label="Previous">
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            keyboard_arrow_left
                        </span></span>
                </a>
            </li>


            <li v-for="(pagina, index) in calcularTotalPaginas" :key="index"
                :class="pagina == paginaActual ? 'active' : ''" class="page-item">
                <a 
                @click="paginar(pagina)" 
                :class="pagina == paginaActual ? 'text-white' : ''"
                class="page-link" href="javascript:;">{{ pagina }}</a>
            </li>



            <li class="page-item">
                <a 
                @click="paginar(paginaActual + 1)" 
                class="page-link" href="javascript:;" aria-label="Next">
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            keyboard_arrow_right
                        </span></span>
                </a>
            </li>
        </ul>
    </div>

</template>
<script setup>

import { ref, defineProps, computed, defineEmits } from 'vue';



const props = defineProps(['paginaActual', 'totalProductos', 'porPagina'])



const calcularTotalPaginas = computed(() => {

    return Math.ceil(props.totalProductos / props.porPagina)
})

const emit = defineEmits(['cambiar-pagina'])


const paginar = (pagina) => {

    if(pagina == props.paginaActual  || pagina < 1){
        return
    }



    emit('cambiar-pagina', pagina)

}







</script>
