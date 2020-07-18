const first_name=document.getElementById('txtFirstName');
const last_name=document.getElementById('txtLastName');
const email=document.getElementById('txtEmail');
const passwd=document.getElementById('txtPassword');
const passwd2=document.getElementById('txtPassword2');
const lista=document.getElementById('lstGenero')
const radios=document.getElementsByName('rdoColor')
const chk_uno=document.getElementById('chkUno')
const chk_dos=document.getElementById('chkDos')

const boton=document.getElementById('btnRegister');

//first_name.value;
boton.addEventListener('click',function(){
	let color=document.querySelector('input[name=rdoColor]:checked');
	alert("First Name:"+first_name.value+"\nLast Name:"+last_name.value+
		"\nEmail:"+email.value+"\nGenero:"+lista.value+
		"\nColor: "+color.value);
	if (chk_uno.checked==true) {
		alert("Valor Seleccionado:"+chk_uno.value)
	}
	if (chk_dos.checked==true) {
		alert("Valor Seleccionado:"+chk_dos.value)
	}
});

passwd2.addEventListener('focusout',function(){
	if (passwd.value!=passwd2.value){
		alert("las contraseñas no son iguales");
		passwd2.value="";
		passwd2.focus();
	}
});

//Se inicializa la lista (select) del formulario
document.addEventListener('DOMContentLoaded',function(){
	let lista=document.querySelectorAll('select');
	let inst=M.FormSelect.init(lista)
});