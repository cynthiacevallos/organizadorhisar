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
const {consultarClinicas} = clinicas_store
import axios from "axios";

// // The base URL for API requests
const API_URL = "/apis";

// Create an instance of axios with the base URL of the API
const api = axios.create({
  baseURL: API_URL
});

onMounted(()=>{
    consultarClinicas()
    console.log(api())
})

</script>