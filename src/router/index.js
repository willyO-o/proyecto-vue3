import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PublicLayout',
      component: () => import('@/views/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'Inicio',
          component: () => import('@/modules/public/views/InicioView.vue')
        },
        {
          path: '/tienda',
          name: 'Tienda',
          component: () => import('@/modules/public/views/TiendaView.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/modules/public/views/LoginView.vue')
        },
        {
          path: '/contacto',
          name: 'Contacto',
          component: () => import('@/modules/public/views/ContactoView.vue')
        },
        {
          path: 'producto/:idProducto',
          name: 'DetalleProducto',
          component: () => import('@/modules/public/views/DetalleProductoView.vue')
        }

      ]
    }
    
  ],
})

export default router
