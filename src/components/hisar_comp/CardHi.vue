<template>
    <div class="card">
        <div class="imagen"></div>
        <!-- <img src="" alt=""> -->
        <!-- <img src="../../assets/images/archive2.jpg" alt="Imagen de item"> -->
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button class="btn boton">GO</button>
    </div>
</template>
<style scoped>
.carta{
    width: 20%;
}
.boton{
    color: #FFF;
    font-size: 16px;
    background: linear-gradient(200deg,#A1CE57,#C5E394);
    transition: background-color 3s ease;

}
.boton:hover{
    background: linear-gradient(200deg,#C5E394,#A1CE57)
}
.imagen{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../../assets/images/'   );
    width: 200px;
    height: 200px;
    margin: auto;
}
.card{
    width: 20%;
    /* height: 200px; */
    padding: 10px;
}

.card h2{
    text-align: center;
}
</style>
<script setup>
defineProps({
    title: {
        type: String,
        required:false
    },
    description: {
        type: String,
        required:false
    },
    imagen:{
        type: String,
        required:false,
        // defaullt:"url('../../images/')"
    },
})
</script>