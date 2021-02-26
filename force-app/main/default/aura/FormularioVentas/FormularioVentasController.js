({
    sendFormularioVentas : function(component, event, helper) {
        var nombreComercial = component.find('nombreComercial').getElement().value;
        var nombreCliente = component.find('nombreCliente').getElement().value;
        var matriculaVenta = component.find('matriculaVenta').getElement().value;
        var fechaVenta = component.find('fechaVenta').getElement().value;
        var precioVenta = component.find('precioVenta').getElement().value;
        //insertar nombre comercial      
        var appevent1 =$A.get("e.c:insertIntoVentas");
        appevent1.setParams({"nombreComercial":nombreComercial});
        console.log("disparando nombreComercial:"+ nombreComercial);
        appevent1.fire()
        //insertar nombre cliente      
        var appevent2 =$A.get("e.c:insertIntoVentas");
        appevent2.setParams({"nombreCliente":nombreCliente});
        console.log("disparando nombreCliente:"+ nombreCliente);
        appevent2.fire()
        //insertar matricula     
        var appevent3 =$A.get("e.c:insertIntoVentas");
        appevent3.setParams({"matriculaVenta":matriculaVenta});
        console.log("disparando matriculaVenta:"+ matriculaVenta);
        appevent3.fire()
        //insertar fecha venta      
        var appevent4 =$A.get("e.c:insertIntoVentas");
        appevent4.setParams({"fechaVenta":fechaVenta});
        console.log("disparando fechaVenta:"+ fechaVenta);
        appevent4.fire()
        //insertar precio      
        var appevent5 =$A.get("e.c:insertIntoVentas");
        appevent5.setParams({"precioVenta":precioVenta});
        console.log("disparando precioVenta:"+ precioVenta);
        appevent5.fire()
        //evento restar
        var restarStock =$A.get("e.c:restaToContadorStock");
        console.log("restando stock");
        restarStock.fire()
    }
})
