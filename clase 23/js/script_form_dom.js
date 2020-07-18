const first_name=document.getElementById('txtFirstName');
const last_name=document.getElementById('txtLastName');
const boton=document.getElementById('btnRegister');

//first_name.value;
boton.addEventListener('click',function(){
	alert("First Name:"+first_name.value+"\nLast Name:"+last_name.value);
});