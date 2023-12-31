import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes: [
    ///Principal
    {
      path:'/',
      name:'login',
      component:()=>import('../views/LoginHisar.vue')
    },
    {
      path:'/main',
      name:'main',
      component:()=>import('../views/MainHisar.vue')
    },
    {
      path:'/cupos',
      name:'cupos',
      component:() => import('../views/GestionCupos/CuposH.vue')
    },
    {
      path: '/cupos/add',
      name:'agregar paciente',
      component: () => import('../views/GestionCupos/FormAddPaciente.vue')
    },
    {
      path:'/cupos/asignaciones',
      name:'record asignaciones',
      component: () => import('../views/GestionCupos/RecordAsignaciones.vue')
    },
    {
      path:'/cupos/listaespera',
      name:'lista espera',
      component:() => import('../views/GestionCupos/ListaEsperaH.vue')
    },
    {
      path:'/cupos/reportes',
      name:'reportes cupos',
      component: () => import('../views/GestionCupos/ReportesCupos.vue')
    },
    {
      path:'/seguridad',
      name:'cambiocontraseña',
      component: () => import('../views/Seguridad/CambioContrasena.vue')
    },
    {
      path:'/perfil',
      name:'datospersonales',
      component: () => import('../views/Seguridad/MiPerfilHisar.vue')
    },


    {
      path:'/test',
      name:'test',
      component:()=>import('../views/TestH.vue')
    },
  ]
})

export default router
