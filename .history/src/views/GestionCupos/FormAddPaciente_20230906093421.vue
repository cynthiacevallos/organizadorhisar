<template>
    <!--<div class="modales" style="position:fixed;background-color: rgba(255,255,255,0.33);height: 100%;" v-show="show">
        <div style="position:fixed;top:20%;left: 40%;padding: 1%;width:500px;background-color: #FCFCFC;box-shadow: 1px 1px 1px 1px #ccc;border-radius: 10px;">
            <div style="background-color: #F5F5F5;box-shadow: 1px 1px 1px 1px #ccc;">
                <p><strong> TURNO</strong> <span>TURNO 1</span>  </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span>  </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span>  </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span>  </p>
            </div>
            <div style="background-color: #F5F5F5;box-shadow: 1px 1px 1px 1px #ccc;">
                <p><strong> TURNO</strong> <span>TURNO 1</span>  </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span>  </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span>  </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span>  </p>
            </div>
            <div style="width: 50px;margin: 0 auto;">
                <Button @click="cambiar" title="OK" bgColor="#A1CE57" background="#A1CE57" font="#FFF" iconos="circle-check" />
            </div>
        </div>
    </div>-->

    <div class="main">   
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="form">
                <div class="title">
                    <h4>AGREGAR CUPO A PACIENTE</h4>
                </div>
                <div class="form-container">
                    <p>Registre los datos del cupo del paciente</p>
                    <div class="form-input">
                        <label for="sala">SALA</label>
                        <Select ancho="30vw" id="sala" :opciones="salas" />
                    </div>
                    <div class="form-input">
                        <label for="turno">TURNO</label>
                        <Select ancho="30vw" id="turno" :opciones="turnos" />
                    </div>
                    <div class="form-input">
                        <label for="frecuencia">FRECUENCIA</label>
                        <Select ancho="30vw" id="frecuencia" :opciones="frecuencias" />
                    </div>
                    <div class="form-input">
                        <label for="tipoPuesto">TIPO DE PUESTO</label>
                        <Select ancho="30vw" id="tipoPuesto" :opciones="puestos" />
                    </div>
                    <div class="form-input">
                        <label for="dni">DNI</label>
                        <Input ancho="30vw" id="dni"/>
                    </div>
                    <div class="form-input">
                        <label for="paciente">PACIENTE</label> 
                        <input id="paciente" type="text" hidden>
                        <p>PACIENTE NO REGISTRADO</p>
                    </div>
                    <div class="form-botones">
                        <Button @click="inicio" title="CANCELAR" bgColor="#F48F8F" background="#E35C5C" font="#FFF" iconos="fa-ban" />
                        <Button @click="add" title="REGISTRAR" background="#A1CE57" bgColor="#BEE67C" iconos="fa-floppy-disk" font="#FFF" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    width: 100%;
}
.main{
    display: flex;
    /*width: 100%;*/
}
.content{
    display: flex;
    flex-direction: column;
    gap:20px
}
.form{
    margin-left: 20px;
    padding: 5px 20px;
    width: 70vw;
}
.title{
    background-color: rgba(0,122,201,0.44);
    padding: 10px;
}
.form h4{
    color: #000;
}
.form-container {
    background-color:#fcfcfc;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 2px 2px 0px #ccc;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.form-container p{
    font-size: 18px;
}
.form-input{
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}
.form-input p {
    font-size: 17px;
    width: 30vw;
    text-align: center;
}
.form-input label{
    font-size: 17px;
    font-weight: bold;
    width: 15vw;
    /*padding-right: 100px;*/
}
.form-botones{
    display: flex;
    gap:1%;
    flex-wrap: wrap;
}
</style>

<script setup>
    //import {ref} from 'vue'
    import {reactive} from 'vue';
    import {useRouter} from 'vue-router'
    import Sidenav from '../../components/hisar_comp/SidenavH.vue'
    import Header from '../../components/hisar_comp/HeaderH.vue'
    import Input from '../../components/hisar_comp/InputH.vue'
    import Button from '../../components/hisar_comp/ButtonH.vue'
    import Select from '../../components/hisar_comp/InputSelect.vue'

    const user= "USUARIO 1"
    const centro="Centro Nacional de Salud Renal"
    const salas = ["SALA 1","SALA 2","SALA 3","SALA 4"]
    const turnos = ["TURNO 1","TURNO 2","TURNO 3","TURNO 4"]
    const frecuencias = ["LUN-MIE-VIE","MAR-JUE-SAB"]
    const puestos = ["NORMAL","ESPECIAL","ESPECIAL C+","NEGATIVO"]

    const router = useRouter()
    //const show = ref(false)

    /*const cambiar = () => {
        show.value = !show.value
    }*/
   // let clinicas = ref([])

    /*const getClinicas = computed(() => {
        return store.getClinicas;
    })*/

    /*const cclinicas = computed(()=>{
        return store.clinicas
    })*/
    const arreglo = reactive([
        {main: 'Gestion de cupos',sec:[{name:'Inicio',link:'/'},{name:'Asignar Cupo',link:'/gestion/cupos/add'},{name:'Record Asignaciones',link:'/gestion/cupos/asignaciones'},{name:'Lista de espera',link:'/gestion/cupos/listaespera'},{name:'Reporte + Acreditacion',link:'/gestion/cupos/reportes'}], done:false},
        {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:false}
    ])

    const inicio = () => {
        router.push("/")
    }
    const add = () => {
        console.log('add')
    }

</script>