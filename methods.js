new Vue({
    el:"#app",
    data: {
        html:"<p>lalala jajaja</p><h1>Titulo</h1><h3>hello</h3>",
        source: 'https://lh3.googleusercontent.com/z4nFJl-e6A7SN4m8I_rSVP_M5KgMepSsooVDHriu9bWMn2BVHo8uOW_dlh6OReiKRMPZ5iQK8gY=w128-h128-e365',
        txtSaludo: "lalala"
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