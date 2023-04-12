window.addEventListener('load', function () {
 let formulario = document.querySelector('form.formCreate');

 formulario.addEventListener('submit',function(e) {
     
      e.preventDefault();
    let nombre = document.querySelector('input.form-input');
    if (nombre.value.length < 5) {
       alert('colocar nombre')
   
    }
    let description = document.querySelector('.description');
    if (description.value.length < 20) {
     alert('colocar description')

    } 
 });

})*/