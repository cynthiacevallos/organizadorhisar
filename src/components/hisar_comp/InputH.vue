<template>
    <input class="input"  :id="id" :placeholder="placeholder"> 
</template>

<style scoped>
    .input{
        /*background-color: rgba(229,229,229,0.44);*/
        background-color: #FFF;
        border:1px solid #ccc;
        padding: 7px;
        /*border-radius: 20px;*/
        transition: box-shadow 0.3s ease;
        width: v-bind(ancho);
    }
    .input::placeholder{
        color: #CCC;
    }
    .input:focus{
        outline: none;
        border: 2px solid #007AC9;
        /*box-shadow: 0 0 0 2px #007AC9;*/
    }
</style>

<script setup>
    defineProps({
        ancho:{
            type:String,
            require:true
        },
        id:{
            type:String,
            require:true
        },
        placeholder:{
            type:String,
            require:true,
        }
    })

</script>