<template>
    <div>
        <h2>ADD</h2>
        <p>{{ getClinicas }}</p>
    </div>
</template>

<script setup>
import {onMounted, isProxy, toRaw } from 'vue';

import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {getClinicas} = storeToRefs(clinicas_store)
const {clin} = clinicas_store

const nom = () => {
   console.log(JSON.parse(getClinicas))
}
onMounted(()=>{
    clin()
})
nom()

</script>