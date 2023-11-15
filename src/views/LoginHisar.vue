<template>
	<section id="Animated-Login-Form">
		<img class="wave" src="../assets/wave1-nopng.png">
		<div class="containerW">
			<div class="img">
				<img src="../assets/rinon4.png" alt="">
				<!--<img src="../assets/bgv2.svg">-->
			</div>
			<div class="login-content">
				<form>
					<img src="../assets/images/cnsr-logo.png">
					<h2 class="titleW">Bienvenido</h2>
					<div class="input-div">
						<div class="i">
							<i><font-awesome-icon :icon="['fas', 'user']" /></i>
						</div>
						<div class="div">
							<h5>Usuario</h5>
							<input type="text" class="input" v-model="usuario" id="input-user">
						</div>
					</div>
					<div class="input-div">
						<div class="i">
							<i><font-awesome-icon :icon="['fas', 'lock']" /></i>
							<!-- <i class="fas fa-lock"></i> -->
						</div>
						<div class="div">
							<h5>Contraseña</h5>
							<input type="password" v-model="passw" class="input">
						</div>
					</div>
					<a href="#">¿Olvidó su contraseña?</a>
					<button class="btn" @click="login">Iniciar sesión</button>
					<v-alert  class="text-start" v-model="alert" border="start" variant="tonal" closable close-label="Close Alert"
						color="red" style="font-size: 16px;">
						<font-awesome-icon :icon="['fas', 'circle-exclamation']" />
						Contraseña equivocada. Intentelo de nuevo
					</v-alert>

					<!--input type="submit" class="btn" value="Iniciar sesión">-->
				</form>
			</div>

		</div>
	</section>
</template>
<style scoped>
.img img {
	/* width: 100vw; */
	/* filter: hue-rotate(20deg); */
	width: 100%;
}

#Animated-Login-Form {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	overflow: hidden;
}

.wave {
	position: fixed;
	filter: hue-rotate(25deg);
	bottom: 0;
	left: 0;
	width: 50vw;
	height: 100%;
	z-index: 1;
}

.containerW {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 7rem;
	padding: 0 2rem;
}

#Animated-Login-Form .img {
	display: flex;
	/* justify-content: center; */
	z-index: 2;
	justify-content: flex-end;
	align-items: center;
}

.login-content {
	z-index: 4;
	/* transform: scale(1.2); */
	/* width: 50vw; */
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

#Animated-Login-Form .img img {
	width: 500px;
}

#Animated-Login-Form form {
	width: 360px;
}

.login-content img {
	height: 100px;
}

.login-content h2 {
	margin: 15px 0;
	color: #333;
	text-transform: uppercase;
	font-size: 2.9rem;
}

.login-content .input-div {
	position: relative;
	display: grid;
	grid-template-columns: 7% 93%;
	margin: 25px 0;
	padding: 5px 0;
	border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one {
	margin-top: 0;
}

#Animated-Login-Form .i {
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

#Animated-Login-Form .i i {
	transition: .3s;
}

.input-div>div {
	position: relative;
	height: 45px;
}

.input-div>div>h5 {
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

.input-div:before,
.input-div:after {
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #3678b0;
	transition: .4s;
}

.input-div:before {
	right: 50%;
}

.input-div:after {
	left: 50%;
}

.input-div.focus:before,
.input-div.focus:after {
	width: 50%;
}

.input-div.focus>div>h5 {
	top: -5px;
	font-size: 15px;
}

.input-div.focus>.i>i {
	color: #3678b0;
}

.input-div>div>input {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

.input-div.passW {
	margin-bottom: 4px;
}

a {
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover {
	color: #3678b0;
}

#Animated-Login-Form .btn {
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #3678b0, #76aad5, #4f91c9);

	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}

#Animated-Login-Form .btn:hover {
	background-position: right;
}


@media screen and (max-width: 1050px) {
	.containerW {
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px) {
	#Animated-Login-Form form {
		width: 290px;
	}

	.login-content h2 {
		font-size: 2.4rem;
		margin: 8px 0;
	}

	#Animated-Login-Form .img img {
		width: 400px;
	}
}

@media screen and (max-width: 900px) {
	.containerW {
		grid-template-columns: 1fr;
	}

	#Animated-Login-Form .img {
		display: none;
	}

	.wave {
		display: none;
	}

	.login-content {
		justify-content: center;
	}
}
</style>

<script setup>

import { onMounted, ref } from 'vue'
import { useUsuarioStore } from '../stores/usuario'
// import { useClinicasStore } from '../stores/clinicas';
import router from '../router';

const usuario = ref('')
const passw = ref('')
const alert = ref(false)
const store = useUsuarioStore()
// const storeCas = useClinicasStore()

const login = async (e) => {
	e.preventDefault()
	await store.autenticacion(usuario.value, passw.value)
	if (store.exito == true) {
		router.push("/main")
	}else {
		alert.value = true
	}
}

onMounted(() => {
	// storeCas.
	// console.log(storeCas.clinica)
	const inputs = document.querySelectorAll(".input");
	inputs.forEach(input => {
		input.addEventListener('focus', function () {
			let parent = input.parentNode.parentNode;
			parent.classList.add("focus");
		});
		input.addEventListener("blur", function () {
			let parent = input.parentNode.parentNode;
			if (input.value == "") {
				parent.classList.remove("focus");
			}
		});
	});
})
</script>