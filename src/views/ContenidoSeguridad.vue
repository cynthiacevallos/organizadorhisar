<template>
    <div>
        <div style="position: absolute;background-color: rgba(255,255,255,0.55);width: 100%;height: 100%;top:0;z-index:2;"
            v-if="modal">
            <div class="modal-clausula">
                <h2>CLAUSULA DE DATOS PERSONALES</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi adipisci odit minus
                    quisquam libero dicta ipsam, expedita non tenetur voluptate sunt maiores, ad culpa
                    architecto tempora dolorum saepe, est eum reprehenderit qui in. Inventore sunt enim a
                    voluptatibus voluptatum, esse quasi beatae accusantium nulla tempore praesentium molestiae
                    velit illum maiores officia, quisquam quaerat eos alias consequatur provident, architecto
                    debitis.
                </p>
                <ol>
                    <li>
                        <strong style="color: #007ac9">CLAUSULA 1</strong> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quod, quas.
                    </li>
                    <li>
                        <strong style="color: #007ac9">CLAUSULA 2</strong> Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Cumque pariatur ullam voluptate quod aliquam repellat officiis. In nulla
                        necessitatibus explicabo.
                    </li>
                    <li>
                        <strong style="color: #007ac9">CLAUSULA 3</strong> Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi soluta, corrupti laboriosam libero quia adipisci, dolores
                        cupiditate dolore voluptates accusantium assumenda quidem doloribus minus voluptatum
                        excepturi amet maxime ea. Odio, voluptatum harum ex maiores assumenda beatae excepturi
                        perferendis. Repellendus facere, dolorum est ab harum omnis nobis eveniet alias maiores
                        laboriosam.
                    </li>
                </ol>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nobis voluptatibus
                magnam amet quibusdam consequatur debitis exercitationem asperiores culpa repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia eius dignissimos alias quod voluptate consequatur assumenda cumque suscipit obcaecati, delectus unde iste, maxime minus cum hic recusandae perspiciatis maiores.
                <button style="display: block; margin-left: auto" class="btn btn-secondary" @click="changeModal(false)">
                    ACEPTAR
                </button>
            </div>
        </div>
        <!-- <div style="display: flex;align-items: end;gap: 10px;padding: 10px;">
        <img src="../assets/images/cnsr-logo.png" width="50" alt=""><h2 style="font-size: 32px;letter-spacing: 10px;color: #007ac9;font-family: Tahoma;font-weight: bold;">HISAR</h2></div> -->
        <div style="display: flex;;align-items: center;">
            <div class="modulo">
                <div class="datos">
                    <h2>REGISTRO DE DATOS</h2>
                    <!-- <v-checkbox v-model="ex4" label="primary" color="primary" value="primary" hide-details></v-checkbox> -->
                    <v-text-field label="Nombres y Apellidos" color="#007ac9" bgColor="white" variant="solo-filled"></v-text-field>
                    <v-text-field label="Correo electronico" color="#007ac9" bgColor="white" variant="solo-filled"></v-text-field>
                    <v-text-field label="Fecha de nacimiento" color="#007ac9" bgColor="white" variant="solo-filled"></v-text-field>
                    <v-text-field label="Direccion" color="#007ac9" bgColor="white" variant="solo-filled"></v-text-field>
                    <v-text-field label="Numero Telefonico" color="#007ac9" bgColor="white" variant="solo-filled"></v-text-field>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" @click="verifyCheck" v-model="check"
                            id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Acepto la clausula informativa sobre
                            tratamiento y confidencialidad de datos
                            personales. Más informacion en
                            <button style="width: fit-content; color: blue; text-decoration: underline"
                                @click="changeModal(true)">
                                Clausula de Datos Personales
                            </button></label>
                    </div>
                    <button class="btn btn-primary">ENVIAR</button>
                </div>
            </div>
            <div>
                <!-- <img src="../assets/agendar-citas-online.png" width="100" height="100" alt=""> -->
            </div>
        </div>
        </div>
</template>

<style scoped>
* {
    font-family: Arial;
    font-size: 16px;
}

li::marker {
    color: #007ac9;
    font-weight: bold;
}

.modal-clausula {
    width: 70%;
    padding: 20px;
    background-color: #fcfcfc;
    box-shadow: 1px 1px 1px 1px #ccc;
    position: absolute;
    left: 15%;
    top: 20%;
    z-index: 2;
    /* top: 10%; */
    /* margin: 0 aut; */
}

.modal-clausula h2 {
    text-align: center;
    font-size: 24px;
    color: #007ac9;
    font-family: Tahoma;
    font-weight: bold;
}

label {
    text-align: start;
}

.modulo {
    width: 50%;
    display: flex;
    /* background-color: aliceblue; */
    justify-content: center;
    align-items: center;
    height: 700px;
    margin-top: 5%;
    margin-left: 5%;
    border: 1px solid #007ac9;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #ccc;
    /* margin: 0 auto; */
}

.form-check {
    width: 95%;
    margin-left: auto;
    text-align: justify;
    padding: 20px;
}

.form-switch {
    padding-left: 0;
}

.datos {
    width: 90%;
    padding: 20px;
    /* line-height: 25px; */
    display: flex;
    flex-direction: column;
}

.datos h2 {
    text-align: center;
    font-size: 32px;
    color: #007ac9;
    font-family: Tahoma;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
}

.datos button {
    width: 100%;
    align-self: center;
    /* margin: 0 auto; */
}
</style>

<script setup>
import { ref } from 'vue'
const check = ref(true)
const modal = ref(false)

const changeModal = (state) => (modal.value = state)

const verifyCheck = () => {
    console.log(check.value)
}
</script>
