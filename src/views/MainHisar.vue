<template>
    <div class="menu">
        <HeaderH />
        <!-- <div class="header">
            <img src="../assets/images/cnsr-logo.png" width="" alt="" />
            <div style="line-height: 0">
                <h2 style="padding: 0">HISAR</h2>
                <span>Herramientas informaticas de Salud Renal</span>
            </div>
        </div> -->
        <!-- <div class="menu-items">
            <div class="card" v-for="(i,index) in arreglo" :key="index">
                <img class="imagen" :src=i.imagen alt="" loading="lazy">
                <div class="card-size">
                    <div class="card-datos">
                        <p class="titulo">{{ i.title }}</p>
                        <p class="descripcion"> {{ i.description }} </p>
                        <button class="btn btn-success">IR</button>
                    </div>
                </div>
            </div>         
        </div> -->
        <ProgressBar v-show="progress" :counter="counter" />
        <div style="height: 100%">
            <!-- <div class="bar-progress" v-show="progress">
                <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100" style="padding: 0">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>
                </div>
                <p class="progress-value">Cargando HISAR {{ counter }}%</p>
            </div> -->

            <div class="menu-items" v-show="mostrar">
                <div class="tarjeta" style="width: 300px;" v-for="(i, index) in arreglo" :key="index">
                    <v-chip color="green">ADMISION</v-chip>
                    <div style="height: 400px">
                        <img :src="i.img" alt="" width="280" height="210" style="border-radius: 20px;" />
                        <h3>{{ i.title }}</h3>
                        <p>{{ i.description }}</p>
                    </div>
                    <button class="btn boton" @click="i.func" style="width: 100%">IR </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: sans-serif;
    box-sizing: border-box;
    /* padding: 10px 0; */
}

.header {
    display: flex;
    align-items: center;
    color: rgb(0, 122, 201);
    letter-spacing: 2px;
}

/* Barra de Progreso */
.bar-progress {
    width: 70%;
    height: 100%;
    margin: 20% auto;
    text-align: center;
    font-size: 18px;
    color: rgb(0, 122, 201);
}

.menu-items {
    display: flex;
    width: 90%;
    padding-top: 20px;
    margin: auto;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    align-items: baseline;
}

.boton {
    width: 100%;
    color: #000;
    font-size: 16px;
    background: #d1efee;
    border: none;
}

.boton:hover {
    background-color: rgb(35, 144, 177);
    color: #fff;
    /* border: 1px solid #92A7A6; */
    /* border: 1px solid red; */
    /* background: linear-gradient(200deg, #d1efee, #d1efee); */
}
.tarjeta{
    box-shadow: 1px 1px 1px 1px #ccc;
    border-radius: 10px;
    padding: 10px;    
}
/* .tarjeta{
    transition: all 1s ease;
}
.tarjeta:hover{
    transform: scale(1.1);
} */

.imagen {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: 3px 3px 4px 0 #ccc;
}

.card {
    width: 550px;
    border: 1px solid rgb(0, 122, 201);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.card-size {
    background-color: #d1efee;
    height: 250px;
    border-radius: 10px;
    padding: 10px;
    color: #000;
}

.card-datos {
    width: calc(550px - 250px);
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.titulo {
    font-size: 22px;
    text-transform: uppercase;
}

.descripcion {
    font-style: italic;
}
@media screen and (min-width:1300px){
    .menu-items{
        justify-content: flex-start;
    }
}

</style>

<script setup>
//components
import ProgressBar from '../components/hisar_comp/ProgressBar.vue'
import HeaderH from '../components/hisar_comp/HeaderH.vue'

import { reactive, onMounted, ref } from 'vue'
import cupoIc from '../assets/agendar-citas-online.png'
import bienIc from '../assets/bienes.png'
import incIc from '../assets/incidencia.jpg'
import labIc from '../assets/lab.png'
import fileIc from '../assets/files.avif'
import secIc from '../assets/images.png'
import adIc from '../assets/attendance.jpg'

import { useUsuarioStore } from '../stores/usuario'
// import { useClinicasStore } from '../stores/clinicas'
import router from '../router'

const store = useUsuarioStore()
// const storeCas = useClinicasStore()

var arreglo = reactive([
    {
        title: 'Gestion de cupos',
        description: 'Asignacion de cupos a pacientes en Clinicas Contratadas, Reportes de Acreditacion',
        img: cupoIc,
        perfil:['9','0'],
        func: () => { router.push("/cupos") }
    },
    {
        title: 'Gestion de Admision y Cupos',
        description: 'Asignacion de Asistencia de Pacientes,Reportes de Asistencia',
        img: adIc,
        perfil:['13','0'],
    },
    {
        title: 'Gestion de Bienes estrategicos',
        description: 'Gestion de delegacion de Bienes estrategicos',
        img: bienIc,
        perfil:['5','0'],
    },
    {
        title: 'Gestion de Incidencias',
        description: 'Registro y Control de incidencias',
        img: incIc,
        perfil:['12','0'],
    },
    {
        title: 'Resultados de Laboratorio',
        description: 'Gestion de resultados de laboratorio',
        img: labIc,
        perfil:['12','0'],
    },
    {
        title: 'Gestion de archivos',
        description: 'Gestion de Archivos ',
        img: fileIc,
        perfil:['12','0'],
    },
    {
        title: 'Seguridad',
        description: 'Gestion de datos de seguridad del usuario ',
        img: secIc,
        perfil:['12','0','13','9'],
        func: () => {router.push("/perfil")}
    }
])


var mostrar = ref(false)
var progress = ref(true)
var counter = ref(0)

onMounted( async () => {
    arreglo = arreglo.filter(arr=>arr.perfil.includes(store.user.perfil))
    // await storeCas.getClinicas()
    // console.log(storeCas.clinica)
    // console.log(storeCas.clinica)
    const pb = document.querySelector('.progress-bar')
    setTimeout(() => {
        counter.value += 20
        pb.style.width = '20%'
    }, 200)
    setTimeout(() => {
        counter.value += 30
        pb.style.width = '50%'
    },400)
    setTimeout(() => {
        counter.value += 25
        pb.style.width = '75%'
    }, 600)
    setTimeout(() => {
        pb.style.width = '100%'
        counter.value += 25
    }, 700)
    setTimeout(() => {
        mostrar.value = true
        progress.value = false

    }, 800)
})
</script>
