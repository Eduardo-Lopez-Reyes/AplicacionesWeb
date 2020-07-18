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

//Obterner la referencia a la base de datos
const db=firebase.database();

//Obterner la referencia los elementos del formulario
const nombre=document.getElementById("txtNombre");
const comentario=document.getElementById("txtComentario");
const enviar=document.getElementById("btnEnviar");

enviar.addEventListener('click',function(){
  //Obterner los valores de los campos del formulario  
  let v_nom=nombre.value;
  let v_com=comentario.value;

  //Obterner la referencia de un nodo de la bd
  const nodo_r=db.ref("Comentarios");

  //Enviar los datos a la bd
  nodo_r.push({
    nombre:v_nom,
    comentario:v_com
  })
});