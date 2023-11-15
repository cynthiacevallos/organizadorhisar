import { createRouter, createWebHistory } from 'vue-router'
//import Test from '../views/TestH.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'cupos',
      component:() => import('../views/GestionCupos/CuposH.vue')
    },
    {
      path: '/gestion/cupos/add',
      name:'agregar paciente',
      component: () => import('../views/GestionCupos/FormAddPaciente.vue')
    },
    {
      path:'/gestion/cupos/asignaciones',
      name:'record asignaciones',
      component: () => import('../views/GestionCupos/RecordAsignaciones.vue')
    },
    {
      path:'/gestion/cupos/listaespera',
      name:'lista espera',
      component:() => import('../views/GestionCupos/ListaEsperaH.vue')
    },
    {
      path:'/gestion/cupos/reportes',
      name:'reportes cupos',
      component: () => import('../views/GestionCupos/ReportesCupos.vue')
    },
    {
      path:'/seguridad',
      name:'cambiocontraseña',
      component: () => import('../views/Seguridad/CambioContrasena.vue')
    },
    {
      path:'/test',
      name:'test',
      component:()=>import('../views/TestH.vue')
    },
  ]
})

export default router
