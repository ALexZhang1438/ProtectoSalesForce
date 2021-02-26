({
    addToContadorStock: function (component, event, helper) {
        console.log("recibiendo evento suma" );
        var objeto1 = component.get("v.output");
        //objeto1.contadorStock + 1;
        component.set("v.output", objeto1.contadorStock + 1);
        console.log("valor objeto1"+objeto1)
        console.log(component.get("v.output"));
    },
    restaToContadorStock: function (component, event, helper) {
        console.log("recibiendo evento resta" );
        var objeto = component.get("v.output");
        objeto.contadorStock - 1;
        component.set("v.output", objeto);
        console.log(component.get("v.output"));
    },
    doInit: function (component, event, helper){
        var objeto = {contadorStock:0};
        component.set("v.output", objeto);
    }
})