<template>
    <select :name="id" :id="id" class="seleccion" > 
        <option class="" value="" selected hidden disabled >Selecione una opcion</option>
        <option  v-for="(i,index) in opciones" :key="index" >{{ i }}</option>
    </select>
    <!--<button class="boton" @click="verOpciones" >
        Seleccione una opcion
    </button>

    <div class="opciones">
        <button class="optciones-item">Centro Nacional de Salud Renal</button>
        <button >CCCC</button>
        <button>DDDD</button>
        <button>KKKK</button>
    </div>-->
</template>

<style scoped>
button{
    background-color:transparent;
    border:none;
    font-size: 14px;
}
.seleccion{
    width: v-bind(ancho);
    background-color:#FFF;
    border:none;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 16px;
    display: flex;
    gap:10px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.seleccion:focus{
    outline: none;
}
.seleccion option{
    padding-top:100px;
    text-align: left;
}




.opciones{
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px  #ccc;
    width: 50%;
    display: v-bind(display);
    margin: 0;
    padding: 0;
}

.opciones button{
    cursor: pointer;
    width: 100%;
    text-align: left;
    height: fit-content;
}

.opciones button:hover{
    color: white;
    cursor: pointer;
    background-color: #007AC9;
}
option{
    line-height: 200px;
    padding: 200px;
    margin: 500px;
    padding-top: 200px;
}
.select {
    width: v-bind(ancho);
    border: none;
    font-size: 14px;
    background-color: rgba(229,229,229,0.44);
    border:1px solid #ccc;
    padding: 10px;
    text-indent: 15px;
    border-radius: 20px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
}

.select:focus{
    outline: none;
    border: 2px solid #007AC9;
}

</style>

<script setup>
    import { ref } from 'vue'
    defineProps({
        ancho:{
            type: String,
            require:true,
            default:"500px"
        },
        opciones:{
            type:Array,
            require:true
        },
        id:{
            type:String,
            require:true
        }
    })
    let display = ref('none')
</script>