({
    addToTable: function (component, event, helper) {
        var input1 = event.getParam("nombreComercial");
        var input2 = event.getParam("nombreCliente");
        var input3 = event.getParam("matriculaVenta");
        var input4 = event.getParam("fechaVenta");
        var input5 = event.getParam("precioVenta");

        console.log("recibiendo evento");
<<<<<<< HEAD
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
=======
        if (input1, input2, input3, input4, input5) {
            var list = component.get("v.output");

            var objeto1 = { nombreComercial: input1 }
            var objeto2 = { nombreCliente: input2 }
            var objeto3 = { matriculaVenta: input3 }
            var objeto4 = { fechaVenta: input4 }
            var objeto5 = { precioVenta: input5 }

            list.push(objeto1, objeto2, objeto3, objeto4, objeto5);
            component.set("v.output1", list);
            component.set("v.output2", list);
            component.set("v.output3", list);
            component.set("v.output4", list);
            component.set("v.output5", list);
        }
        console.log(component.get("v.output1"));
        console.log(component.get("v.output2"));
        console.log(component.get("v.output3"));
        console.log(component.get("v.output4"));
        console.log(component.get("v.output5"));
    }
})
>>>>>>> aaf74144be8e85264ece951b949e3cbcfcc4e22b
