({
    addToTable: function (component, event, helper) {
        var input1 = event.getParam("nombreComercial");
        var input2 = event.getParam("nombreCliente");
        var input3 = event.getParam("matriculaVenta");
        var input4 = event.getParam("fechaVenta");
        var input5 = event.getParam("precioVenta");

        console.log("recibiendo evento");
        console.log(input1, input2, input3, input4, input5);
        //listado objeto 1
        if (input1) {
            var list = component.get("v.output");
            var objeto1 = { nombreComercial: input1 }
            list.push(objeto1);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
        //listado objeto 2
        if (input2) {
            var list = component.get("v.output");
            var objeto2 = { nombreCliente: input2 }
            list.push(objeto2);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
        //listado objeto 3
        if (input3) {
            var list = component.get("v.output");
            var objeto3 = { matriculaVenta: input3 }
            list.push(objeto3);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
        //listado objeto 4
        if (input4) {
            var list = component.get("v.output");
            var objeto4 = { fechaVenta: input4 }
            list.push(objeto4);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
        //listado objeto 5
        if (input5) {
            var list = component.get("v.output");
            var objeto5 = { precioVenta: input5 }
            list.push(objeto5);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
    }
})
/*addToTable : function(component, event, helper) {
    var input = event.getParam("input");
    console.log("recibiendo evento");
    console.log(input);
   if(input){
       var list = component.get("v.output");
       var objeto = {nombre: input, apellido: "Doe"}
       list.push(objeto);
       component.set("v.output",list);
   }
   console.log(component.get("v.output"));
},*/