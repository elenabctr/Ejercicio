const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	clave: /^.{8}$/
}

const campos = {
	nombre: true,
	email: true,
	clave: true
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target,'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "clave":
			validarCampo(expresiones.clave, e.target, 'clave');
			validarClave2();
		break;
		case "clave2":
			validarClave2();
		break;
			}
	}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_datos-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_datos-correcto');
		document.querySelector(`#grupo_${campo} .formulario_input-invalido`).classList.remove('formulario_input-invalido-activo');
		campos[campo] = true;
		document.querySelectorAll('.formulario_input-error').forEach((obligatorios)=> {
			obligatorios.classList.remove('formulario_input-error-activo');
		})
		document.querySelectorAll('.formulario_datos-incorrecto').forEach((finales)=> {
			finales.classList.remove('formulario_datos-incorrecto');
		})
	} else {
			document.getElementById(`grupo_${campo}`).classList.add('formulario_datos-incorrecto');
			document.getElementById(`grupo_${campo}`).classList.remove('formulario_datos-correcto');
			document.querySelector(`#grupo_${campo} .formulario_input-invalido`).classList.add('formulario_input-invalido-activo');
			campos[campo] = false;
		}
}

const validarClave2 = () => {
	const inputClave1 = document.getElementById('clave');
	const inputClave2 = document.getElementById('clave2');

	if(inputClave1.value !== inputClave2.value){
		document.getElementById(`grupo_clave2`).classList.add('formulario_datos-incorrecto');
		document.getElementById(`grupo_clave2`).classList.remove('formulario_datos-correcto');
		document.querySelector(`#grupo_clave2 .formulario_input-invalido`).classList.add('formulario_input-invalido-activo');
		campos[campo] = false;

	} else {
		document.getElementById(`grupo_clave2`).classList.remove('formulario_datos-incorrecto');
		document.getElementById(`grupo_clave2`).classList.add('formulario_datos-correcto');
		document.querySelector(`#grupo_clave2 .formulario_input-invalido`).classList.remove('formulario_input-invalido-activo');
		campos[campo] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function popupAlerta() {
	if (nombre.value.length >1 && email.value.length >1 && clave.value.length >1) {
		window.alert("La inscripción ha sido correcta");
		formulario.reset();
		document.querySelectorAll('.formulario_datos-correcto').forEach((finales)=> {
			finales.classList.remove('formulario_datos-correcto');
		})
		document.querySelector(`#grupo_clave2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
		document.querySelectorAll('.formulario_input-error').forEach((obligatorios)=> {
			obligatorios.classList.remove('formulario_input-error-activo');
		})

	} else {
			document.querySelectorAll('.formulario_input-error').forEach((obligatorios)=> {
				obligatorios.classList.add('formulario_input-error-activo');
			})
			document.querySelectorAll('.formulario_datos').forEach((recuadros)=> {
				recuadros.classList.add('formulario_datos-incorrecto');
			})
	}
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.email && campos.clave){
		window.alert("La inscripción ha sido correcta");
		formulario.reset();
		document.querySelectorAll('.formulario_datos-correcto').forEach((finales)=> {
			finales.classList.remove('formulario_datos-correcto');
		})

	} else {
		document.querySelectorAll('.formulario_input-error').forEach((obligatorios)=> {
			obligatorios.classList.add('formulario_input-error-activo');
		})
		document.querySelectorAll('.formulario_datos').forEach((recuadros)=> {
			recuadros.classList.add('formulario_datos-incorrecto');
		});

		document.getElementById('rellena').classList.add('formulario_datos-incorrecto-activo');
		document.getElementById('rellena').classList.add('formulario_datos-incorrecto-activo');
		document.getElementById('rellena').classList.add('formulario_datos-incorrecto-activo');
		document.getElementById('rellena').classList.add('formulario_datos-incorrecto-activo');
	}
});
