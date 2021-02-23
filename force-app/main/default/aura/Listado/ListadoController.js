({
    addToStock : function(component, event, helper) {
        var input1 = event.getParam("matricula");
        var input2 = event.getParam("marca");
        var input3 = event.getParam("modelo");
        var input4 = event.getParam("color");
        

        console.log("recibiendo evento");
       if(input1, input2, input3, input4){
           var list = component.get("v.output");
           var objeto1 = {matricula: input1}
           var objeto2 = {marca: input2}
           var objeto3 = {modelo: input3}
           var objeto4 = {color: input4}
           list.push(objeto1, objeto2, objeto3, objeto4);
           component.set("v.output",list);
       }
       console.log(component.get("v.output"));
   }
})
