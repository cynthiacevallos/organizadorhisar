<template>
    <div>
        <!-- <HeaderH /> -->
        <div class="modal-container" v-show="showModal">
            <Modal titulo="Cupos disponibles" :cerrar="mostrarModal"></Modal>
        </div>
        <!-- <Header /> -->
        <div class="main">
            <div class="progress-container" v-show="progress">
                <div class="progress-data">
                    <ProgressBar :counter="counter" />
                </div>
            </div>
            <Sidenav :lista="arreglo" />
            <div>
                <Header />
                <div class="content">
                    <div class="content-cupos">
                        <h2 class="">Asignacion de cupo</h2>
                        <div class="content-cupos-busqueda">
                            <v-autocomplete class="autocomplete" v-model="valor" :items="clinicas" item-value="url"
                                label="Seleccione una Clinica" item-title="descripCas" variant="outlined" color="#007AC9"
                                bg-color="white"></v-autocomplete>
                            <!-- <Select id="clinica" :opciones="clinicas" ancho="35vw" /> -->
                            <Button style="height: 57px;" background="#A1CE57" bgColor="#A1CE57" @click="verificar"
                                iconos="magnifying-glass" font="#FFF" />
                        </div>
                    </div>

                    <div class="resultados-busqueda" v-show="showBotones">
                        <div class="btns-busqueda">
                            <Button @click="goAddPaciente" title="AGREGAR PACIENTE" background="#00A79C" bgColor="#00A79C"
                                iconos="plus" font="#FFF" />
                            <Button @click="mostrarModal" title="CUPOS DISPONIBLES" background="rgba(59,153,213,0.55)"
                                bgColor="rgba(59,153,213,0.55)" iconos="circle-check" font="#FFF" />
                        </div>
                        <div style="border-radius: 10px;">

                            <table class="table table-light table-hover">
                                <!-- <caption>List of users</caption> -->
                                <thead>
                                    <tr>
                                        <td>Clinica</td>
                                        <td>Cupos Totales</td>
                                        <td>Cupos Ocupados</td>
                                        <td>Cupos Disponibles</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="i in datos" :key="i.id">
                                        <td>{{ i.clinica }}</td>
                                        <td>{{ i.cuposTotales }}</td>
                                        <td>{{ i.cuposOcupados }}</td>

                                        <td>{{ i.cuposDisponibles }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- <v-data-table :items="items" :items-per-page="5" class="elevation-1"></v-data-table> -->
                        <!-- <TablaH :header="headers" :data="datos" /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/** */
thead td {
    color: var(--honolulu-blue);
    font-weight: bold;
    text-transform: uppercase;
    /* text-align: center; */
}

table td {
    font-size: 18px;
}

* {
    width: 100%;
    --honolulu-blue: #0B7AC6ff;
    --alice-blue: #EBF2FAff;
    --apple-green: #A4BD2Bff;
    --antiflash-white: #EFEFEFff;
    --white: #FFFFFFff;
}

.progress-container {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.33);
    height: 100%;
    width: 100%;
}

.progress-data {
    top: 40%;
    left: 5%
}

.main {
    display: flex;
    /*width: 100%;*/
}

.content {
    /* background-color: #f5f5f5; */
    padding-top: 50px;
    /* height: 100%; */
    /* height: calc(100% - 55px); */
    /* background-color: var(--antiflash-white); */
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: 20px
}

.content-cupos {
    padding-left: 20px;
    width: 70%;
    /* width: fit-content; */
}

.content-cupos h2 {
    font-weight: 600;
}

.v-autocomplete {
    margin: O;
    padding: 0;
    height: fit-content;
}

.content-cupos-busqueda {
    /* background-color: #FFF; */
    /* padding: 30px; */
    /* border-radius: 10px; */
    /* margin-top: 10px; */
    display: flex;
    box-shadow: 1px 1px 1px 1px #ccc;
    /* background-color: aliceblue; */
    padding: 30px;
    border-radius: 10px;
    /* box-shadow: 1px 1px 1px 1px #f5f5f5; */
    /* background-color: var(--alice-blue); */
    /* align-items: center; */
    /* height: fit-content; */
    /* height: 50px; */
    /* align-items: center; */
    /* gap: 10px; */
}

.content-cupos-busqueda label {
    font-weight: normal;
    height: 60px;
    font-size: 22px;
    padding-right: 50px;
    width: fit-content;
}

.resultados-busqueda {
    padding: 30px 20px;
    width: 70%;
}

.btns-busqueda {
    margin-bottom: 20px;
    display: flex;
    width: 70%;
    gap: 5px;
}

.modal-container {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.33);
    height: 100%;
}
</style>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

//components
import ProgressBar from '../../components/hisar_comp/ProgressBar.vue'
import Sidenav from '../../components/hisar_comp/SidenavH.vue'
import Header from '../../components/hisar_comp/HeaderH.vue'
import Button from '../../components/hisar_comp/ButtonH.vue'
import Modal from '../../components/hisar_comp/ModalH.vue'
// import TablaH from '../../components/hisar_comp/TablaHi.vue'

//stores
import { useClinicasStore } from '../../stores/clinicas.js'
import { usePacientesStore } from '../../stores/pacientes.js'
//stores declarations
const storeCas = useClinicasStore();
const storePac = usePacientesStore()

//router declaration
const router = useRouter()
//router functions
const goAddPaciente = () => {
    router.push({ path: '/gestion/cupos/add' })
}

const progress = ref(true)
const showModal = ref(false)
var counter = ref(0)
const valor = ref()
const showBotones = ref(false)
const clinicas = ref(["Sin datos "])

const arreglo = reactive([
    {
        main: 'Gestion de cupos', sec: [
            { name: 'Inicio', link: '/main', icon: 'house' },
            { name: 'Asignar Cupo', link: '/cupos', icon: 'pen-to-square' },
            { name: 'Record Asignaciones', link: '/cupos/asignaciones', icon: 'clipboard' },
            { name: 'Lista de espera', link: '/cupos/listaespera', icon: 'list-ol' },
            { name: 'Reporte + Acreditacion', link: '/cupos/reportes', icon: 'table' }
        ], done: true
    },
    // { main: 'Seguridad', sec: [{ name: 'Cambio de contraseña', link: '/seguridad' }], done: false }
])

const datos = ref([
    {
        clinica: valor.value,
        cuposTotales: 0,
        cuposOcupados: 0,
        cuposDisponibles: 0,
    }
])

const mostrarModal = () => {
    showModal.value = !showModal.value
}

const verificar = async () => {

    progress.value = true
    const pb = document.querySelector('.progress-bar')
    pb.style.width = '50%'
    counter.value = 50

    // }, 1000)


    if (valor.value) {
        showBotones.value = false
        await storeCas.getCLinicaById(valor.value.split("/")[4])
        await storeCas.getCapacidadClinicaById(valor.value.split("/")[4])
        await storeCas.getCapacidadOcupadaClinicaById(valor.value.split("/")[4])
        // setTimeout(() => {
        datos.value[0].clinica = storeCas.clinica.nombre
        datos.value[0].cuposTotales = storeCas.cupos
        datos.value[0].cuposOcupados = storeCas.ocupados
        datos.value[0].cuposDisponibles = datos.value[0].cuposTotales - datos.value[0].cuposOcupados
        counter.value = 100
        progress.value = false
        showBotones.value = true

        pb.style.width = '100%'
    } else {
        datos.value[0].clinica = "Sin datos"
        datos.value[0].cuposTotales = "Sin datos"
        datos.value[0].cuposOcupados = "Sin datos"
        datos.value[0].cuposDisponibles = "Sin datos"
    }

}

onMounted(async () => {
    const pb = document.querySelector('.progress-bar')

    counter.value = 50
    pb.style.width = '50%'
    await storeCas.getClinicas()
    await storePac.getPacienteByDni("46184379")

    // console.log(storePac.paciente[0].nombres)
    clinicas.value = storeCas.clinicas


    if (storePac.loading == false) {
        counter.value = 100
        pb.style.width = '100%'
        setTimeout(() => {
            progress.value = false
        }, 1000)
    }

})
</script>