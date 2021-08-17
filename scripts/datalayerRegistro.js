window.addEventListener('load', function () {

  /*REGISTRO*/
  function setRegistro() {
    let timeout = 2000
    let signupButton = document.getElementById("cg-signup-final-button")
    if (!signupButton) return
    signupButton.addEventListener('click', function (e) {
      setTimeout(() => {
        let errorsBox = document.querySelectorAll('.cg-error-container');
        if (errorsBox.length != 0) {
          errorsBox.forEach(error => {
            console.log(error);
            let errorText = error.innerText;
            dataLayer.push({ 'event': 'ga_event', 'category': 'Registro', 'action': 'Error', 'label': errorText, 'value': '' });
          });
        } else {

          let successBox = document.querySelector("h2.colore-1.testo-grande");
          console.log(successBox)
          if (successBox.innerText == "Felicitaciones") {
            dataLayer.push({ 'event': 'ga_event', 'category': 'Registro', 'action': 'Exitoso', 'label': 'Registro exitoso', 'value': '' });
          }
        }
      }, timeout);
    })
  }
  setRegistro();

})