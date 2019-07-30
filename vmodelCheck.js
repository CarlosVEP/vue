new Vue({
    el:"#app",
    data: {
        txtSaludo: "lalala",
        ver:[]
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