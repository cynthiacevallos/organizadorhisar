<template>
    <div>
        <h2>ADD</h2>
        <p>{{ clin }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {clin,getClinicas} = storeToRefs(clinicas_store)

</script>