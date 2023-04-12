function validation(){
    if(document.Formfill.nameRegister.value != undefined){
     popup.classList.add("open-slide");
     return false;
    }

}

var popup = document.getElementById('popup');

function CloseSlide(){
    popup.classList.remove("open-slide")
}

//formulario de create 

/*window.addEventListener('load', function () {
 let formulario = document.querySelector('form.formCreate');

 formulario.addEventListener('submit',function(e) {
      const validationsResult = []; 
      e.preventDefault();
    let nombre = document.querySelector('input.form-input');
    if (nombre.value.length < 5) {
        alert('colocar nombre')
        validationsResult.push(result);
    }
    let description = document.querySelector('.description');
    if (description.value.length < 20) {
        alert('colocar description')
validationsResult.push(result);
    } 
 });

})*/
