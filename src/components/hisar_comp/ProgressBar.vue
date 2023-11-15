<template>
    <div style="height: 100%">
        <div class="bar-progress" >
            <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="100" style="padding: 0">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>
            </div>
            <!-- {{ counter }}% -->
            <p class="progress-value">Cargando HISAR {{ counter }} %</p>
        </div>
    </div>
</template>

<style scoped>

/* Barra de Progreso */
.bar-progress {
    width: 70%;
    top: 45%;
    left: 15%;
    position: absolute;
    /* top: 5vw; */
    /* left: ; */
    /* height: 100%; */
    /* margin: 20% auto; */
    text-align: center;
    font-size: 18px;
    color: rgb(0, 122, 201);
}

</style>

<script setup>
defineProps({
    counter: {
        type: Number,
        required: false
    }
})
</script>