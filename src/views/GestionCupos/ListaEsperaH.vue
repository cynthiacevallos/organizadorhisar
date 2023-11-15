<template>
    <!--MENSAJE-->
    <div class="modal-cont" v-show="showModalMsg">
        <ModalMsg titulo="Mensaje" mensaje="¿Esta seguro de eliminar esta solicitud?" :cerrar="mostrarModalMsg"  />
    </div>

    <div class="modal-container" v-show="showModal">
        <div class="modal-content">
            <h4>EDITAR SOLICITUD</h4>
            <div style="display: flex;">
                <div>
                    <label for="dni">DNI</label>
                    <Input id="dni" placeholder="Ingrese DNI" ancho="250px" />
                </div>
                <div>
                    <label for="paciente">Paciente</label>
                    <Input id="paciente" ancho="400px" disabled/>
                </div>
            </div>
            <div>
                <label for="origen">IPRESS de origen</label>
                <Input id="origen" placeholder="Ingrese clinica de origen" ancho="660px"/>
            </div>
            <div>
                <label for="destino">IPRESS de Destino</label>
                <Input id="destino" placeholder="Ingrese clinica de destino" ancho="660px"/>
            </div>
            <div style="display: flex;">
                <div>
                    <label for="telefono1">Telefono 1</label>
                    <Input id="telefono1" placeholder="Ingrese telefono 1" ancho="320px" />
                </div>
                <div>
                    <label for="telefono2">Telefono 2</label>
                    <Input id="telefono2" placeholder="Ingrese telefono 2" ancho="325px"/>
                </div>
            </div>
            <div style="display: flex;">
                <div>
                    <label for="distrito">Distrito</label>
                    <Input id="distrito" placeholder="Ingrese distrito" ancho="210px" />
                </div>
                <div>
                    <label for="turno">Turno</label>
                    <Select id="turno" ancho="210px" :opciones ="['TURNO 1','TURNO 2','TURNO 3','TURNO 4']" />
                </div>
                <div>
                    <label for="referencia">Referencia</label>
                    <Select id="referencia" ancho="210px" :opciones="['ADMISION']" />
                </div>
            </div>
            <div>
                <label for="observaciones">Observaciones</label>
                <textarea id="observaciones" name="observaciones" rows="3"></textarea>
            </div>
            <div style="display: flex;gap:5px;justify-content: flex-end;">
                <Boton @click="mostrarModal" title="CANCELAR" background="#E35C5C" bgColor="#E35C5C" iconos="fa-ban" font="#FFF" />
                <Boton  title="ACTUALIZAR" background="#A1CE57" bgColor="#A1CE57" iconos="fa-ban" font="#FFF" />
            </div>
        </div>
    </div>

    <div class="main">
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="content-cupos">
                <h2>LISTA DE ESPERA</h2>
                <div class="content-paciente-datos">
                    <label for="dnip">DNI de paciente</label>
                    <Input id="dnip" ancho="30vw" />
                    <Boton title="BUSCAR" background="#A1CE57" bgColor="#A1CE57" iconos="magnifying-glass" font="#000" />
                </div>
                <div class="content-botones">
                    <Boton title="AGREGAR PACIENTE" background="#00A79C" iconos="plus" font="#FFF" bgColor="#00A79C" />
                    <Boton title="GENERAR EXCEL" background="#008000" iconos="file-excel" font="#FFF" bgColor="#008000" />
                </div>
                <!--TABLA-->
                <div>
                    <ul class="list" @click="obtenerClase" >
                        <li class="list-element active">PENDIENTES </li>
                        <li class="list-element">ATENDIDOS</li>
                    </ul>
                    <div class="content-tabla">
                        <table class="tabla">
                            <tr>
                                <td>FECHA DE SOLICITUD</td>
                                <td>PACIENTE</td>
                                <td>TELEFONOS</td>
                                <td>ORIGEN</td>
                                <td>DESTINO</td>
                                <td>OBSERVACIONES</td>
                                <td>ACCIONES</td>
                            </tr>
                            <tr>
                                <td>01/09/2023</td>
                                <td>Paciente 1</td>
                                <td>777777 / 8888888</td>
                                <td>RENEXA</td>
                                <td>MAGDIAL</td>
                                <td>Problemas con la clinica</td>
                                <td>
                                    <div class="btns-opciones">
                                        <button class="boton-op" @click="mostrarModal"><img src="../../assets/images/pencil.png" width="30" height="30"></button>
                                        <button class="boton-op" @click="mostrarModalMsg"> <img src="../../assets/images/trash.png" width="30" height="30"> </button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!--FIN TABLA-->
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    width: 100%;
}
textarea{
    border: 1px solid #ccc;
    transition: box-shadow 0.3s ease;

}
textarea:focus{
    outline: 2px solid #007AC9;
}
.main {
    display: flex;
    /*width: 100%;*/
}
.content {
    display: flex;
    flex-direction: column;
    gap: 20px
}
.content-cupos {
    padding-left: 20px;
    width: fit-content;
}
.content-paciente-datos {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.btn-list-element{
    background-color: transparent;
    border: none;
    color:#000;
}
.btn-list-element.active{
    color: #fff;
}
.content-paciente-datos label {
    font-weight: normal;
    font-size: 18px;
    padding-right: 50px;
    width: fit-content;
}
.content-botones {
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 30px;
    gap: 5px;
}
.list{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin-top: 10px;
    margin-bottom: 0;
}
.list-element {
    color:#000;
    width:fit-content;
    text-align:center;
    padding: 17px;
    font-size: 17px;
}
.list-element:hover{
    cursor: pointer;
}
.list-element.active{
    background-color: #007AC9;
    color: #fff;
}
.tabla {
    box-shadow: 1px 1px 1px #ccc;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    table-layout:fixed;
    width: 60vw;    
}
.tabla tr:first-child td{
    font-size: 18px;
    font-weight: bold;
    padding: 12px 10px; 
    overflow: auto;
    flex: 1 1 auto;
    height: fit-content;
    width: fit-content;
}
.tabla tr:first-child{
    border-bottom: 1px solid #ccc;
    table-layout: fixed;    
}

td {    
    padding: 1%;
    width: fit-content;
    text-align: center;
}
.icono{
    border: 1px solid #ccc;
    width: fit-content;
    padding: 7%;
    background-color: #f4f4f4;
    border-radius: 10px;
}
.icono:hover{
    cursor: pointer;
    color: greenyellow;
}
.btns-opciones{
    display: flex;justify-content: center;align-items: center;gap:10px
}
.btns-opciones img{
    width: fit-content
}
.btns-opciones img:hover{
    opacity: 0.6;
    cursor: pointer;
}
.modal-container, .modal-cont{
    position:fixed;
    background-color: rgba(255,255,255,0.33);
    height: 100%;
}
.boton-op{
    border: none;
    background-color: transparent;
}
.modal-content {
    position: fixed;
    top: 10%;
    left: 35%;
    padding: 1%;
    width: 700px;
    background-color: #FCFCFC;
    box-shadow: 1px 1px 3px 3px #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.modal-content h4{
    text-align: center;
    color: #007AC9;
    font-weight: bold;
}
</style>

<script setup>
import { ref,reactive } from 'vue'

import Sidenav from '../../components/hisar_comp/SidenavH.vue'
import Header from '../../components/hisar_comp/HeaderH.vue'
import Input from '../../components/hisar_comp/InputH.vue'
import Boton from '../../components/hisar_comp/ButtonH.vue'
import Select from '../../components/hisar_comp/InputSelect.vue'
import ModalMsg from '../../components/hisar_comp/ModalMsg.vue'

const arreglo = reactive([
    {main: 'Gestion de cupos',sec:[{name:'Inicio',link:'/'},{name:'Asignar Cupo',link:'/gestion/cupos/add'},{name:'Record Asignaciones',link:'/gestion/cupos/asignaciones'},{name:'Lista de espera',link:'/gestion/cupos/listaespera'},{name:'Reporte + Acreditacion',link:'/gestion/cupos/reportes'}], done:true},
    {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:true}
])

const user = "USUARIO 1"
const centro = "Centro Nacional de Salud Renal"
const showModal = ref(false)
const showModalMsg = ref(false)

const mostrarModal = () =>{
    showModal.value = !showModal.value
}

const mostrarModalMsg = () => {
    showModalMsg.value = !showModalMsg.value
}

const obtenerClase = (e) => {
    for (const li of document.querySelectorAll("li.active")){
        li.classList.remove("active")
    }
    e.target.classList.add("active")
}

</script>