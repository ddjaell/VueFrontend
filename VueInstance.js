var data = {a:1}
var vm = new Vue({
    el : "#vm",
    data : data,
    created: function()
    {
        console.log("created function started")
   
    },
    mounted : function()
    {
        console.log("mounted function started")
    },
    updated : function()
    {
        console.log("updated function started")
    },
    destroyed : function()
    {
        console.log("destroyed function started")
    }

    
})