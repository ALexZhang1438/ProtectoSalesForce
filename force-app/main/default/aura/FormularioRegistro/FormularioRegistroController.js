({
    addStockVehicules : function(component, event, helper) {
        var matricula = component.find('matricula').getElement().value;
        var marca = component.find('marca').getElement().value;
        var modelo = component.find('modelo').getElement().value;
        var color = component.find('color').getElement().value;
        

        //Meter el campo Marricula 
        var appMatricula =$A.get("e.c:insertIntoStock");
        appMatricula.setParams({"matricula":matricula});
        console.log("disparando evento:"+ matricula);
        appMatricula.fire()
        //Meter el campo marca 
        var appeMarca =$A.get("e.c:insertIntoStock");
        appeMarca.setParams({"marca":marca});
        console.log("disparando evento:"+ marca);
        appeMarca.fire()
        //Meter el campo modelo 
        var appModelo =$A.get("e.c:insertIntoStock");
        appModelo.setParams({"modelo":modelo});
        console.log("disparando evento:"+ modelo);
        appModelo.fire()
        //Meter el campo color 
        var appColor =$A.get("e.c:insertIntoStock");
        appColor.setParams({"color":color});
        console.log("disparando evento:"+ color);
        appColor.fire()
    }
})
