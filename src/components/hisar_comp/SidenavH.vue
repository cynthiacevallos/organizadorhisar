<template>
    <div class="siden">
        <div class="usuario-info">
            <img src="../../assets/images/cnsr-logo.png" alt="">

            <!-- <img src="../../assets/images/user-icon2.png" alt="" width="100" height="100"> -->
            <!-- <span>{{ usuario }}</span> -->
            <span>{{ centro }}</span>
        </div>
        <hr style="border: 1px solid #000;">
        <div class="items">
            <div  v-for="(i,index) in lista" :key="index">
                <!-- <div class="item-siden">
                    <p>{{ i.main.toUpperCase() }}  
                        <button class="item-boton" @click="showItems(i)">+</button>  
                    </p>
                </div> -->
                <div class="item-sub-siden" v-for="(j,indice) in i.sec" :key="indice" v-show="i.done">
                    <router-link class="link" :to="{ path:''+`${j.link}`}"  >
                        <div class="item-sub-siden-link"> 
                            <font-awesome-icon :icon="['fas', `${j.icon}`]" /> {{ j.name }} 
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    /* color: #FFF !important; */
    font-family: Arial;
    --honolulu-blue: #0B7AC6ff;
    --alice-blue: #EBF2FAff;
    --apple-green: #A4BD2Bff;
    --antiflash-white: #EFEFEFff;
    --white: #FFFFFFff;
}
.link{
    color:#FFF;
    text-decoration: none;  
    height: 70px;  
}
.router-link-active .item-sub-siden-link{ 
    background-color: rgba(26,34,38,0.22);
    border-radius: 10px;
    /* box-shadow: 1px 1px 1px 1px rgba(25,34,38,0.22); */
}
.item-sub-siden-link{
    padding: 8px;
    background-color: rgba(255,255,255,0.15);
    border-radius: 10px;
}
.item-sub-siden-link:hover{
    background-color:rgba(26,34,38,0.22);
    border-radius: 10px;
}

body {
    margin: 0px !important;
}
.siden{
    width: 289px;
    height: 100vh;
    padding: 0 20px;
    /* background-color: #D1E3EF; */
    /* background-color:rgb(93, 93, 116) */
    /* background-color:rgba(26,34,38,0.22) */
    /* background-color: rgba(0,122,201,0.77); */
    background-color: var(--honolulu-blue);
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
    color:#FFF;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding: 0 10px;
    font-size: 18px;
    letter-spacing: 2px;
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
}
.item-boton:hover{
    color: #000;
}

.item-siden{
    /*margin-top:10px;*/
    color:#000;
    /* background-color: #6AB2E0; */
    background-color: rgba(25,34,38,0.22);
    width: 231px;
    padding:0;
    text-indent: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: bold;
}
.item-sub-siden{
    color:white;
    /* background-color: #A0CCE9; */
    text-indent: 25px;
    width: 225px;
    border-radius: 10px;
    margin-bottom: 10px;
}
</style>

<script setup>
    import { useUsuarioStore } from '../../stores/usuario';
    const store = useUsuarioStore()

    const centro = store.user.clinica
    defineProps({
        // usuario:{
        //     type:String,
        //     require:false
        // },
        // centro:{
        //     type:String,
        //     require:true
        // },
        lista:{
            type:Array,
            require:false
        }
    })



    // const showItems = (i) =>{ 
    //     if(i.done == true){
    //         i.done = false
    //     }else if(i.done == false){
    //         i.done = true
    //     }
    // }
</script>