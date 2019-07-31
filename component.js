var data={
    frutas:[
        {
            nombre: "manzana",
            cantidad: 0
        }
    ],
    nuevaFruta:"",
    nuevaCant:0
}
Vue.component('ingresar',{
    template:`
        <div>
            <input type="text" v-model="nuevaFruta">
            <input type="number" v-model="nuevaCant">
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
                cantidad: this.nuevaCant
            })
            this.nuevaFruta=''
            this.nuevaCant=0
            console.log(this.frutas)
        }
    }
})
Vue.component(
    'tabla',{
        template:`
        <ul>
            <li v-for="item in frutas">
                {{item.nombre}} - {{item.cantidad}}
            </li>
        </ul>
        `,
        data(){
            return data
        }
    }
)
var app=new Vue({
    el:"#app",
    data: data
})