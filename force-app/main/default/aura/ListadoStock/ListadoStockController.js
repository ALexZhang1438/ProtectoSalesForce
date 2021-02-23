({
    addToStock : function(component, event, helper) {
     var input1 = event.getParam("matricula");
     var input2 = event.getParam("marca");
     var input3 = event.getParam("modelo");
     var input4 = event.getParam("color");
     console.log("Motrando Datos");
     console.log(input1);
    if(input1){
        var list = component.get("v.output");
        var objeto1 = {matricula: input1, marca: input2, modelo: input3, color: input4}
        // var objeto2 = {marca: input2}
        // var objeto3 = {modelo: input3}
        // var objeto4 = {color: input4}
        list.push(objeto1);
        component.set("v.output",list);
    }
    console.log(component.get("v.output"));
 }
})
