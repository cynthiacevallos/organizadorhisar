<template>
    <button class="boton" >
        <font-awesome-icon :icon="['fas', iconos]" size="lg" />
        <span class="title">{{ title }}</span>
    </button>

</template>

<style scoped>
    .boton{
        border: 1px solid v-bind(bgColor);
        background-color: v-bind(background);
        padding: 5px 12px;
        border-radius: 10px;
        color:white;
        font-size: 17px;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
        gap:10px;
        width: fit-content;
        color: v-bind(font);
    }
    .boton:hover{
        cursor: pointer;
        background-color: v-bind(bgColor);
        border:2px solid v-bind(bgColor);
        color:#FFF;
    }
    .title{
        font-weight: 400;
    }
</style>

<script setup>
    defineProps({
        title: {
            type: String,
            required:false
        },
        bgHover:{
            type:String,
            require:false
        },
        bgColor:{
            type:String,
            required:true,
        },
        background:{
            type:String,
            required:true,
            default:"#FFF"
        },
        iconos:{
            type: String,
            required:true
        },
        font:{
            type:String,
            required:true
        }
    })
</script>