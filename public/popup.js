function validation(){
    if(document.Formfill.passwordRegister.value == document.Formfill.cPasswordRegister.value){
     popup.classList.add("open-slide");
     return false;
    }

}

var popup = document.getElementById('popup');

function CloseSlide(){
    popup.classList.remove("open-slide")
}