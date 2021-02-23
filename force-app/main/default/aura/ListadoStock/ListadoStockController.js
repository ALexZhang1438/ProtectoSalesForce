({
    addToStock : function(component, event, helper) {
     var matricula = event.getParam("arguments").matricula;
     var marca = event.getParam("arguments").marca;
     var modelo = event.getParam("arguments").modelo;
     var color = event.getParam("arguments").color;
     console.log("antes de mostrar datos");
     console.log(matricula, marca, modelo, color);
    if(input1 != null){
        console.log("Motrando Datos");
        var list = component.get("v.output");
        var objeto1 = {matricula: matricula, marca: marca, modelo: modelo ,color: color}
        // var objeto2 = {marca: input2}
        // var objeto3 = {modelo: input3}
        // var objeto4 = {color: input4}
        list.push(objeto1);
        component.set("v.output",list);
    }
    console.log(component.get("v.output"));
 }
})
