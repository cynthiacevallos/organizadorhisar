<template>
    <div class="barra">
        <!-- <h2>HISAR</h2> -->
        <div class="dropdown show">
            <a class="btn btn-outline-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                <font-awesome-icon :icon="['fas', 'user']" />
                Bienvenido {{ usuario }} 
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click="miPerfil" >Mi perfil</a>
                <a class="dropdown-item" @click="cerrarSesion" >Cerrar sesion</a>
            </div>
        </div>
        <!-- <ButtonH title="CERRAR SESION" bgColor="#E35C5C" background="#E35C5C" font="#FFF" iconos="right-from-bracket"/> -->
    </div>
</template>

<style scoped>
*{
    --honolulu-blue: #0B7AC6ff;
    --alice-blue: #EBF2FAff;
    --apple-green: #A4BD2Bff;
    --antiflash-white: #EFEFEFff;
    --white: #FFFFFFff;
}
.barra {
    background-color: var(--antiflash-white);
    /* background-color: rgba(26, 34, 38, 0.7); */
    /* background-color: rgb(0, 122, 201); */
    /* background-color: #000; */
    /* box-shadow: 1px 1px 1px 1px #ccc; */
    /* background-color: #f5f5f5; */
    /* border-bottom: 1px solid #f5f5f5; */
    height: fit-content;
    width: 100%;
    padding: 7px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
}
.barra h2{
    color: white;
    /* font-weight: bold; */
    margin: 0;
    letter-spacing: 5px;
}
/* .dropdown a{
    color: white;
}
.dropdown:hover a{
    color: #000;
} */
</style>

<script setup>
// import 
import { useUsuarioStore } from '../../stores/usuario';
import router from '../../router';

const store = useUsuarioStore()
const usuario = store.user.nombres.split(" ")[0]+' '+store.user.nombres.split(" ")[1]

const cerrarSesion = () => {
    sessionStorage.clear()
    router.push("/")
}

const miPerfil = () => {
    router.push("/perfil")
}
</script>
