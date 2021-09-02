window.addEventListener('load', function () {

  /*MI CUENTA*/

  function setCargaDocumento() {
    let uploadButton = document.getElementById("cg-uploadDocButton");
    if (!uploadButton) return;
    uploadButton.addEventListener('click', function (e) {
      console.log(e.target);
      dataLayer.push({ 'event': 'ga_event', 'category': 'Mi cuenta :: Cargar documento', 'action': 'Click​', 'label': 'Enviar', 'value': '' });
    })
  }
  setCargaDocumento();

  function setRecarga() {
    let recarga1 = document.querySelectorAll(".xp-metodi-pagamento div span")[1];
    let recarga2 = document.querySelectorAll(".xp-metodi-pagamento div span")[2];
    let recarga3 = document.querySelectorAll(".xp-metodi-pagamento div span")[3];
    let recarga4 = document.querySelectorAll(".xp-metodi-pagamento div span")[4];
    let recarga5 = document.querySelectorAll(".xp-metodi-pagamento div span")[5];
    let recarga6 = document.querySelectorAll(".xp-metodi-pagamento div span")[6];
    let recarga7 = document.querySelectorAll(".xp-metodi-pagamento div span")[7];
    let recarga8 = document.querySelectorAll(".xp-metodi-pagamento div span")[8];
    let recarga9 = document.querySelectorAll(".xp-metodi-pagamento div span")[9];


    let recarga1Set = false
    let recarga2Set = false
    let recarga3Set = false
    let recarga4Set = false
    let recarga5Set = false
    let recarga6Set = false
    let recarga7Set = false
    let recarga8Set = false
    let recarga9Set = false

    let id1 = "xp-deposit-method-scratch-card"
    let id2 = "xp-deposit-method-payu-cc"
    let id3 = "xp-deposit-method-astropay-pse"
    let id4 = "xp-deposit-method-payu-pse"
    let id5 = "xp-deposit-method-astropay-efecty"
    let id6 = "xp-deposit-method-payu-efecty"
    let id7 = "xp-deposit-method-astropay-baloto"
    let id8 = "xp-deposit-method-payu-baloto"
    let id9 = "xp-deposit-method-astropay-puntored"

    recarga1.addEventListener('click', function (e) {
      let depositButton1 = document.querySelector(`#${id1} div button.xp-deposit-button`);
      if (!depositButton1) return;
      if (!recarga1Set) return
      depositButton1.addEventLister('click', function (e) {
        let value = document.getElementById("scratch-card-code");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'scratch-card',
          'label': 'Depósito',
          'value': value
        });

        recarga1Set = true;
      })
    })
    recarga2.addEventListener('click', function (e) {
      let depositButton2 = document.querySelector(`#${id2} div button.xp-deposit-button`);
      if (!depositButton2) return;
      if (!recarga2Set) return
      depositButton2.addEventLister('click', function (e) {
        let value = document.getElementById("payu-cc-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'payu-cc',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga2Set = true;
    })
    recarga3.addEventListener('click', function (e) {
      let depositButton3 = document.querySelector(`#${id3} div button.xp-deposit-button`);
      if (!depositButton3) return;
      if (!recarga3Set) return
      depositButton3.addEventLister('click', function (e) {
        let value = document.getElementById("astropay-pse-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'astropay-pse',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga3Set = true;
    })
    recarga4.addEventListener('click', function (e) {
      let depositButton4 = document.querySelector(`#${id4} div button.xp-deposit-button`);
      if (!depositButton4) return;
      if (!recarga4Set) return
      depositButton4.addEventLister('click', function (e) {
        let value = document.getElementById("payu-pse-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'payu-pse',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga4Set = true;
    })
    recarga5.addEventListener('click', function (e) {
      let depositButton5 = document.querySelector(`#${id5} div button.xp-deposit-button`);
      if (!depositButton5) return;
      if (!recarga5Set) return
      depositButton5.addEventLister('click', function (e) {
        let value = document.getElementById("astropay-efecty-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'astropay-efecty',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga5Set = true;
    })
    recarga6.addEventListener('click', function (e) {
      let depositButton6 = document.querySelector(`#${id6} div button.xp-deposit-button`);
      if (!depositButton6) return;
      if (!recarga6Set) return
      depositButton6.addEventLister('click', function (e) {
        let value = document.getElementById("payu-efecty-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'payu-efecty',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga6Set = true;
    })
    recarga7.addEventListener('click', function (e) {
      let depositButton7 = document.querySelector(`#${id7} div button.xp-deposit-button`);
      if (!depositButton7) return;
      if (!recarga7Set) return
      depositButton7.addEventLister('click', function (e) {
        let value = document.getElementById("astropay-baloto-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'astropay-baloto',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga7Set = true;
    })
    recarga8.addEventListener('click', function (e) {
      let depositButton8 = document.querySelector(`#${id8} div button.xp-deposit-button`);
      if (!depositButton8) return;
      if (!recarga8Set) return
      depositButton8.addEventLister('click', function (e) {
        let value = document.getElementById("payu-baloto-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'payu-baloto',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga8Set = true;
    })
    recarga9.addEventListener('click', function (e) {
      let depositButton9 = document.querySelector(`#${id9} div button.xp-deposit-button`);
      if (!depositButton9) return;
      if (!recarga9Set) return
      depositButton9.addEventLister('click', function (e) {
        let value = document.getElementById("astropay-puntored-deposit-amount");
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Recargas',
          'action': 'astropay-puntored',
          'label': 'Depósito',
          'value': value
        });
      })
      recarga9Set = true;
    })
    recarga1.click();
  }

  function setRetiro() {
    let retiro1 = document.querySelectorAll(".xp-metodi-pagamento div span")[0];
    let retiro2 = document.querySelectorAll(".xp-metodi-pagamento div span")[1];
    let retiro3 = document.querySelectorAll(".xp-metodi-pagamento div span")[2];
    let retiro4 = document.querySelectorAll(".xp-metodi-pagamento div span")[3];
    let retiro1Set = false;
    let retiro2Set = false;
    let retiro3Set = false;
    let retiro4Set = false;
    retiro1.addEventListener('click', function (e) {
      let withdrawButton1 = document.querySelectorAll("#xp-withdraw-method-bonifico-bancario-co div button.xp-confirm-button")[0];
      if (!withdrawButton1) return;
      if (retiro1Set) return;
      withdrawButton1.addEventListener('click', function (e) {
        let value = document.getElementById("bonifico-bancario-co-withdrawal-amount").value;
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Retiros',
          'action': 'bonifico-bancario-co',
          'label': 'Retirar dinero',
          'value': value
        });
      })
      retiro1Set = true;
    })
    retiro2.addEventListener('click', function (e) {
      let withdrawButton2 = document.querySelectorAll("#xp-withdraw-method-voucher div button.xp-confirm-button")[0];
      if (!withdrawButton2) return;
      if (retiro2Set) return;
      withdrawButton2.addEventListener('click', function (e) {
        let value = document.getElementById("voucher-withdrawal-amount").value;
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Retiros',
          'action': 'voucher',
          'label': 'Retirar dinero',
          'value': value
        });
      })
      retiro2Set = true;
    })
    retiro3.addEventListener('click', function (e) {
      let withdrawButton3 = document.querySelectorAll("#xp-withdraw-method-voucher-efecty div button.xp-confirm-button")[0];
      if (!withdrawButton3) return;
      if (retiro3Set) return;
      withdrawButton3.addEventListener('click', function (e) {
        let value = document.getElementById("voucher-efecty-withdrawal-amount").value;
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Retiros',
          'action': 'voucher-efecty',
          'label': 'Retirar dinero',
          'value': value
        });
      })
      retiro3Set = true;
    })
    retiro4.addEventListener('click', function (e) {
      let withdrawButton4 = document.querySelectorAll("#xp-withdraw-method-astropay-bonifico-bancario-co div button.xp-confirm-button")[0];
      if (!withdrawButton4) return;
      if (retiro4Set) return;
      withdrawButton4.addEventListener('click', function (e) {
        let value = document.getElementById("astropay-bonifico-bancario-co-withdrawal-amount").value;
        console.log(value)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Mi cuenta :: Retiros',
          'action': 'astropay-bonifico-bancario-co',
          'label': 'Retirar dinero',
          'value': value
        });
      })
      retiro4Set = true;
    })
    retiro1.click();
  }
  setTimeout(() => {
    setRecarga();
    setRetiro();
  }, 7000);
})