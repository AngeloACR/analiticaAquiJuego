window.addEventListener('load', function () {
    /*VIRTUAL*/

    /*   "carrito_carreras": {
        "lugar": "virtual",
          "evento": "click",
            "parent": {
          "selector": "#place table.riepilogocoupon tbody tr.editing .commands.verdescuro",
            "apuesta": {
            "timeout": 2000,
              "selector": "span.scommetti",
                "child": 0
          },
          "apuesta_imprime": {
            "selector": "span.print.scommetti"
          },
          "anula": {
            "selector": "span.annulla"
          }
        },
        "parent_confirm": {
          "selector": "#place table.riepilogocoupon tbody tr .commands.verdescuro",
            "apuesta_imprime": {
            "selector": "span.postcoupon"
          },
          "anula": {
            "selector": "span.unfreeze"
          }
        }
      },
      "apuestas_virtual_carreras": {
        "lugar": "virtual",
          "evento": "click",
            "deporte": {
          "selector": ".sportselectors div.btn.active"
        },
        "liga": {
          "selector": ".listbox .listcontent .listitem choosed"
        },
        "apuesta_superior": {
          "nombre_apuesta": {
            "selector": "td.pari .triggersistiemi div.choose"
          },
          "nombre_equipo": {
            "selector": "td.left.mn"
          },
          "eleccion_apuesta_ganador": {
            "selector": "table.grigliacani tbody tr td.quota.Winner"
          },
          "eleccion_apuesta_posicion": {
            "selector": "table.grigliacani tbody tr td.quota.Placed"
          },
          "eleccion_apuesta_colocado": {
            "selector": "table.grigliacani tbody tr td.quota.Show"
          },
          "eleccion_apuesta_combinacion": {
            "selector": "table.grigliacani tbody tr td.ss.tnx"
          }
        },
        "apuesta_inferior": {
          "nombre_apuesta": {
            "selector": ".tree .linguette.attiva"
          },
          "nombre_equipo": {
            "selector": "td.left.mn"
          },
          "eleccion_apuesta_exacta": {
            "selector": "div.Exacta table tbody tr td.quota"
          },
          "eleccion_apuesta_quiniela": {
            "selector": "div.Quinella table tbody tr td.quota"
          },
          "eleccion_apuesta_trifecta": {
            "selector": "div.Trifecta table tbody tr td.quota"
          },
          "eleccion_apuesta_altro": {
            "selector": "div.Altro table tbody tr td.quota"
          }
        }
      }, */
    function setApuestasVirtual() {
        let deportes = document.querySelectorAll(".sportselectors .btn");
        console.log(deportes)
        let ligas = document.querySelectorAll("#leftcol .listbox .listcontent .listitem");

        deportes.forEach(deporte => {
            deporte.addEventListener('click', function (e) {
                let deporteSelected = deporte.querySelector(".sportname").innerText;
                setApuestaSuperiorVirtual();
            })
        });
        ligas.forEach(liga => {
            liga.addEventListener('click', function (e) {
                setApuestaSuperiorVirtual();
            })
        });

    }

    function setApuestaSuperiorVirtual() {
        let superiorBox = document.querySelectorAll("#maincol .one table.grigliacani.sistemi")
        /* let iframe = document.querySelector("body").children[6].querySelector("iframe");
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        let superiorBox = innerDoc.querySelector("#maincontent")
         */
        let items = superiorBox.querySelectorAll("tr");
        for (let i = 1; i < items.length; i++) {
            const item = items[i];
            let equipo = item.querySelector("td.left").innerText;
            let apuestas = item.querySelectorAll(".quota");
            let opciones = ["Ganador", "Posición", "Colocado"]
            apuestas.forEach((apuesta, index) => {
                let opcion = opciones[index];
                apuesta.addEventListener('click', function (e) {
                    let deporteSelected = document.querySelector(".sportselectors .btn.active");
                    let ligaSelected = document.querySelector("#leftcol .listbox .listcontent .choosed").innerText;
                    let eleccionApuesta = `${opcion} - ${apuesta.innerText}`;
                    let nombreApuesta = document.querySelector(".pari .triggersistemi .choosed").innerText;

                    let data = {
                        'name': deporteSelected,
                        'id': ligaSelected,
                        'price': "",
                        'brand': "Virtual",
                        'category': "Virtual",
                        'variant': "Principal",
                        'quantity': 1,
                        'dimension1': nombreApuesta,
                        'dimension2': eleccionApuesta,
                        'dimension3': equipo
                    }
                    console.log(data)
                    dataLayer.push({
                        'event': 'ga_event',
                        'category': 'Agregar al Carrito',
                        'action': `${deporteSelected} :: ${ligaSelected}`,
                        'label': `${nombreApuesta} :: ${eleccionApuesta}`,
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
                })
            });
        }

    }
    setApuestasVirtual();
    setApuestaSuperiorVirtual();
})
