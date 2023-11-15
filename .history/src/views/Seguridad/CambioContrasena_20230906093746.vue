<template>
    <div class="main">
        <Sidenav :lista="arreglo" :usuario="user" :centro="centro" />
        <div class="content">
            <Header />
            <div class="content-seguridad">
                <h2>SEGURIDAD</h2>
                <div class="content-seguridad-pass" >
                    <div class="title" >
                        <h5>CAMBIO DE CONTRASEÑA</h5>
                    </div>
                    <div class="form">   
                        <div class="form-input">
                            <label for="pass-actual">Contraseña actual</label>
                            <Input type="password" id="pass-actual" ancho="22vw" placeholder="Ingrese la contraseña actual" /> 
                            <font-awesome-icon @click="changeIcon('pass-actual')" class="icon-eye" :icon="['fas', iconEyeA]" />
                        </div> 
                        <div class="form-input">
                            <label for="pass-nueva">Contraseña nueva</label>
                            <Input type="password" id="pass-nueva" ancho="22vw" placeholder="Ingrese la contraseña nueva" />
                            <font-awesome-icon @click="changeIcon('pass-nueva')" class="icon-eye" :icon="['fas', iconEyeN]" />
                        </div>
                        <div class="form-input">
                            <label for="pass-nueva-conf">Confirme su contraseña</label>
                            <Input type="password" id="pass-nueva-conf" ancho="22vw" placeholder="Confirme la contraseña nueva" />
                            <font-awesome-icon @click="changeIcon('pass-nueva-conf')" class="icon-eye" :icon="['fas', iconEyeNC]" />
                        </div>
                        <Button title="ACTUALIZAR" background="#A1CE57" bgColor="#A1CE57" iconos="pen" font="#fff" />
                    </div>
                </div>
            </div>
        </div>
    </div>            
</template>
        
<style scoped>
* {
    width: 100%;
}
.main {
    display: flex;
}
.content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.content-seguridad {
    padding-left: 20px;
}
.content-seguridad h2 {
    padding-bottom: 20px;
}
.title  {
    background-color: rgba(0,122,201,0.44);
    height: fit-content;
    padding: 7px 0;
    width: 50vw;
    text-align: center;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.25);
}
.title h5{
    font-size: 24px;
    font-weight: bold;
}
.form{
    width: 50vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 50px;
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.25);
}
.form-input label{
    width: 240px;
    font-size: 18px;
}
.icon-eye{
    width: fit-content;
    margin-left: -30px;
    cursor: pointer;
}
.form-input{
    padding-bottom:50px;
    width: 45vw;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>

<script setup>
import { ref,reactive } from 'vue'

import Sidenav from '../../components/hisar_comp/SidenavH.vue'
import Header from '../../components/hisar_comp/HeaderH.vue'
import Input from '../../components/hisar_comp/InputH.vue'
import Button from '../../components/hisar_comp/ButtonH.vue'

const arreglo = reactive([
    {main: 'Gestion de cupos',sec:[{name:'Inicio',link:'/'},{name:'Asignar Cupo',link:'/gestion/cupos/add'},{name:'Record Asignaciones',link:'/gestion/cupos/asignaciones'},{name:'Lista de espera',link:'/gestion/cupos/listaespera'},{name:'Reporte + Acreditacion',link:'/gestion/cupos/reportes'}], done:true},
    {main: 'Seguridad',sec:[{name:'Cambio de contraseña',link:'/seguridad'}],done:false}
])

const user = 'USUARIO 1'
const centro = 'Centro Nacional de Salud Renal'

const iconEyeA = ref('eye-slash')
const iconEyeN = ref('eye-slash')
const iconEyeNC = ref('eye-slash')

const changeIcon = (text) => {
    const inp = document.querySelector(`#${text}`)
    if(text == 'pass-actual'){
        iconEyeA.value == 'eye-slash' ? iconEyeA.value = 'eye' : iconEyeA.value ='eye-slash'
        const type = inp.getAttribute("type") === "password" ? "text" : "password";
        inp.setAttribute("type", type);
    }else if (text=='pass-nueva'){
        iconEyeN.value == 'eye-slash' ? iconEyeN.value = 'eye' : iconEyeN.value ='eye-slash'
        const type = inp.getAttribute("type") === "password" ? "text" : "password";
        inp.setAttribute("type", type);
    }else if (text=='pass-nueva-conf'){
        iconEyeNC.value == 'eye-slash' ? iconEyeNC.value = 'eye' : iconEyeNC.value ='eye-slash'
        const type = inp.getAttribute("type") === "password" ? "text" : "password";
        inp.setAttribute("type", type);
    }
    
  
}
</script>