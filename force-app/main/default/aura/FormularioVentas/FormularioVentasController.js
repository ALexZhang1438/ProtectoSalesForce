({
    sendFormularioVentas : function(component, event, helper) {
        var nombreComercial = component.find('nombreComercial').getElement().value;
        var nombreCliente = component.find('nombreCliente').getElement().value;
        var matriculaVenta = component.find('matriculaVenta').getElement().value;
        var fechaVenta = component.find('fechaVenta').getElement().value;
        var precioVenta = component.find('precioVenta').getElement().value;
        //insertar nombre comercial      
        var appevent =$A.get("e.c:insertIntoVentas");
        appevent.setParams({"nombreComercial":nombreComercial});
        console.log("disparando evento:"+ nombreComercial);
        appevent.fire()
        //insertar nombre cliente      
        var appevent =$A.get("e.c:insertIntoVentas");
        appevent.setParams({"nombreCliente":nombreCliente});
        console.log("disparando evento:"+ nombreCliente);
        appevent.fire()
        //insertar matricula     
        var appevent =$A.get("e.c:insertIntoVentas");
        appevent.setParams({"matriculaVenta":matriculaVenta});
        console.log("disparando evento:"+ matriculaVenta);
        appevent.fire()
        //insertar fecha venta      
        var appevent =$A.get("e.c:insertIntoVentas");
        appevent.setParams({"fechaVenta":fechaVenta});
        console.log("disparando evento:"+ fechaVenta);
        appevent.fire()
        //insertar precio      
        var appevent =$A.get("e.c:insertIntoVentas");
        appevent.setParams({"precioVenta":precioVenta});
        console.log("disparando evento:"+ precioVenta);
        appevent.fire()
    }
})
