var app = new Vue({
    el: "#app",
    data: {
        contador: 0,
        mensaje: "Hooola"
    },
    computed: {
        volcar:function(){
            return this.mensaje.split('').reverse().join('')
        },
        incrementar: {
            // getter
            get: function () {
                return this.contador
            },
            // setter
            set: function (newValue) {
                this.contador++
            }
        }
    }
})