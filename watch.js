var app=new Vue({
    el:"#app",
    data: {
        contador: 0
    },
    watch:{
        contador(val){
            this.contador++
        }
    }
})