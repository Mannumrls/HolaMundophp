function obtenerNombresPromo() {
  var xhr = new XMLHttpRequest();
var url = "promociones.json";

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    
    // Array para almacenar los datos requeridos
    var promocionesConDatos = [];

    // Iterar sobre cada objeto en el arreglo y obtener nombrePromo, price y vigencia
    for (var i = 0; i < data.length; i++) {
      var nombrePromo = data[i].nombrePromo;
      var precio = data[i].servicios[0].price; // Suponiendo que solo hay un servicio en cada promoción
      var vigencia = data[i].vigencia;
      
      // Agregar los datos al array de promocionesConDatos
      promocionesConDatos.push({ nombrePromo: nombrePromo, precio: precio, vigencia: vigencia });
    }

    // Imprimir los datos de las promociones
    console.log(promocionesConDatos);
  }
};

xhr.send();
  }