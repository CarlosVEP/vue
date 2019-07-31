var data={
    frutas:[
        {
            nombre: "manzana",
            cantidad: 0
        }
    ],
    nuevaFruta:""
}
Vue.component('ingresar',{
    template:`
        <div>
            <input type="text" v-model="nuevaFruta">
            <button @click="agregar">agregar</button>
        </div>
    `,
    data(){
        return data
    },
    methods: {
        agregar(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
            this.nuevaFruta=''
        }
    }
})
var app=new Vue({
    el:"#app",
    data: data
})