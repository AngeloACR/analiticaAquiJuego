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
    let recarga1 = document.getElementById("xp-deposit-method-scratch-card");
    let recarga2 = document.getElementById("xp-deposit-method-payu-cc");
    let recarga3 = document.getElementById("xp-deposit-method-astropay-pse");
    let recarga4 = document.getElementById("xp-deposit-method-payu-pse");
    let recarga5 = document.getElementById("xp-deposit-method-astropay-efecty");
    let recarga6 = document.getElementById("xp-deposit-method-payu-efecty");
    let recarga7 = document.getElementById("xp-deposit-method-astropay-baloto");
    let recarga8 = document.getElementById("xp-deposit-method-payu-baloto");
    let recarga9 = document.getElementById("xp-deposit-method-astropay-puntored");

    let id1 = "xp-deposit-method-scratch-card"
    let id2 = "xp-deposit-method-payu-cc"
    let id3 = "xp-deposit-method-astropay-pse"
    let id4 = "xp-deposit-method-payu-pse"
    let id5 = "xp-deposit-method-astropay-efecty"
    let id6 = "xp-deposit-method-payu-efecty"
    let id7 = "xp-deposit-method-astropay-baloto"
    let id8 = "xp-deposit-method-payu-baloto"
    let id9 = "xp-deposit-method-astropay-puntored"

    let depositButton1 = document.querySelector(`#${id1} div button.xp-deposit-button`);
    if (!depositButton1) return;

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

    })
    let depositButton2 = document.querySelector(`#${id2} div button.xp-deposit-button`);
    if (!depositButton2) return;

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
    let depositButton3 = document.querySelector(`#${id3} div button.xp-deposit-button`);
    if (!depositButton3) return;

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
    let depositButton4 = document.querySelector(`#${id4} div button.xp-deposit-button`);
    if (!depositButton4) return;

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
    let depositButton5 = document.querySelector(`#${id5} div button.xp-deposit-button`);
    if (!depositButton5) return;

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
    let depositButton6 = document.querySelector(`#${id6} div button.xp-deposit-button`);
    if (!depositButton6) return;

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
    let depositButton7 = document.querySelector(`#${id7} div button.xp-deposit-button`);
    if (!depositButton7) return;

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
    let depositButton8 = document.querySelector(`#${id8} div button.xp-deposit-button`);
    if (!depositButton8) return;

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
    let depositButton9 = document.querySelector(`#${id9} div button.xp-deposit-button`);
    if (!depositButton9) return;

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
    console.log(depositButton1);
    console.log(depositButton2);
    console.log(depositButton3);
    console.log(depositButton4);
    console.log(depositButton5);
    console.log(depositButton6);
    console.log(depositButton7);
    console.log(depositButton8);
    console.log(depositButton9);

  }
  setRecarga();

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

  }
  setRetiro();

})