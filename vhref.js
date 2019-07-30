new Vue({
    el:"#app",
    data: {
        txtSaludo: "https://vuejs.org/v2/guide/"
    },
    methods:{
        saludo(){
            return this.txtSaludo;
        },
        suma(){
            return 5+7;
        },
        retorno(saludo){
            return "te devuelvo el "+saludo;
        }
    }
})