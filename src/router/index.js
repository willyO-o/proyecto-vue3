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
        },
        {
          path:'/carrito',
          name: 'DetalleCarrito',
          component: () => import('@/modules/public/views/DetalleCarritoView.vue')
        }

      ]
    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: () => import('@/views/AdminLayout.vue'), 
      children: [
        {
          path: '',
          name: 'Panel',
          component: () => import('@/modules/admin/views/PanelView.vue')
        }
        ,
        {
          path: 'productos',
          name: 'Productos',
          component: () => import('@/modules/admin/views/ProductoView.vue')

        }, 
        {
          path : 'categorias',
          name: 'Categorias',
          component: () => import('@/modules/admin/views/CategoriaView.vue')
        },
        {
          path: 'usuarios',
          name: 'Usuarios',
          component: () => import('@/modules/admin/views/UsuarioView.vue')
        },
        {
          path:'productos/crear',
          name: 'ProductosCrear',
          component: () => import('@/modules/admin/views/ProductoCrearView.vue')
        },
        {
          path:'productos/editar/:idProducto',
          name: 'ProductosEditar',
          component: () => import('@/modules/admin/views/ProductoCrearView.vue')
        },
      ]
    }
    
  ],
})

export default router
