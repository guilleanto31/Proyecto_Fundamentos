'use strict';

function init(){
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    var clientesValue = document.getElementById('clientes');
    var diasTxt = document.getElementById('dias');
    var TotalCBtn = document.getElementById('totalCancelar');
    var totalDBtn = document.getElementById('totalDias');
    var clienteMayorBtn = document.getElementById('clienteMayor');
    var clienteMenorBtn = document.getElementById('rclienteMenor');
    var resultadoInf = document.getElementById('resultadoInf');

    /* MATRIZ */
    /* Base de datos */

    var datos = [[], [], [], [], [], [], [], []];

    regClientes(1,'CAROLINA','HERNANDEZ','VIP',0/* cant dias */,0/*total cancelar*/,'carher@gmail.com','8801-8888');
    regClientes(2,'LISSETH','BLANCO','REGULAR','lisbla@gmail.com','8802',0,0);
    regClientes(3,'CARLOS','QUESADA','VIP','carque@gmail.com','8803',0,0);
    regClientes(4,'LEONARDO','SANCHEZ','REGULAR','leosan@gmail.com','8804',0,0);
    regClientes(5,'NATALIA','NOVOA','REGULAR','natnov@gmail.com','8805',0,0);
    regClientes(6,'MARÍA','ZÚÑIGA','VIP','@gmail.com','8806-8888');
    regClientes(7,'JOSÉ','GARCÍA','REGULAR','carher@gmail.com','8807',0,0);
    regClientes(8,'ANDREA','CORREA','REGULAR','carher@gmail.com','8808',0,0);
    regClientes(9,'RICARDO','VEGA','VIP','carher@gmail.com','8809-8888');
    regClientes(10,'SEBASTIAN','ROMERO','REGULAR','carher@gmail.com','8810',0,0);
    regClientes(11,'CAMILO','JIMENEZ','REGULAR','carher@gmail.com','8811',0,0);
    regClientes(12,'ALEJANDRA','BOLÍVAR','VIP','carher@gmail.com','8812',0,0);
    regClientes(13,'MARCELA','MUÑOZ','REGULAR','carher@gmail.com','8813',0,0);
    regClientes(14,'DANIELA','GUZMÁN','REGULAR','carher@gmail.com','8814',0,0);
    regClientes(15,'ANDRÉS','SALGADO','VIP','carher@gmail.com','8815',0,0);

    tablaClientes();

    function regClientes(id, nombre, apellido, tipo,email,tel, cantdias, total) {
		//se agrega el dato a la matriz iniciando con id y finalizando con total
		datos[0].push(id);
		datos[1].push(nombre);
		datos[2].push(apellido);
		datos[3].push(tipo);
        datos[4].push(email);
        datos[5].push(tel);
		datos[6].push(cantdias);
		datos[7].push(total);
	}
    function ingresarCliente(){
        var diasSumar = Number(diasTxt.value);

        id= Number(clientesValue.value -1);

        var cantDias = cantDias + Number (datos[4][id]);
        datos[6][id] = cantDias;
        
    }

    function tablaClientes() {
		tabla.innerHTML = '';
		/*aplicar clases CSS*/
		tabla.className="table";
		tabla.className="table-striped";     

		//Encabezado de la tabla
		var tr = document.createElement('tr');
		tabla.appendChild(tr);

		//Celdas dentro del encabezado
		var th = document.createElement('th');
		th.innerHTML = 'Id';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Nombre';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Apellido';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Tipo';
		tr.appendChild(th);

		th = document.createElement('th');
		th.innerHTML = 'Email';
		tr.appendChild(th);
        
		th = document.createElement('th');
		th.innerHTML = 'Telefono';
		tr.appendChild(th);

        th = document.createElement('th');
		th.innerHTML = 'Días Hospedado';
		tr.appendChild(th);

        th = document.createElement('th');
		th.innerHTML = 'Pagar';
		tr.appendChild(th);

        for (var y = 0; y < datos[0].length; y++){
            var tr = document.createElement('tr');
			tabla.appendChild(tr);

			td = document.createElement('td');
			td.innerHTML = datos[0][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[1][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[2][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[3][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[4][y];
			tr.appendChild(td);

			td = document.createElement('td');
			td.innerHTML = datos[5][y];
			tr.appendChild(td);

            td = document.createElement('td');
			td.innerHTML = datos[6][y];
			tr.appendChild(td);
        }
    }

    function totalDias(){
        var total = 0;
		resultadoPr.innerHTML = '';
        for (var y = 0; y < datos[6].length; y++) {
			total = total + Number(datos[6][y]);
		}
        resultadoPr.innerHTML = '<h5>La cantidad total días es : </h5>' + total;
    }

    function mayorCliente() {
		resultadoPr.innerHTML = '';
		var maxCliente = datos[6][0];
		var posicionMayor = 0;
		for (var y = 0; y < datos[6].length; y++) {

			if (maxCliente < datos[6][y]) {
				maxCliente = datos[6][y];
			}
		}
		posicionMayor = datos[6].indexOf(maxCliente);
		resultadoPr.innerHTML = '<h5>El cliente con más días hospedado es:</h5> ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor];
	}

}