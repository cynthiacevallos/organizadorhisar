<template>
    <div>

        
        <!--<h2>ADD</h2>
        p>{{ getClinicas }}</p>
        <p>fafsafassa</p>
        <p>{{ n }}</p>
        <div>
            <h3>Mensaje enviado</h3>
            <p>Se ha enviado la solicitud N°1111343434534 con los siguientes datos:</p>

            <div style="display: flex;align-items:center;gap:10px">
                <img src="../assets/images/archive2.jpg" alt="">
                <div>
                    <span>PACIENTE: ABAD MERINO JUANA ESTHER</span><br>
                    <span>FRECUENCIA: M-J-S</span><br>
                    <span>TURNO: TURNO 1</span>
                </div>

            </div>
        </div>-->
   
        <input name="imagenn" type="file" @change="leerarchivo">
    </div>
    <br>
    <button @click="enviar">ENVIAR</button>

</template>
<style>
.mensaje{
    font-family: Tahoma, Verdana, Geneva,  sans-serif;
}
svg {
    fill: #007AC9;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    box-sizing: border-box;
}
.datos-msg{
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap:1%;
}
.parrafo{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 18px;
    border-top-color: #007AC9;
    border-top-width: 10px;
    border-top-style: solid;
    font-weight: bold;
}

</style>
<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';

//import { storeToRefs } from 'pinia'
//import { useClinicasStore } from '../stores/clinicas.js';

//const clinicas_store = useClinicasStore();
//const {getClinicas} = storeToRefs(clinicas_store)
//const {consultarClinicas,clinicaById} = clinicas_store
//const n = clinicaById(6)
//const frecuencia = "M-J-S";
//const fileBase64 = ref('')
//const paciente = "ABAD MERINO JUANA ESTHER"
//const turno = "TURNO 1"
//const motivo = "CAMBIO DE TURNO"

const file = ref('')
const blob = ref('')
//console.log(file.value)
/*const randomNumber = () => {
    var val = Math.floor(100000 + Math.random() * 900000);
    return val
}*/
const leerarchivo = (e) => {
    //console.log(e.target.files[0])
    file.value = e.target.files[0]
    console.log(file.value)
    blob.value = new Blob([file.value],{type: 'application/pdf'})
    console.log(blob.value)
    // console.log(window.location.pathname)
    // this.file = e.target.files[0]
            // console.log(this.file)
    // const reader = new FileReader()
    // reader.readAsDataURL(file.value);
    // reader.onloadend = () => {
    //     fileBase64.value = reader.result
    //         .replace('data:', '')
    //         .replace(/^.+,/, '');
    //     //console.log(file.value)
    // }
}

const enviar = () => {
    console.log('holasss')
    var InstFormData = new FormData();
    InstFormData.append('subject','hola')
    InstFormData.append('message','prueba')
    InstFormData.append('imagen',file.value)

    let datos = {
        "subject":"HOLA",
        "message":"hola prueba",
        "imagen":blob.value
        // 'asunto': 'HISAR - Mensaje de confirmación',
        //'destinatario':'cynthiacevallos1@gmail.com',
        //'destinatario':'kevinariassistemas@gmail.com',
        //'destinatario':'cynthia.cevallos@unmsm.edu.pe',
        // 'destinatario':'practicantesi.cnsr@essalud.gob.pe',
        // 'mensaje': 'prueba',
        // 'adjunto':file,
        // 'html':`<div style="width:700px;margin: 0 auto;">
        //             <div style="width:700px;">
        //                 <img src="https://inhouse.academicovitem.com/assets/img/logos/essalud-renal.png" width="200" >
        //             </div>
        //             <div >
        //                 <h1 style="color:#007AC9;text-transform:uppercase;font-weight:600;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;text-align:center;">Mensaje de confirmacion</h1>
        //             </div>
        //             <p style="text-align:center;font-size:15px;;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Se ha registrado en <strong style="color:#766AE0">HISAR</strong> la solicitud <strong style="color:#766AE0">N°${randomNumber()}</strong> con exito. Los datos enviados son:</p>
        //             <div style="width:fit-content;margin:0 auto;margin-bottom:5px;border-radius:7px;padding:10px;background-color:#E3DDFB;">  
        //                 <h3 style="text-align:center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">PACIENTE: ${paciente}</h3>
                        
        //                 <p style="text-align:center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;color:#000">TURNO: ${turno}</p>
        //                 <p style="text-align:center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;color:#000">FRECUENCIA: ${frecuencia}</p>
        //                 <p style="text-align:center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;color:#000">MOTIVO: ${motivo}</p>
        //             </div>
        //             <div style="width:500px;margin:0 auto">
        //                 <img src="https://blog.vantagecircle.com/content/images/2021/07/Basics-Of-Employee-Engagement-Surveys.png" width="500">
        //             </div>
        //             <div style="background-color:#007AC9;color:#FFF;padding-top:2px">
        //                 <p style="text-align:center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;font-size:14px"> <strong>¿Dudas?</strong> Comunicate con nosotros</p>
        //                 <div style="padding-bottom:2px;display:flex;flex-direction:column;gap:10px;box-sizing: border-box;">
        //                     <div style="display:flex;margin-left:auto;margin-right:auto;">
        //                         <a href="tel:014719999" style="text-decoration:none;padding-left:10px;font-size:15px"><img src="https://static.vecteezy.com/system/resources/previews/014/441/078/original/phone-call-icon-design-in-blue-circle-png.png" width="18" height="18"> </a><span> 471 9999 (Anexo: 1401)</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        // `
    }
    console.log(datos)
    console.log("data",InstFormData)
    /*let datos = {
        'asunto': 'prueba',
        'destinatario': 'practicantesi.cnsr@essalud.gob.pe',
        'mensaje': 'prueba',
        'html': ` <div class="pre"><strong>Title,</strong>&nbsp;</div>
            <div class="pre">&nbsp;</div>
            <blockquote>
                <div class="pre">Message part</div>
            </blockquote>
            <div class="pre">&nbsp;</div>
            <div class="pre"><span style="background-color: #800080;">Thanks</span>,<br /> <br />

            </div>
        </div>`,
    }*/
    axios.post("http://10.0.54.105:90/" + "apis/api/token/", {
        username: "cnsr",
        password: "123456",
    }).then((response) => {
        let result = response.data.access
        //console.log(result)
        axios.post("http://10.0.54.105:90/" + "apis/send-email/", InstFormData, {

        // axios.post("http://10.0.54.105:90/" + "apis/enviar-correo-adj/", datos, {
            headers: { Authorization: "Bearer " + result, 'Content-Type': 'multipart/form-data' },

        }).then((res) => {
            console.log(res.data)
        })
    })

}
onMounted(() => {
    //consultarClinicas()
    //enviar()

})

</script>