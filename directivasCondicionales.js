new Vue({
    el:"#app",
    data: {
        mensaje: "Hola desde aqui",
        estado: false,
        vocal: "a",
        dia: 0,
        numeros:[1,2,3,4,5,6,7],
        persona:{ nombre:"pancho",apellido:"Villa",ci:3445 },
        personas:[
            { nombre:"pancho",apellido:"Villa",ci:3445 },
            { nombre:"lala",apellido:"Villa2",ci:3445 },
            { nombre:"jejejej",apellido:"Villa3",ci:3445 },
            { nombre:"sdfds",apellido:"Villa4",ci:3445 },
            { nombre:"asdf",apellido:"Villa5",ci:3445 },
        ],
        contador: 0,
        contador2: 0,
        contador3: 0
    },
    methods:{
        mostrar(){
            console.log(this.mensaje)
        },
        incrementar(){
            this.contador++
        },
        incrementar2(val){
            this.contador2=this.contador2+val
        }
    }
})