new Vue({
    el: '#app',
    data:{
        saludo: 'hola directiva'
    },
    beforeCreate: function(){
        console.log("beforeCreated");
    },created: function(){
        console.log("create");
    },beforeMount: function(){
        console.log("beforemount");
    },mounted: function(){
        console.log("mounted");
    },beforeUpdate: function(){
        console.log("beforeUpdate");
    },updated: function(){
        console.log("update");
    },beforeDestroy: function(){
        console.log("beforeDestroy");
    },destroyed: function(){
        console.log("destroy");
    },
    methods: {
        destruir: function(){
            this.$destroy()
        }
    }
})