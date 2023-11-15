<template>
    <div>
        <h2>ADD</h2>
        <p>{{ getClinicas }}</p>
    </div>
</template>

<script setup>
import {onMounted } from 'vue';

import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {getClinicas} = storeToRefs(clinicas_store)
const {consultarClinicas,clinicaById} = clinicas_store

onMounted(()=>{
    consultarClinicas(),
})

</script>