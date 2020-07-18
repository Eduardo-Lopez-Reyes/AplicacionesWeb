  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAj2Iqu__UCEFemZIF3NHldxXA8tTP7nBk",
    authDomain: "proyecto1firebase-92670.firebaseapp.com",
    databaseURL: "https://proyecto1firebase-92670.firebaseio.com",
    projectId: "proyecto1firebase-92670",
    storageBucket: "proyecto1firebase-92670.appspot.com",
    messagingSenderId: "508740821294",
    appId: "1:508740821294:web:1f61218ef7bb3e4f981abf"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Obtener la referencia a la bd
  let referencia_bd=firebase.database();
  
  let ref_titulo=referencia_bd.ref("titulo");

  //Obtener la referencia del elemento H3
  let eh3=document.getElementById("encabezado"); 

  //Asignar el contenido del nodeo 'titulo' de la BD  al elemento h3

  ref_titulo.on('value',function(contenido){
    eh3.innerHTML=contenido.val();
  });