<template>
    <div>
        <h2>ADD</h2>

        <p>{{ getClinicas }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {getClinicas} = storeToRefs(clinicas_store)
const {clin} = clinicas_store

const nom = () => {
    console.log(getClinicas)
    console.log(clin)
}
onMounted()
clin()
nom()

</script>