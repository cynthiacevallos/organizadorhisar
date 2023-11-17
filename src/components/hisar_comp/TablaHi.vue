<template>
    <div>
        <table class="tabla">
            <tr class="tabla-header">
                <td v-for="(i,index) in header" :key="index">{{ i.nombre }}</td> 
            </tr>
            <tr class="tabla-body" v-for="(j,indice) in data" :key="indice"> 
                <td>{{ j.clinica }}</td>
                <td>{{ j.cuposTotales }}</td>
                <td>{{ j.cuposDisponibles }}</td>
                <td>{{ j.cuposOcupados }}</td>
                <td class="tabla-botones" v-show="displayBtns">
                    <button class="btn-editar"><img src="../../assets/images/pencil.png" alt="Editar" width="35" height="35" aria-labelledby="caption-text"></button>
                    <button class="btn-editar"><img src="../../assets/images/trash.png" añt="Eliminar" width="40" height="40"> </button>
                    <!--<Button title="ELIMINAR" background="#E35C5C"  bgColor="#E35C5C"  iconos="" font="#fff" />
                    <Button title="EDITAR" background="rgba(0,122,201,0.44)"  bgColor="rgba(0,122,201,0.44)" iconos="pen" font="#fff" />-->
                </td>
            </tr>
        </table>

    </div>
</template>

<style scoped>
.tabla{
    /* background-color: rgba(217,217,217,0.15); */
    /* background-color: white; */
    padding: 20px;
    text-align: center;
    box-shadow: 1px 1px 1px 1px #ccc;
    border-radius: 10px;
    width: 70%;
    
}
.tabla-header{
    border-bottom:1px solid #CCCC;
}
.tabla-header td {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
}

.tabla tr td {
    padding-top: 20px;
    padding-bottom: 20px;
}
.tabla-botones {
    display: flex;
    justify-content: center;
    gap:5px;
}
.btn-editar{
    border: none;
    background-color: transparent;
}
.btn-editar:hover{
    opacity: 0.6;
}
</style>

<script setup>
    //import Button from './ButtonH.vue'
   // const headers = [
     //   {nombre:'TURNO'},{nombre:'FRECUENCIA'},{nombre:'FECHA DE INGRESO'},{nombre:'FECHA DE EVALUACION'},{nombre:'PESO'},{nombre:'TALLA'},{nombre:'ACCIONES'}
   // ]
   // const datos = [
     //   {turno:2, frecuencia:'L-M-V',fecIngreso:'2023-12-12',fecEval:'2023-12-12',peso:55,talla:1.55},
      //  {turno:1, frecuencia:'M-J-S',fecIngreso:'2023-12-12',fecEval:'2023-12-12',peso:55,talla:1.55},
      //  {turno:3, frecuencia:'L-M-V',fecIngreso:'2023-12-12',fecEval:'2023-12-12',peso:55,talla:1.55}
   // ]
    defineProps({
        header:{
            type:Array,
            require:true
        },
        data:{
            type:Array,
            require:true
        },
        displayBtns:{
            type:Boolean,
            default:false
        }
    })
    
</script>