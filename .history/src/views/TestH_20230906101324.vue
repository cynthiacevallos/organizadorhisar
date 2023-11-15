<template>
    <div>
        <h2>AÑADIR TODO</h2>
        <label for="">Titulo</label>
        <input type="text">
        <label for="">Descripcion</label>
        <input type="text">
        <button class="btn btn-primary">Add</button>
    </div>
    <p >{{ clinicas }}</p>

</template>

<script setup>
import { storeToRefs } from 'pinia'
//import {useTodosStore} from '../stores/todos'
import { useClinicasStore } from '../stores/store';


   // const store = useTodosStore();
    const clinicas_store = useClinicasStore();
    const { clinicas } = storeToRefs(clinicas_store)




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