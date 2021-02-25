({
    addToTable: function (component, event, helper) {
        var input = event.getParams();

        console.log("recibiendo evento" + input);
        if (input) {
            console.log("Motrando Datos");
            var list = component.get("v.output");
            var objeto = {
                nombreComercial: input.nombreComercial, nombreCliente: input.nombreCliente,
                matriculaVenta: input.matriculaVenta, fechaVenta: input.fechaVenta, precioVenta: input.precioVenta
            }
            list.push(objeto);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
    }
})