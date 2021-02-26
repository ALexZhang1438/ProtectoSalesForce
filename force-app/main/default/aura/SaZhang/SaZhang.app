<aura:application>
    <aura:registerEvent name="insertIntoStock" type="c:insertIntoStock" />
    <aura:registerEvent name="insertIntoVentas" type="c:insertIntoVentas" />
    <table style="margin-left: 300px; border-spacing: 30px;">
        <tr>
            <td style="text-align: center; width: 700px; font-size: 50px; color: red;"><h1>Concecionario SaZang</h1></td>
        </tr>
    </table>
    <table style="margin-left: 300px; border-spacing: 30px;">
            <td>
                <!-- registro -->
                <c:FormularioRegistro />
                <c:ListadoStock />
            </td>
            <td>
                <c:ContadorStock />
            </td>
            <td>
                <!-- ventas -->
                <c:FormularioVentas />
                <c:Listado />
            </td>
    </table>
</aura:application>