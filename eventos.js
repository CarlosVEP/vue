new Vue({
    el:"#app",
    data: {
        nombre: "Pancho",
        x:0,
        y:0,
        frutas:[
            {
                nombre: 'manzana', 
                cantidad: 13
            }
        ],
        nuevaFruta: ''
    },
    methods:{
        saludar(){
            console.log('hola '+this.nombre )
        },
        saludar2(texto){
            console.log('holax '+texto )
        },
        mover(event){
            this.x=event.clientX
            this.y=event.clientY
        },
        agregar(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        }
    }
})