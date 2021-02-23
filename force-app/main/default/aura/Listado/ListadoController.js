({
    addToTable : function(component, event, helper) {
        var input1 = event.getParam("nombreComercial");
        var input2 = event.getParam("nombreCliente");
        var input3 = event.getParam("matriculaVenta");
        var input4 = event.getParam("fechaVenta");
        var input5 = event.getParam("precioVenta");

        console.log("recibiendo evento");
       if(input1, input2, input3, input4, input5){
           var list = component.get("v.output");
           var objeto1 = {nombreComercial: input1}
           var objeto2 = {nombreCliente: input2}
           var objeto3 = {matriculaVenta: input3}
           var objeto4 = {fechaVenta: input4}
           var objeto5 = {precioVenta: input5}
           list.push(objeto1, objeto2, objeto3, objeto4, objeto5);
           component.set("v.output",list);
       }
       console.log(component.get("v.output"));
   }
})
