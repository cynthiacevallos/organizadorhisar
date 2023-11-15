<template>
    <div>
        <h2>ADD</h2>
        <p>{{ getClinicas }}</p>
        <p>fafsafassa</p>
        <p>{{ n }}</p>
    </div>
</template>

<script setup>
import {onMounted,ref } from 'vue';

import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {getClinicas,clinicaById} = storeToRefs(clinicas_store)
const {consultarClinicas} = clinicas_store
const n = clinicaById(6)
onMounted(()=>{
    consultarClinicas()
})

</script>