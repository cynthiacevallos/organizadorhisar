<template>
    <div>
        <h2>ADD</h2>
        <p>{{ getClinicas }}</p>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

const clinicas_store = useClinicasStore();
const {getClinicas} = storeToRefs(clinicas_store)
const {clin} = clinicas_store

const nom = () => {
    console.log(getClinicas.value[0].descripCas)
}
onMounted(()=>{
    clin()

})
nom()

</script>