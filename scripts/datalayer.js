window.addEventListener('load', function () {

  /*HOME*/
  let envivoSet = false;
  function setTranversal() {
    let login = document.querySelectorAll(".bottone.bottone-login")[0]
    if (!login) return;
    let registro = document.querySelectorAll(".bottone.bottone-login")[1]
    if (!registro) return;
    console.log(login)
    console.log(registro)
    login.addEventListener('click', function (e) {
      let label = 'Login'
      console.log(label);
      dataLayer.push({ 'event': 'ga_event', 'category': 'Botones Login', 'action': 'Click​', 'label': label, 'value': '' });
    })
    registro.addEventListener('click', function (e) {
      let label = 'Registro'
      console.log(label)
      dataLayer.push({ 'event': 'ga_event', 'category': 'Botones Login', 'action': 'Click​', 'label': label, 'value': '' });
    })
  }
  setTranversal();

  function setMenuPrincipal() {
    let menuPrincipal = document.querySelectorAll(".menu-principale-barra .menu-principale li");
    if (!menuPrincipal) return;
    menuPrincipal.forEach(menu => {
      if (!menu) return;
      let menuText = menu.innerText;
      console.log(menuText);
      menu.addEventListener('click', function (e) {
        let menuText = menu.querySelector("a").innerText;
        console.log(menuText);
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Menú principal',
          'action': 'Click',
          'label': menuText,
          'value': ''
        });
        if (menuText == 'EN VIVO' && !envivoSet) {
          setTimeout(() => {

            setApuestasLive();
            setApuestasBorradasLive();
            setApuestasBotonesLive();
            envivoSet = true;
          }, 3000);
        }
      })
    });
  }
  setMenuPrincipal();

  function setBanners() {
    let bannerIzquierda = document.querySelector("#sidebar-sx .banner-widget-dx a img")
    if (!bannerIzquierda) return;
    let bannersCentro = document.querySelectorAll("#carosello-sport-1 div .carousel-item.pointer img")
    if (!bannersCentro) return;
    let bannerDerecha = document.querySelector("#sidebar-dx .banner-widget-dx a img")
    if (!bannerDerecha) return;
    let imgSrcIzq = bannerIzquierda.src;
    let idIzq = imgSrcIzq;
    let nameIzq = imgSrcIzq;
    let creativeIzq = imgSrcIzq;
    let promoObjIzq = {
      id: idIzq,
      name: nameIzq,
      creative: creativeIzq
    }
    dataLayer.push({
      'event': 'ga_event',
      'category': 'Apuestas :: Banners',
      'action': 'Home-BannerIzquierda',
      'label': imgSrcIzq,
      'value': ''
    });
    bannerIzquierda.addEventListener('click', function (e) {
      let imgSrc = e.target.src;
      console.log(imgSrc);
      dataLayer.push({
        'event': 'promotionClick',
        'ecommerce': {
          'promoClick': {
            'promotions': [
              {
                'id': promoObjIzq.id,
                'name': promoObjIzq.name,
                'creative': promoObjIzq.creative,
                'position': "Home-BannerIzquierda"
              },
            ]
          }
        }
      });

    })
    dataLayer.push({
      'event': 'promoview',
      'ecommerce': {
        'promoView': {
          'promotions': [
            {
              'id': promoObjIzq.id,
              'name': promoObjIzq.name,
              'creative': promoObjIzq.creative,
              'position': "Home-BannerIzquierda"
            },
          ]
        }
      }
    });
    bannersCentro.forEach((banner, index) => {


      let imgSrcCentro = banner.src;
      let idCentro = imgSrcCentro;
      let nameCentro = imgSrcCentro;
      let creativeCentro = imgSrcCentro;
      let promoObj = {
        id: idCentro,
        name: nameCentro,
        creative: creativeCentro
      }
      dataLayer.push({
        'event': 'ga_event',
        'category': 'Apuestas :: Banners',
        'action': `Home-BannerMedio-${index}`,
        'label': imgSrcCentro,
        'value': ''
      });

      banner.addEventListener('click', function (e) {
        let imgSrc = e.target.src;
        console.log(imgSrc);
        dataLayer.push({
          'event': 'promotionClick',
          'ecommerce': {
            'promoClick': {
              'promotions': [
                {
                  'id': promoObj.id,
                  'name': promoObj.name,
                  'creative': promoObj.creative,
                  'position': `Home-BannerMedio-${index}`
                },
              ]
            }
          }
        });

      });
      dataLayer.push({
        'event': 'promoview',
        'ecommerce': {
          'promoView': {
            'promotions': [
              {
                'id': promoObj.id,
                'name': promoObj.name,
                'creative': promoObj.creative,
                'position': `Home-BannerMedio-${index}`
              },
            ]
          }
        }
      });
    })

    let imgSrcDer = bannerDerecha.src;
    let idDer = imgSrcDer;
    let nameDer = imgSrcDer;
    let creativeDer = imgSrcDer;
    let promoObjDer = {
      id: idDer,
      name: nameDer,
      creative: creativeDer
    }

    dataLayer.push({
      'event': 'ga_event',
      'category': 'Apuestas :: Banners',
      'action': 'Home-BannerDerecho',
      'label': imgSrcDer,
      'value': ''
    });
    bannerDerecha.addEventListener('click', function (e) {
      let imgSrc = e.target.src;
      console.log(imgSrc);
      dataLayer.push({
        'event': 'promotionClick',
        'ecommerce': {
          'promoClick': {
            'promotions': [
              {
                'id': promoObjDer.id,
                'name': promoObjDer.name,
                'creative': promoObjDer.creative,
                'position': "Home-BannerDerecho"
              },
            ]
          }
        }
      });

    })
    dataLayer.push({
      'event': 'promoview',
      'ecommerce': {
        'promoView': {
          'promotions': [
            {
              'id': promoObjDer.id,
              'name': promoObjDer.name,
              'creative': promoObjDer.creative,
              'position': "Home-BannerDerecho"
            },
          ]
        }
      }
    });
  }
  setBanners();

  function setFiltroLateral() {
    let filtrosHorarios = document.querySelectorAll("#sidebar-sx .fasce-orarie span");
    if (!filtrosHorarios) return;
    filtrosHorarios.forEach(element => {
      let label = element.innerText;
      console.log(label);

      element.addEventListener('click', function (e) {
        let label = e.target.innerText;
        console.log(label);
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Apuestas :: Menú lateral',
          'action': 'Click :: Filtro días',
          'label': label,
          'value': ''
        });
      });
    });
    let filtrosDiarios = document.querySelectorAll("#sidebar-sx .filtro-settimana a");
    if (!filtrosDiarios) return;
    filtrosDiarios.forEach(element => {
      let label = element.innerText;
      console.log(label);

      element.addEventListener('click', function (e) {
        let label = e.target.innerText;
        console.log(label);
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Apuestas :: Menú lateral',
          'action': 'Click :: Filtro días de la semana',
          'label': label,
          'value': ''
        });
      });
    });
    let busqueda = document.querySelector("#sidebar-sx .widget-ricerca-side #match-search-input");
    if (!busqueda) return;
    let label = element.value;
    console.log(label);
    busqueda.addEventListener('keyup', function (e) {
      let label = e.target.value;
      console.log(label);
      dataLayer.push({
        'event': 'ga_event',
        'category': 'Apuestas :: Menú lateral',
        'action': 'Click :: Buscador',
        'label': label,
        'value': ''
      });
    });
  }
  setFiltroLateral();

  function setDeportesSeleccionados() {
    let firstTime = true;
    let deportes = document.querySelectorAll("#sidebar-sx .widget-competizioni-side .contenitore-competizioni-sport .card.elemento-competizioni-widget")
    if (!deportes) return;
    deportes.forEach((deporte, index) => {
      if (index == 0) {
        let destacadosItems = deporte.querySelectorAll("#filtro-in-evidenza-content .regione-widget")
        destacadosItems.forEach(destacado => {
          let nombre = destacado.querySelector(".elemento-competizioni-widget").innerText;
          let destacadosList = destacado.querySelectorAll(".competizione-sub .elemento-competizioni-widget");
          console.log(destacadosList);
          destacadosList.forEach(item => {
            let liga = item.innerText;
            item.addEventListener('click', function (e) {
              dataLayer.push({
                'event': 'ga_event',
                'category': 'Apuestas :: Menú lateral',
                'action': 'Click :: Destacados',
                'label': liga,
                'value': ''
              });
              setTimeout(() => {
                setApuestasHome();
              }, 2000);
            })
          });
        });
      } else {
        console.log(deporte);
        let nombre = deporte.querySelector(".titolo-accordion").innerText;
        let deportesRegions = deporte.querySelectorAll("div .regione-widget");
        deportesRegions.forEach(region => {

          let pais = region.querySelector(".elemento-competizioni-widget").innerText;
          let items = region.querySelectorAll(".competizione-sub a div")
          items.forEach(item => {

            let liga = item.innerText;
            item.addEventListener('click', function (e) {
              dataLayer.push({
                'event': 'ga_event',
                'category': 'Apuestas :: Menú lateral',
                'action': `Deportes :: ${nombre}`,
                'label': `${pais} :: ${liga}`,
                'value': ''
              });
              setTimeout(() => {

                setApuestasHome();
              }, 2000);
            })
          });
        });
      }

    });
    firstTime = false;
  }
  setDeportesSeleccionados();

  function setCompetenciasSeleccionadas() {
    let competencias = document.querySelectorAll('#sidebar-sx .widget-competizioni-side .apri-partite-in-evidenza a')
    if (!competencias) return;
    competencias.forEach(competencia => {
      let nombre = competencia.innerText
      competencia.addEventListener('click', function (e) {
        dataLayer.push(
          {
            'event': 'ga_event',
            'category': 'Apuestas :: Menú lateral',
            'action': 'Click',
            'label': nombre,
            'value': ''
          });
      })
    });
  }
  setCompetenciasSeleccionadas();


  function setItemsTabla(box) {
    let itemsTabla = box.querySelectorAll(".tab-content div div div div div")
    itemsTabla.forEach(item => {
      let apuestaTabla = item.innerText;
      console.log(item)
      console.log(item.onclick)
      item.addEventListener('click', function (e) {
        console.log(apuestaTabla);

      })
    });

  }
  function setApuestasHome() {
    let boxs = document.querySelectorAll('.competizione-sport')
    if (!boxs) return
    console.log(boxs)
    boxs.forEach(box => {
      let nombres = box.querySelector(".titolo-blocco-sport .nome-competizione-sport .grassetto").innerText.split("-")
      let deporte = nombres[0];
      let pais = nombres[1];
      let boxLiga = nombres[nombres.length - 1].split(" (")[0]

      let apuestasPartidos = box.querySelectorAll(".contenitoreRiga");
      apuestasPartidos.forEach(apuestaPartido => {

        let partidos = apuestaPartido.querySelectorAll(".tabellaQuoteSquadre")
        let equipos = "";
        partidos.forEach(partido => {
          equipos = partido.querySelectorAll("p")
          equipos = [...equipos].map(equipo => {
            return equipo.innerText
          })
          equipos = equipos.join(" ");
        });

        let action = `${nombres[0]} :: ${nombres[nombres.length - 1]}`
        console.log(action);
        let apuestas = apuestaPartido.querySelectorAll(".tabellaQuoteContenitoreQuotazioni .contenitoreSetQuotazioni")
        apuestas.forEach(apuesta => {
          let nombreApuesta = apuesta.querySelector(".tipologiaQuotazione_FormaCompatta").innerText;
          let eleccionesApuestas = apuesta.querySelectorAll("div .contenitoreSingolaQuota")
          eleccionesApuestas.forEach(eleccionApuesta => {
            eleccionApuesta.addEventListener('click', function (e) {
              let eleccionInfo = eleccionApuesta.querySelectorAll("p")
              eleccionInfo = [...eleccionInfo].map(item => {
                return item.innerText
              })
              eleccionInfo = eleccionInfo.join(" ");

              let data = {
                nombreApuesta,
                deporte,
                boxLiga,
                equipos,
                eleccionInfo,
                action
              }

              let apuesta = {
                'name': deporte,
                'id': boxLiga,
                'price': "",
                'brand': pais,
                'category': "Home",
                'variant': "Principal",
                'quantity': 1,
                'dimension1': nombreApuesta,
                'dimension2': eleccionApuesta,
                'dimension3': equipos
              }
              console.log(data)
              dataLayer.push({
                'event': 'ga_event',
                'category': 'Agregar al Carrito',
                'action': `${deporte} :: ${boxLiga}`,
                'label': `${nombreApuesta} :: ${eleccionInfo}`,
                'value': ''
              });
              dataLayer.push({
                'event': 'addToCart',
                'ecommerce': {
                  'currencyCode': 'COP',
                  'add': {
                    'actionField': {
                      'list': "Home"
                    },
                    'products': [apuesta]
                  }
                }
              });
              setTimeout(() => {
                setApuestasBorradasHome()
                setApuestasBotonesHome()
              }, 2000);
            })

          });
        });
      });
      //setItemsTabla(box)

    });
  }
  function setApuestasBorradasHome() {
    let carrito = document.querySelector(".carrello-scrollable");
    if (!carrito) return
    let productos = document.querySelectorAll(".grid-schedina.grid-schedina-mobile.grid-schedina-multipla");
    productos.forEach(producto => {
      let papelera = producto.querySelector(".grid-schedina-intestazione button i");
      papelera.addEventListener("click", function (e) {
        let [deporte, liga] = producto.querySelector(".grid-schedina-intestazione_contenitore-testo p").innerText.split("-");
        let pais = "";
        let cuerpo = producto.querySelector(".grid-schedina-body")
        let equipos = [...cuerpo.querySelectorAll(".grid-schedina-body_evento div")].map(texto => {
          return texto.innerText
        }).join(" ");
        let apuestas = [...cuerpo.querySelectorAll(".grid-schedina-body_quote-riga")].map(texto => {
          let descripcion = texto.querySelector(".grid-schedina-body_quote-riga_descrizione-quota")
          let valor = texto.querySelector(".grid-schedina-body_quote-riga_valore-quota")
          let apuesta = {
            nombre: descripcion.innerText.split(":")[0],
            eleccion: descripcion.innerText.split(":")[1],
            valor: valor.innerText
          }
          return apuesta
        });

        let nombreApuesta = ""
        let eleccionApuesta = ""
        let valorApuesta = ""
        apuestas.forEach(apuesta => {
          nombreApuesta = `${nombreApuesta}${apuesta.nombre}`
          eleccionApuesta = `${eleccionApuesta}${apuesta.eleccion}`
          valorApuesta = `${valorApuesta}${apuesta.valor}`
        });

        let apuesta = {
          'name': deporte,
          'id': liga,
          'price': valorApuesta,
          'brand': pais,
          'category': "Home",
          'variant': "Principal",
          'quantity': 1,
          'dimension1': nombreApuesta,
          'dimension2': eleccionApuesta,
          'dimension3': equipos
        }
        console.log(apuesta)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Quitar del Carrito',
          'action': `${deporte} :: ${liga}`,
          'label': `${nombreApuesta} :: ${eleccionApuesta}`,
          'value': ''
        });
        dataLayer.push({
          'event': 'removeFromCart',
          'ecommerce': {
            'currencyCode': 'COP',
            'remove': {
              'products': [apuesta]
            }
          }
        });
      })
    });
  }
  function setApuestasBotonesHome() {

    let carrito = document.querySelector(".carrello-fixed");
    if (!carrito) return

    let botones = carrito.querySelectorAll(".bottoni-schedina .bottone")
    let botonComprar = carrito.querySelector(".bottoni-schedina .bottone.bg-verde")
    botones.forEach(boton => {
      boton.addEventListener('click', function (e) {

        let productos = document.querySelectorAll(".grid-schedina.grid-schedina-mobile.grid-schedina-multipla");
        let nombresApuestas = [];
        let eleccionesApuestas = [];
        let valoresApuestas = [];
        let deportes = [];
        let ligas = [];
        let paises = []
        let partidos = []
        productos.forEach(producto => {
          let [deporte, liga] = producto.querySelector(".grid-schedina-intestazione_contenitore-testo p").innerText.split("-");
          let pais = "";
          let cuerpo = producto.querySelector(".grid-schedina-body")
          let equipos = [...cuerpo.querySelectorAll(".grid-schedina-body_evento div")].map(texto => {
            return texto.innerText
          }).join(" ");
          let apuestas = [...cuerpo.querySelectorAll(".grid-schedina-body_quote-riga")].map(texto => {
            let descripcion = texto.querySelector(".grid-schedina-body_quote-riga_descrizione-quota")
            let valor = texto.querySelector(".grid-schedina-body_quote-riga_valore-quota")
            let apuesta = {
              nombre: descripcion.innerText.split(":")[0],
              eleccion: descripcion.innerText.split(":")[1],
              valor: valor.innerText
            }
            return apuesta
          });

          let nombreApuesta = ""
          let eleccionApuesta = ""
          let valorApuesta = ""
          apuestas.forEach(apuesta => {
            nombreApuesta = `${nombreApuesta}${apuesta.nombre}`
            eleccionApuesta = `${eleccionApuesta}${apuesta.eleccion}`
            valorApuesta = `${valorApuesta}${apuesta.valor}`
          });
          nombresApuestas.push(nombreApuesta);
          eleccionesApuestas.push(eleccionApuesta);
          valoresApuestas.push(valorApuesta);
          deportes.push(deporte);
          ligas.push(liga);
          paises.push(pais);
          partidos.push(equipo)
        });
        let data = {
          name: deportes,
          id: ligas,
          price: valoresApuestas,
          brand: paises,
          category: "Home",
          quantity: 1,
          dimension1: nombresApuestas,
          dimension2: eleccionesApuestas,
          dimension3: partidos
        }
        console.log(data)

        let label = boton.innerText;
        dataLayer.push({
          'event': 'ga_event',
          'category': `Comprar :: ${label}`,
          'action': `${data.deporte} :: ${data.liga}`,
          'label': `${data.dimension1} :: ${data.dimension2}`,
          'value': `${data.price}`
        });
        if (label.toUpperCase() == "COMPRAR") {
          setTimeout(() => {
            setApuestasCompraHome(data);
          }, 1000);
        }
      })
    });
  }
  function setApuestasCompraHome(data) {
    let carrito = document.querySelector(".carrello-fixed");
    if (!carrito) return
    let monto = carrito.querySelector("div .valore-importo-totale-carrello").innerText.split(" ")[0];
    let botones = carrito.querySelectorAll(".bottoni-schedina .bottone")
    let botonConfirmar = carrito.querySelector(".bottoni-schedina .bottone.bg-blu")
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {
            'step': "Comprar"
          },
          'products': [data]
        }
      }
    });
    botonConfirmar.addEventListener('click', function (e) {
      let time = Date.now();
      let loginSession = localStorage.getItem("loginMessageSession");
      let orderID = `${loginSession} :: time`;
      dataLayer.push({
        'event': 'transaction',
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': orderID,
              'affiliation': "Aquijuego",
              'revenue': monto,
            },
            'products': [data]
          }
        }
      });
    })

  }

  /*EN VIVO*/

  function setApuestasLive() {
    let boxs = document.querySelectorAll('.contenitore-table')
    if (!boxs) return;
    console.log(boxs)
    boxs.forEach(box => {
      if (!box) return;
      let nombres = box.querySelector(".titolo-competizione-live span").innerText.split("-")
      let deporte = nombres[0];
      let pais = nombres[1];
      let boxLiga = nombres[nombres.length - 1].split(" (")[0]

      let apuestasPartidos = box.querySelectorAll(".tabellaQuoteNew");
      apuestasPartidos.forEach(apuestaPartido => {

        let partidos = apuestaPartido.querySelectorAll(".tabellaQuoteSquadre")
        let equipos = "";
        partidos.forEach(partido => {
          equipos = partido.querySelectorAll("p")
          equipos = [...equipos].map(equipo => {
            return equipo.innerText
          })
          equipos = equipos.join(" ");
        });

        let action = `${nombres[0]} :: ${nombres[nombres.length - 1]}`
        console.log(action);
        let apuestas = apuestaPartido.querySelectorAll(".tabellaQuoteContenitoreQuotazioni .contenitoreSetQuotazioni")
        apuestas.forEach(apuesta => {
          let nombreApuesta = apuesta.querySelector(".tipologiaQuotazione_FormaCompatta").innerText;
          let eleccionesApuestas = apuesta.querySelectorAll("div .contenitoreSingolaQuota")
          eleccionesApuestas.forEach(eleccionApuesta => {
            eleccionApuesta.addEventListener('click', function (e) {
              let eleccionInfo = eleccionApuesta.querySelectorAll("p")
              eleccionInfo = [...eleccionInfo].map(item => {
                return item.innerText
              })
              eleccionInfo = eleccionInfo.join(" ");

              let data = {
                nombreApuesta,
                deporte,
                boxLiga,
                equipos,
                eleccionInfo,
                action
              }

              let apuesta = {
                'name': deporte,
                'id': boxLiga,
                'price': "",
                'brand': pais,
                'category': "En Vivo",
                'variant': "Principal",
                'quantity': 1,
                'dimension1': nombreApuesta,
                'dimension2': eleccionApuesta,
                'dimension3': equipos
              }
              console.log(data)
              dataLayer.push({
                'event': 'ga_event',
                'category': 'Agregar al Carrito',
                'action': `${deporte} :: ${boxLiga}`,
                'label': `${nombreApuesta} :: ${eleccionInfo}`,
                'value': ''
              });
              dataLayer.push({
                'event': 'addToCart',
                'ecommerce': {
                  'currencyCode': 'COP',
                  'add': {
                    'actionField': {
                      'list': "En Vivo"
                    },
                    'products': [apuesta]
                  }
                }
              });
              setTimeout(() => {
                setApuestasBorradasLive()
                setApuestasBotonesLive()
              }, 2000);
            })

          });
        });
      });
      //setItemsTabla(box)

    });
  }
  function setApuestasBorradasLive() {
    let carrito = document.querySelector(".carrello-scrollable");
    if (!carrito) return
    let productos = document.querySelectorAll(".grid-schedina.grid-schedina-mobile.grid-schedina-multipla");
    productos.forEach(producto => {
      let papelera = producto.querySelector(".grid-schedina-intestazione button i");
      papelera.addEventListener("click", function (e) {
        console.log("Borrando...")
        let [deporte, liga] = producto.querySelector(".grid-schedina-intestazione_contenitore-testo p").innerText.split("-");
        let pais = "";
        let cuerpo = producto.querySelector(".grid-schedina-body")
        let equipos = [...cuerpo.querySelectorAll(".grid-schedina-body_evento div")].map(texto => {
          return texto.innerText
        }).join(" ");
        let apuestas = [...cuerpo.querySelectorAll(".grid-schedina-body_quote-riga")].map(texto => {
          let descripcion = texto.querySelector(".grid-schedina-body_quote-riga_descrizione-quota")
          let valor = texto.querySelector(".grid-schedina-body_quote-riga_valore-quota")
          let apuesta = {
            nombre: descripcion.innerText.split(":")[0],
            eleccion: descripcion.innerText.split(":")[1],
            valor: valor.innerText
          }
          return apuesta
        });

        let nombreApuesta = ""
        let eleccionApuesta = ""
        let valorApuesta = ""
        apuestas.forEach(apuesta => {
          nombreApuesta = `${nombreApuesta}${apuesta.nombre}`
          eleccionApuesta = `${eleccionApuesta}${apuesta.eleccion}`
          valorApuesta = `${valorApuesta}${apuesta.valor}`
        });

        let apuesta = {
          'name': deporte,
          'id': liga,
          'price': valorApuesta,
          'brand': pais,
          'category': "En Vivo",
          'variant': "Principal",
          'quantity': 1,
          'dimension1': nombreApuesta,
          'dimension2': eleccionApuesta,
          'dimension3': equipos
        }
        console.log(apuesta)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Quitar del Carrito',
          'action': `${deporte} :: ${liga}`,
          'label': `${nombreApuesta} :: ${eleccionApuesta}`,
          'value': ''
        });
        dataLayer.push({
          'event': 'removeFromCart',
          'ecommerce': {
            'currencyCode': 'COP',
            'remove': {
              'products': [apuesta]
            }
          }
        });
      })
    });
  }
  function setApuestasBotonesLive() {

    let carrito = document.querySelector(".carrello-fixed");
    if (!carrito) return

    let botones = carrito.querySelectorAll(".bottoni-schedina .bottone")
    let botonComprar = carrito.querySelector(".bottoni-schedina .bottone.bg-verde")
    botones.forEach(boton => {
      boton.addEventListener('click', function (e) {

        let productos = document.querySelectorAll(".grid-schedina.grid-schedina-mobile.grid-schedina-multipla");
        let nombresApuestas = [];
        let eleccionesApuestas = [];
        let valoresApuestas = [];
        let deportes = [];
        let ligas = [];
        let paises = []
        let partidos = []
        productos.forEach(producto => {
          let [deporte, liga] = producto.querySelector(".grid-schedina-intestazione_contenitore-testo p").innerText.split("-");
          let pais = "";
          let cuerpo = producto.querySelector(".grid-schedina-body")
          let equipos = [...cuerpo.querySelectorAll(".grid-schedina-body_evento div")].map(texto => {
            return texto.innerText
          }).join(" ");
          let apuestas = [...cuerpo.querySelectorAll(".grid-schedina-body_quote-riga")].map(texto => {
            let descripcion = texto.querySelector(".grid-schedina-body_quote-riga_descrizione-quota")
            let valor = texto.querySelector(".grid-schedina-body_quote-riga_valore-quota")
            let apuesta = {
              nombre: descripcion.innerText.split(":")[0],
              eleccion: descripcion.innerText.split(":")[1],
              valor: valor.innerText
            }
            return apuesta
          });

          let nombreApuesta = ""
          let eleccionApuesta = ""
          let valorApuesta = ""
          apuestas.forEach(apuesta => {
            nombreApuesta = `${nombreApuesta}${apuesta.nombre}`
            eleccionApuesta = `${eleccionApuesta}${apuesta.eleccion}`
            valorApuesta = `${valorApuesta}${apuesta.valor}`
          });
          nombresApuestas.push(nombreApuesta);
          eleccionesApuestas.push(eleccionApuesta);
          valoresApuestas.push(valorApuesta);
          deportes.push(deporte);
          ligas.push(liga);
          paises.push(pais);
          partidos.push(equipo)
        });
        let data = {
          name: deportes,
          id: ligas,
          price: valoresApuestas,
          brand: paises,
          category: "En Vivo",
          quantity: 1,
          dimension1: nombresApuestas,
          dimension2: eleccionesApuestas,
          dimension3: partidos
        }
        console.log(data)

        let label = boton.innerText;
        dataLayer.push({
          'event': 'ga_event',
          'category': `Comprar :: ${label}`,
          'action': `${data.deporte} :: ${data.liga}`,
          'label': `${data.dimension1} :: ${data.dimension2}`,
          'value': `${data.price}`
        });
        if (label.toUpperCase() == "COMPRAR") {
          setTimeout(() => {
            setApuestasCompraLive(data);
          }, 1000);
        }
      })
    });
  }
  function setApuestasCompraLive(data) {
    console.log("En compra")
    let carrito = document.querySelector(".carrello-fixed");
    if (!carrito) return
    let monto = carrito.querySelector("div .valore-importo-totale-carrello").innerText.split(" ")[0];
    let botones = carrito.querySelectorAll(".bottoni-schedina .bottone")
    let botonConfirmar = carrito.querySelector(".bottoni-schedina .bottone.bg-blu")
    dataLayer.push({
      'event': 'checkout',
      'ecommerce': {
        'checkout': {
          'actionField': {
            'step': "Comprar"
          },
          'products': [data]
        }
      }
    });
    botonConfirmar.addEventListener('click', function (e) {
      let time = Date.now();
      let loginSession = localStorage.getItem("loginMessageSession");
      let orderID = `${loginSession} :: time`;
      dataLayer.push({
        'event': 'transaction',
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': orderID,
              'affiliation': "Aquijuego",
              'revenue': monto,
            },
            'products': [data]
          }
        }
      });
    })

  }
  setApuestasLive();
  setApuestasBorradasLive()
  setApuestasBotonesLive()

  /*CASINO*/

  function setMenuCasino() {
    let items = document.querySelectorAll("#menuContainer div a");
    if (!items) return;
    items.forEach(item => {
      let label = item.innerText;
      item.addEventListener('click', function (e) {
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Casino :: Menú',
          'action': 'Click',
          'label': label,
          'value': ''
        });
      })
    });
  }
  setMenuCasino();

  function setFiltroCasino() {
    let filtroPlataforma = document.querySelectorAll(".filtri-casino div #listaPiattaforme #piattaforme div")
    if (!filtroPlataforma) return;
    filtroPlataforma.forEach(item => {
      let label = item.innerText
      item.addEventListener('click', function (e) {
        console.log(label)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Casino :: Filtro Plataforma',
          'action': 'Click',
          'label': label,
          'value': ''
        });
      })
    });
    let filtroOrdenar = document.querySelectorAll(".filtri-casino div div div .sortFilter")
    if (!filtroOrdenar) return;
    filtroOrdenar.forEach(item => {
      let label = item.innerText
      item.addEventListener('click', function (e) {
        console.log(label)
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Casino :: Filtro Ordenar',
          'action': 'Click',
          'label': label,
          'value': ''
        });
      })
    });
  }
  setFiltroCasino();

  function setJuegosCasino() {
    let juegos = document.querySelectorAll("#contentGames .blocco-mosaico.game");
    if (!juegos) return;
    juegos.forEach(juego => {
      let nombre = juego.querySelector('div p a').innerText
      let botones = juego.querySelectorAll('div p.bottone');
      botones.forEach(boton => {
        let nombreBoton = boton.innerText
        boton.addEventListener('click', function (e) {
          dataLayer.push({
            'event': 'ga_event',
            'category': 'Casino :: Juegos',
            'action': `Click:: ${nombreBoton}`,
            'label': `${nombre}`,
            'value': ''
          });
        })
      });
    });
  }
  setJuegosCasino();

  function setBannerCasino() {
    let banners = document.querySelectorAll(".banner-casino div div div .carousel-item img");
    if (!banners) return;
    banners.forEach((banner, index) => {
      let imgSrc = banner.src;
      let id = imgSrc;
      let name = imgSrc;
      let creative = imgSrc;
      let promoObj = {
        id,
        name,
        creative
      }
      dataLayer.push({
        'event': 'ga_event',
        'category': 'Casino :: Banner',
        'action': 'Casino-Banner',
        'label': imgSrc,
        'value': ''
      });
      banner.addEventListener('click', function (e) {
        let imgSrc = e.target.src;
        console.log(imgSrc);
        dataLayer.push({
          'event': 'promotionClick',
          'ecommerce': {
            'promoClick': {
              'promotions': [
                {
                  'id': promoObj.id,
                  'name': promoObj.name,
                  'creative': promoObj.creative,
                  'position': `Casino - Banner - ${index}`
                },
              ]
            }
          }
        });

      })
      dataLayer.push({
        'event': 'promoview',
        'ecommerce': {
          'promoView': {
            'promotions': [
              {
                'id': promoObj.id,
                'name': promoObj.name,
                'creative': promoObj.creative,
                'position': `Casino - Banner - ${index}`
              },
            ]
          }
        }
      });

    });
  }
  setBannerCasino();

  /*PROMO*/

  function setArticulosPromo() {
    let items = document.querySelectorAll(".promo-landing.container div div.elenco-promo .card.elemento-promozioni-modale.filter");
    if (!items) return
    items.forEach(item => {
      let nombre = item.querySelector("div h5").innerText;
      item.addEventListener('click', function (e) {
        console.log(nombre);
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Promo :: Artículos',
          'action': 'Click',
          'label': nombre,
          'value': ''
        });
      });
    });
  }
  setArticulosPromo();

  function setMenuPromo() {
    let items = document.querySelectorAll("#cg-promo-submenu ul li");
    if (!items) return
    items.forEach(item => {
      let nombre = item.innerText;
      item.addEventListener('click', function (e) {
        dataLayer.push({
          'event': 'ga_event',
          'category': 'Promo :: Menú',
          'action': 'Click',
          'label': nombre,
          'value': ''
        });
      })
    });
  }
  setMenuPromo();

})