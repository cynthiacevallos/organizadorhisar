<template>
    <div>
        <h2>AÑADIR TODO</h2>
        <label for="">Titulo</label>
        <input type="text" v-model="form.title">
        <label for="">Descripcion</label>
        <input type="text" v-model="form.description">
        <button class="btn btn-primary" @click="enviar">Add</button>
    </div>
    <p v-for="i in clinicas"></p>

</template>

<script>
import { computed,reactive} from 'vue';
import { storeToRefs } from 'pinia'
import {useTodosStore} from '../stores/todos'
import { useClinicasStore } from '../stores/store';

export default {  

 setup() {
    const store = useTodosStore();

    const clinicas_store = useClinicasStore();
    const  { clinicas }  = storeToRefs(clinicas_store)






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
    }
 }
}
</script>