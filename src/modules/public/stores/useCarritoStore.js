import { defineStore } from 'pinia';

import { ref } from 'vue';

export const useCarritoStore = defineStore('carrito', () => {

    const carrito = ref(cargarCarrito());


    function cargarCarrito() {

        const carritoLocalStorage = localStorage.getItem('carrito');

        if (!carritoLocalStorage) return [];

        return JSON.parse(carritoLocalStorage);

    }

    function guardarCarrito() {

        const carritoString = JSON.stringify(carrito.value);

        localStorage.setItem('carrito', carritoString);

    }

    function agregarProducto(producto, cantidad = 1) {

        const productoExistente = carrito.value.find(item => item.id === producto.id)


        if (productoExistente) {

            productoExistente.cantidad += cantidad

        } else {

            const nuevoProducto = {
                id: producto.id,
                titulo: producto.titulo,
                precio: producto.precio,
                imagen: producto.imagen,
                stock: producto.stock,
                cantidad: cantidad
            }

            carrito.value.push(nuevoProducto)

        }



        guardarCarrito()

    }

    function eliminarProducto(id){

        const productosFiltrados = carrito.value.filter( item => item.id !== id)

        carrito.value = productosFiltrados;

        guardarCarrito()

    }

    function vaciarCarrito(){

        carrito.value= [];
        localStorage.removeItem('carrito')

    }


    function calcularTotalCarrito() {

        return carrito.value.reduce((total, item) => {
            return total + (item.precio * item.cantidad)
        }, 0)
    }




    return {
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        calcularTotalCarrito,
    }

})


