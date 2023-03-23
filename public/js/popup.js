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