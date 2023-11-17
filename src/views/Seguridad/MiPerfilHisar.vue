<template>
    <div>
        <HeaderH />
        <div class="container">
            <!-- {{ useStore }} -->
            <p class="subtitle">Datos Personales</p>
            <div class="form">
                <div class="form-img">
                    <img src="../../assets/images/avatar.jpg" width="120" alt="" />
                </div>
                <div class="form-data">
                    <p><strong>DNI / CEXT: </strong> <span> {{ dni }} </span> </p>
                    <p><strong>Nombre: </strong> <span>{{ nombres }}</span>  </p>
                    <p><strong>Correo: </strong> <span>example@gmail.com</span>  </p>
                    <p><strong>Clinica: </strong> <span>{{ cas }}</span>  </p>

                    <!-- <v-text-field color="#00A79C" label="DNI / CEXT" variant="outlined" v-model="dni"></v-text-field>
                    <v-text-field color="#00A79C" label="Nombres y Apellidos" variant="outlined"
                        v-model="nombres"></v-text-field> -->
                    <!-- <v-text-field color="#00A79C" label="Apellidos" variant="outlined" v-model="apellidos"></v-text-field> -->
                    <!-- <v-text-field color="#00A79C" label="Correo" suffix="@gmail.com" variant="outlined"></v-text-field>
                    <v-text-field color="#00A79C" label="Clinica" variant="outlined" v-model="cas"></v-text-field> -->
                </div>
            </div>
            <p class="subtitle">Contraseña</p>
            <v-text-field color="#00A79C" type="password" label="Contraseña" variant="outlined"
                v-model="passw"></v-text-field>
            <div>
                <button class="btn btn-secondary" @click="inicio">VOLVER A INICIO</button> <button class="btn btn-success">ACTUALIZAR
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

.container .subtitle {
    font-size: 24px;
    color: #00A79C;
    font-weight:550;
}
.btn-success{
    background-color: #77c23a;
    border: 1px solid #77c23a;
}

.btn-success:hover{
    opacity: 0.85;
}
.form {
    display: flex;
    gap: 2%;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    background-color: aliceblue;
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-bottom: 15px;
    /* background-color: #00A79C; */
}

.form-img {
    width: 120px;
}

.form-data {
    width: calc(100% - 120px);
}
.form-data p{
    font-size: 17px;
}
</style>

<script setup>
//components
import HeaderH from '../../components/hisar_comp/HeaderH.vue'
//imports
import { onMounted, ref } from 'vue'
import { useUsuarioStore } from '../../stores/usuario';
import router from '../../router';

const store = useUsuarioStore()
const dni = ref('')
const nombres = ref('')
const cas = ref('')
const passw = ref('')

const inicio = () => {
    router.push("/main")
}

onMounted(async () => {   
    dni.value = store.user.num_doc
    nombres.value = store.user.nombres
    cas.value = store.user.clinica
    passw.value = store.user.contra
})
</script>
