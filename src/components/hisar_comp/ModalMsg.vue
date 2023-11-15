<template>
    <div class="contenido">
        <div class="modal-text">
            <font-awesome-icon :icon="['fas', 'circle-xmark']" style="color: #d3363e;" size="2xl" />
            <h2>{{ titulo }}</h2>
            <p>{{ mensaje }}</p>
        </div>
        <div class="modal-botons">
            <Button title="CANCELAR" @click="cerrar" bgColor="#E35C5C" background="#E35C5C" font="#FFF"  iconos="fa-ban" /> 
            <Button title="SI" bgColor="#A1CE57" background="#A1CE57" font="#FFF" iconos="circle-check" />
        </div>
    </div>
</template>

<style scoped>
.contenido{
    position:fixed;
    top: 32%;
    left: 40%;
    padding: 1%;
    width:500px;
    background-color: #F5F5F5;
    box-shadow: 1px 1px 1px 1px #ccc;
    border-radius: 10px;
}
.modal-text{
    text-align: center;
    line-height: 60px;
}
.modal-text p{
    font-size: 20px;
}
.modal-botons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
}
</style>

<script setup>
    import Button from '../hisar_comp/ButtonH.vue'

    defineProps({
        titulo:{
            type:String,
            require:true,
            default:"Mensaje"
        },
        mensaje:{
            type:String,
            require:true,
            default:"¿Esta seguro de registrar los datos?"
        },
        cerrar: {
            type: Function,
            require: false
        }
    })
    


</script>
