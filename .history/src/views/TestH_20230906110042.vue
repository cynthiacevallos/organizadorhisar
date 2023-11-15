<template>
    <div>
        <h2>ADD</h2>
        <button @click="increment" > incrementar</button>
        <p>Incrementar {{ getCount }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useClinicasStore } from '../stores/clinicas.js';

    const clinicas_store = useClinicasStore();
    const { getCount } = storeToRefs(clinicas_store)
    const {increment} = clinicas_store

/*
    const showCreateForm = () => {
        store.$patch({
            showForm:true,
            id:null
        })
    }
    const updateId = computed(() => store.$state.id)

    const showUpdateForm = (id) => {
      store.$patch({
        showForm: true,
        id
      });
    }
    const todos = computed(() => store.todos);
    const form = reactive({title:'',description:''})
    const enviar = () => {
        store.create(form.title,form.description)
        store.$patch({showForm:false})
    }
    const total = store.count
    
    const { listaClinicas } = useClinicasStore()
    
    
    return {
        listaClinicas,
        clinicas,
        form,
        updateId,
        todos,
        total,
        enviar,
        showCreateForm,
        showUpdateForm
    }*/


</script>