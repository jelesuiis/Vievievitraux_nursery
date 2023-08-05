const envoyer = document.getElementById("envoyer");
const form = document.getElementById("form")
const popup = document.getElementById("popup");



  envoyer.addEventListener("click", function(event){
    event.preventDefault()
    if (form.checkValidity()){
        popup.style.visibility = "visible";
        form.style.visibility = "hidden";
    }
})














