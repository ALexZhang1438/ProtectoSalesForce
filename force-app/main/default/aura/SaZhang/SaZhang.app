<aura:application>
    <aura:registerEvent name="insertIntoStock" type="c:insertIntoStock" />
    <aura:registerEvent name="insertIntoVentas" type="c:insertIntoVentas" />
    <table style="margin-left: 300px; border-spacing: 30px;" >
        <td >
            <!-- registro -->
            <c:FormularioRegistro />
            <c:ListadoStock />
        </td>
        <td>
            <h1>Contador</h1>
        </td>
        <td>
            <!-- ventas -->
            <c:FormularioVentas />
            <c:Listado />
        </td>
    </table>
</aura:application>