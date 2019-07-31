var app=new Vue({
    el:"#app",
    data: {
        contador: 0
    },
    computed:{
        // incrementar:function(){
        //     return this.contador++
        // }
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