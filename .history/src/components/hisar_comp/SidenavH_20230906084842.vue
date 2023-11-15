<template>
    <div class="siden">
        <div class="usuario-info">
            <img src="../../assets/images/user-icon2.png" alt="" width="100" height="100">
            <span>{{ usuario }}</span>
            <span>{{ centro }}</span>
        </div>
        <div>
            <div v-for="(i,index) in arreglos" :key="index">
                <div>
                    <h3>{{ i.nombre }} <button>+</button></h3>
                </div>
                <div v-for="i in arreglos.nombre">
                    <h5>{{ i.id }}</h5>
                </div>
            </div>
        </div>
        <!--<div class="items">
            <div  v-for="(i,index) in lista" :key="index">
                <div class="item-siden">
                    <p>{{ i.main.toUpperCase() }}  
                        <button class="item-boton" @click="showItems()">+</button>  
                    </p>
                </div>
                <div class="item-sub-siden" v-for="(j,indice) in i.sec" :key="indice" :class="i.main">
                    <router-link class="link" :to="{ path:''+`${j.link}`}"  >
                        <div class="item-sub-siden-link"> {{ j.name }} </div>
                    </router-link>
                </div>
            </div>
        </div>-->
    </div>
</template>

<style scoped>
.link{
    color:#FFF;
    text-decoration: none;    
}
.router-link-active .item-sub-siden-link{ 
    background-color: rgba(25,34,38,0.22);
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(25,34,38,0.22);
}
.item-sub-siden-link{
    padding: 8px;
}
.item-sub-siden-link:hover{
    background-color:rgba(25,34,38,0.33);
    border-radius: 10px;
}

body {
    margin: 0px !important;
}
.siden{
    width: 289px;
    height: 100vh;
    padding: 0 20px;
    background-color: rgba(0,122,201,0.77);
}
.usuario-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    padding-top: 50px;
}
.usuario-info span{
    color:white;
    font-weight: bold;
    text-align: center;
    padding: 0 10px;
    font-size: 17px;
}
.items{
    width: 225px;
    margin: 50px auto;
}
.item-boton{
    background:transparent;
    border: none;
    color: white;
    height: fit-content;
    padding: 0 10px;
    margin: 7px 5px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border:1px solid #000
}

.item-siden{
    /*margin-top:10px;*/
    color:white;
    background-color: rgba(25,34,38,0.22);
    width: 231px;
    padding:0;
    text-indent: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: bold;
}
/*.item-siden:last-child button{
    display: none;
}*/
.item-sub-siden{
    color:white;
    text-indent: 25px;
    width: 225px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.15);
    margin-bottom: 10px;
}
.item-sub-siden.active { 
    display: block;
}
</style>

<script setup>
    defineProps({
        usuario:{
            type:String,
            require:false
        },
        centro:{
            type:String,
            require:true
        },
        lista:{
            type:Array,
            require:false
        }
    })

    const arreglos = [
        {nombre:'nombre',numeros:[{id:1},{id:2},{id:3}]},
        {nombre:'nombre 2',numeros:[{id:4},{id:5},{id:6}]}
    ]

    const showItems = () =>{   
        const cc = document.querySelector(".item-sub-siden")
        console.log(cc)
        //mostrar.value = !most rar.value
        //mostrar.value = !mostrar.value
        //console.log(item)
        //item.done = false;
    }
</script>