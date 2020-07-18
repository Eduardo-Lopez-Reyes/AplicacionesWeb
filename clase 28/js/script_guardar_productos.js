 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEh90PdmZ44ppzaJNW73hImDyJWnPK9uA",
    authDomain: "bdappweb-e2ca0.firebaseapp.com",
    databaseURL: "https://bdappweb-e2ca0.firebaseio.com",
    projectId: "bdappweb-e2ca0",
    storageBucket: "bdappweb-e2ca0.appspot.com",
    messagingSenderId: "130856185006",
    appId: "1:130856185006:web:64bec84063cb07263fd13f",
    measurementId: "G-VG6LNS11RF"
  };

 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Obtener la referencia de la BD
const bd=firebase.database();
const nodo_bd=bd.ref('productos');

//Obtener la referencia del formulario
const cod_producto=document.getElementById('txtCodProd');
const nom_producto=document.getElementById('txtNomProd');
const desc_producto=document.getElementById('txtDescProd');
const txt_tallas=document.getElementById('txtTallas');
const txt_colores=document.getElementById('txtColores');
const lst_tipo=document.getElementById('sltTipo');
const img_prod=document.getElementById('txtFile');
const btn_guardar=document.getElementById('btnGuardar');

//Iniciar los elementos del formulario (Materialize)
document.addEventListener('DOMContentLoaded',function(){
	let lista=document.querySelector('select');
	let init_lista=M.FormSelect.init(lista);

	//mostrar el contenido de la bd
	obtener_productos();
});

//Obtener la meta información de la imagen
var info_imagen;
img_prod.addEventListener('change',function(){
	let info=new FileReader();
	info.readAsDataURL(this.files[0]);

	info.onloadend=function(){
		info_imagen=info.result;
	};
});

//Asignar el escuchador al boton del formulario
btn_guardar.addEventListener('click',function(){
	if (!info_imagen) {
		info_imagen="none"
	}

	//enviar la informacion a la BD
	nodo_bd.push({
		codigo:cod_producto.value,
		nombre:nom_producto.value,
		descripcion:desc_producto.value,
		tallas:txt_tallas.value,
		colores:txt_colores.value,
		tipo:lst_tipo.value,
		imagen:info_imagen
	});
});

//Obtener la información  de la base de datos
function obtener_productos(){
	var productos={};
	var cont_prod=document.getElementById('contenido_productos');

	//consultar la base de datos
	nodo_bd.on('value',function(info){
		productos=info.val();

		//asegurar que el elemento ,contenido_productos este vació
		cont_prod.innerHTML="";

		//recolectar el objeto 'productos' para mostrar los valores ontenidos en la bd
		Object.keys(productos).forEach(function(indice){
			let card="<div class='col s4'>";
				card+="<div class='card'>"+
					"<div class='card-image'>"+
							"<img src='"+productos[indice].imagen+"'>"+
							"<span class='card-title'>"+productos[indice].nombre+"</sapan>"+
						"</div>"+
						"<div class='card-content'>"+
								"<p>"+productos[indice].descripcion+"</p>"+
								"<p>"+productos[indice].tipo+"</p>"+
								"<p>"+productos[indice].tallas+"</p>"+
								"<p>"+productos[indice].colores+"</p>"+
							 "</div>"+ 
						"</div>"+
					"</div>";

				cont_prod.innerHTML+=card;
		});

	});
};
