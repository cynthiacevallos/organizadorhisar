<template>
    <div class="modal-content">
        <h2>{{ titulo }}</h2>
        <div class="modal-scroll">
            <div class="modal-content-box">
                <p><strong> TURNO</strong> <span>TURNO 1</span> </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span> </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span> </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span> </p>
            </div>
            <div class="modal-content-box">
                <p><strong> TURNO</strong> <span>TURNO 1</span> </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span> </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span> </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span> </p>
            </div>
            <div class="modal-content-box">
                <p><strong> TURNO</strong> <span>TURNO 1</span> </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span> </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span> </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span> </p>
            </div>
            <div class="modal-content-box">
                <p><strong> TURNO</strong> <span>TURNO 1</span> </p>
                <p> <strong>FRECUENCIA </strong><span>LUN-MIE-VIE</span> </p>
                <p> <strong>TIPO DE PUESTO</strong> <span>NORMAL</span> </p>
                <p><strong> CANTIDAD DE CUPOS</strong> <span>30</span> </p>
            </div>
        </div>
        <div class="modal-content-btn">
            <Button @click="cerrar" title="OK" bgColor="#A1CE57" background="#A1CE57" font="#FFF"
                iconos="circle-check" />
        </div>
    </div>
</template>

<style scoped> 
.modal {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.33);
    height: 100%;
}
.modal-content {
    position: fixed;
    top: 20%;
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
.modal-content h2{
    text-align: center;
}
.modal-scroll{
    height: 400px;
    overflow-x: hidden;
}
.modal-content-box {
    text-indent: 40px;
    background-color: #F5F5F5;
    border-radius: 20px;
    width: 98%;
    box-shadow: 1px 1px 1px 1px #ccc;
}
.modal-content-btn {
    width: 50px;
    margin: 0 auto;
}
.modal-content-box p {
    padding: 2px;
    font-size: 16px;
}
</style>

<script setup>
import Button from './ButtonH.vue'

defineProps({
    titulo: {
        type: String,
        require: false,
        default: "Cupos Disponibles"
    },
    datos:{
        type: Array,
        require:false,
    },
    cerrar: {
        type: Function,
        require: false
    }
})
</script>