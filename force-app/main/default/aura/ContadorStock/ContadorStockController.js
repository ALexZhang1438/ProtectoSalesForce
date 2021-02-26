({
    addToContadorStock: function (component, event, helper) {
        console.log("recibiendo evento suma" );
        var suma = component.get("v.output");
        suma.contadorStock + 1;
        component.set("v.output", suma);
        console.log("valor suma "+ suma)
        console.log(component.get("v.output"));
    },
    restaToContadorStock: function (component, event, helper) {
        console.log("recibiendo evento resta" );
        var resta = component.get("v.output");
        resta.contadorStock + 1;
        component.set("v.output", resta);
        console.log("valor resta "+ resta)
        console.log(component.get("v.output"));
    },
    doInit: function (component, event, helper){
        var objeto = {contadorStock:0};
        component.set("v.output", objeto);
    }
})