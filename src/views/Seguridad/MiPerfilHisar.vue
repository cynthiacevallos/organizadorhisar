<template>
    <div>
        <HeaderH />
        <div class="container">
            <!-- {{ useStore }} -->
            <p>Datos Personales</p>
            <div class="form">
                <div class="form-img">
                    <img src="../../assets/images/avatar.jpg" width="120" alt="" />
                </div>
                <div class="form-data">
                    <v-text-field color="#00A79C" label="DNI / CEXT" variant="outlined" v-model="dni"></v-text-field>
                    <v-text-field color="#00A79C" label="Nombres y Apellidos" variant="outlined"
                        v-model="nombres"></v-text-field>
                    <!-- <v-text-field color="#00A79C" label="Apellidos" variant="outlined" v-model="apellidos"></v-text-field> -->
                    <v-text-field color="#00A79C" label="Correo" suffix="@gmail.com" variant="outlined"></v-text-field>
                    <v-text-field color="#00A79C" label="Clinica" variant="outlined" v-model="cas"></v-text-field>
                </div>
            </div>
            <p>Contraseña</p>
            <v-text-field color="#00A79C" type="password" label="Contraseña" variant="outlined"
                v-model="passw"></v-text-field>
            <div>
                <button class="btn btn-secondary">VOLVER A INICIO</button> <button class="btn btn-success">ACTUALIZAR
                CONTRASEÑA</button>
            </div>

        </div>

    </div>
</template>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    padding-top: 20px;
    width: 100%;
}

.container p {
    font-size: 24px;
    color: #00A79C;
}

.form {
    display: flex;
    gap: 2%;
    justify-content: center;
}

.form-img {
    width: 120px;
}

.form-data {
    width: calc(100% - 120px);
}
</style>

<script setup>
//components
import HeaderH from '../../components/hisar_comp/HeaderH.vue'
//imports
import { onMounted, ref } from 'vue'
import { useUsuarioStore } from '../../stores/usuario';

const store = useUsuarioStore()
const dni = ref('')
const nombres = ref('')
const cas = ref('')
const passw = ref('')


onMounted(async () => {   
    dni.value = store.user.num_doc
    nombres.value = store.user.nombres
    cas.value = store.user.clinica
    passw.value = store.user.contra
})
</script>
