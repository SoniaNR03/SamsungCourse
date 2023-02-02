const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("clave2");
let finish = false;




form.addEventListener('submit', (e) =>{
    if(finish == false){
        e.preventDefault();
        validateInputs();
    }else{
        alert("Todo correcto");
    }
    

});


const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')



}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}



const validateInputs = () =>{
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const claveValue = clave.value.trim();
    const clave2Value = clave2.value.trim();
    let numValidation = 0;

    // nombre
    if(nombreValue === ''){
        setError(nombre,'Rellene este campo');
    }else if(nombreValue.match(/[0-9]/)){
        setError(nombre,'El nombre no puede contener números');
    }else{
        setSuccess(nombre);
        numValidation += 1;
    }

    // email
    if(emailValue === ''){
        setError(email,'Rellene este campo');
    }else if(!emailValue.match(pattern)){
        setError(email,'Email inválido');
    }else{
        setSuccess(email);
        numValidation += 1;
    }
    // clave
    if(claveValue === ''){
        setError(clave,'Rellene este campo');
    }else if(claveValue.length > 8){
        setError(clave,'No debe tener más de 8 caracteres');
    }else{
        setSuccess(clave);
        numValidation += 1;
    }

    // clave2
    if(clave2Value === ''){
        setError(clave2,'Rellene este campo');
    }else if(clave2Value !== claveValue){
        setError(clave2,'No coinciden');
    }else{
        setSuccess(clave2);
        numValidation += 1;
    }
    if (numValidation == 4){
        finish = true;
    }

};



