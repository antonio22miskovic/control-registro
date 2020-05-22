(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AsignacionEquipo',
  mounted: function mounted() {
    this.addequipo();
    this.getTable();
  },
  data: function data() {
    return {
      equipostable: [],
      showesquipos: [],
      showasignacion: '',
      showdepartamento: '',
      ocultar: false,
      mostrarexplorar: false,
      paginatetable: {
        'total': 0,
        'current_page': 0,
        'per_page': 0,
        'last_page': 0,
        'from': 0,
        'to': 0
      },
      dialog: false,
      dialog2: false,
      empleados: [],
      explorarequipo: '',
      explorardepartamento: '',
      explorarcategoria: '',
      loading: false,
      verequipover: '',
      vercategoria: '',
      verempleados: [],
      verdepartamento: ''
    };
  },
  methods: {
    explorarver: function explorarver(ver) {
      var _this = this;

      axios.get('/api/equipos/show/' + ver).then(function (res) {
        _this.explorardepartamento = res.data.departamento;
        _this.explorarequipo = res.data;
        _this.explorarcategoria = res.data.categoria;
        _this.empleados = res.data.datos_empleados;
        _this.dialog = true;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    },
    remover: function remover(ver) {
      var _this2 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: 'ADVERTENCIA!!',
        text: "¿ Esta seguro que Desea Remover este equipo ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Remover!'
      }).then(function (result) {
        if (result.value) {
          axios.get('/api/remover/equipo/' + ver + '/' + _this2.$route.params.id).then(function (res) {
            _this2.addequipo();

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Removido', 'se ah Removido con exito.', 'success');
          })["catch"](function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
          });
        }
      });
    },
    addequipo: function addequipo() {
      var _this3 = this;

      axios.get('/api/personal/show/' + this.$route.params.id).then(function (res) {
        _this3.showdata = res.data.dato;
        _this3.showesquipos = res.data.equipos;
        _this3.showasignacion = res.data.asignacion;
        _this3.showdepartamento = res.data.departamento;
      });
    },
    getTable: function getTable(page) {
      var _this4 = this;

      axios.get('/api/equipos/listado/' + this.$route.params.departamento + '?page=' + page).then(function (res) {
        _this4.equipostable = res.data.equipo.data;
        _this4.paginatetable = res.data.paginate;

        if (_this4.equipostable.length > 0) {
          _this4.ocultar = false;
        } else {
          _this4.ocultar = true;
        }
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    },
    asignarar: function asignarar(equipo) {
      var _this5 = this;

      var data = {
        'equipo': equipo,
        'empleado': this.$route.params.id
      };
      axios.post('/api/asignar/equipo', data).then(function (res) {
        _this5.addequipo();

        _this5.getTable();

        if (res.data === false) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Este equipo ya se encuentra vinculado'
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ah añadido con exito',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
    },
    verequipo: function verequipo(equipo) {
      var _this6 = this;

      axios.get('/api/equipos/show/' + equipo).then(function (res) {
        _this6.verdepartamento = res.data.departamento;
        _this6.verequipover = res.data;
        _this6.vercategoria = res.data.categoria;
        _this6.verempleados = res.data.datos_empleados;
        _this6.dialog2 = true;
      });
    },
    Chagepage2: function Chagepage2(page) {
      this.paginatetable.current_page = page;
      this.getTable(page);
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        {
          staticClass: "mx-auto",
          attrs: { loading: _vm.loading, "max-width": "100%", raised: "" }
        },
        [
          _c(
            "v-container",
            [
              _c(
                "v-card-title",
                [
                  _c("v-icon", { attrs: { color: "nav" } }, [
                    _vm._v("mdi-account-star")
                  ]),
                  _vm._v(" Asignacion de equipos")
                ],
                1
              ),
              _vm._v(" "),
              [
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: {
                          "max-width": "1000",
                          "min-width": "1000",
                          "min-height": "1000",
                          "max-height": "1000"
                        },
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c(
                              "v-card-title",
                              {
                                staticClass: "headline grey lighten-2",
                                attrs: { "primary-title": "" }
                              },
                              [
                                _vm._v(
                                  "\n         Equipo: " +
                                    _vm._s(_vm.explorarequipo.equipo) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Departamento: " +
                                                _vm._s(
                                                  _vm.explorardepartamento
                                                    .departamento
                                                )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Categoria: " +
                                                _vm._s(
                                                  _vm.explorarcategoria
                                                    .categoria
                                                )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-center" }, [
                                  _vm._v(" Empleados vinculado al equipo ")
                                ]),
                                _vm._v(" "),
                                _vm.empleados.length > 0
                                  ? _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          _vm._l(_vm.empleados, function(card) {
                                            return _c(
                                              "v-col",
                                              { key: card.id },
                                              [
                                                _c(
                                                  "v-flex",
                                                  [
                                                    card.nombre !=
                                                    _vm.$route.params.nombre
                                                      ? _c(
                                                          "v-card",
                                                          {
                                                            staticClass:
                                                              "mx-auto",
                                                            attrs: {
                                                              "max-width":
                                                                "344",
                                                              outlined: ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item",
                                                              {
                                                                attrs: {
                                                                  "three-line":
                                                                    ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "overline mb-4"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Asignacion: " +
                                                                            _vm._s(
                                                                              card.asignacion
                                                                            )
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        staticClass:
                                                                          "headline mb-4"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Nombre: " +
                                                                            _vm._s(
                                                                              card.nombre
                                                                            )
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _vm._v(
                                                                          "Apellido: " +
                                                                            _vm._s(
                                                                              card.apellido
                                                                            )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list-item-avatar",
                                                                  {
                                                                    attrs: {
                                                                      tile: "",
                                                                      size: "80"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-img",
                                                                      {
                                                                        attrs: {
                                                                          src:
                                                                            "/img/avatares/" +
                                                                            card.avatar,
                                                                          height:
                                                                            "200px"
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.empleados.length === 0
                              ? _c("v-container", [
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "este equipo no ah sido asignado a ningun personal!"
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialog = false
                                      }
                                    }
                                  },
                                  [_vm._v("\n          Cerrar\n          ")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              _vm._v(" "),
              [
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: {
                          "max-width": "1000",
                          "min-width": "1000",
                          "min-height": "1000",
                          "max-height": "1000"
                        },
                        model: {
                          value: _vm.dialog2,
                          callback: function($$v) {
                            _vm.dialog2 = $$v
                          },
                          expression: "dialog2"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c(
                              "v-card-title",
                              {
                                staticClass: "headline grey lighten-2",
                                attrs: { "primary-title": "" }
                              },
                              [
                                _vm._v(
                                  "\n         Equipo: " +
                                    _vm._s(_vm.verequipover.equipo) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Departamento: " +
                                                _vm._s(
                                                  _vm.verdepartamento
                                                    .departamento
                                                )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Categoria: " +
                                                _vm._s(
                                                  _vm.vercategoria.categoria
                                                )
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Modelo: " +
                                                _vm._s(_vm.verequipover.modelo)
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c(
                                          "v-card-subtitle",
                                          { staticClass: "pb-0" },
                                          [
                                            _vm._v(
                                              "Codigo: " +
                                                _vm._s(_vm.verequipover.codigo)
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-card-subtitle",
                                      { staticClass: "pb-0" },
                                      [
                                        _vm._v(
                                          "Descripcion: " +
                                            _vm._s(_vm.verequipover.descripcion)
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-center" }, [
                                  _vm._v(" Empleados vinculado al equipo ")
                                ]),
                                _vm._v(" "),
                                _vm.verempleados.length > 0
                                  ? _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          _vm._l(_vm.verempleados, function(
                                            list
                                          ) {
                                            return _c(
                                              "v-col",
                                              { key: list.id },
                                              [
                                                _c(
                                                  "v-flex",
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        staticClass: "mx-auto",
                                                        attrs: {
                                                          "max-width": "344",
                                                          outlined: ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item",
                                                          {
                                                            attrs: {
                                                              "three-line": ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "overline mb-4"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Asignacion: " +
                                                                        _vm._s(
                                                                          list.asignacion
                                                                        )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    staticClass:
                                                                      "headline mb-4"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Nombre: " +
                                                                        _vm._s(
                                                                          list.nombre
                                                                        )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list-item-subtitle",
                                                                  [
                                                                    _vm._v(
                                                                      "Apellido: " +
                                                                        _vm._s(
                                                                          list.apellido
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-avatar",
                                                              {
                                                                attrs: {
                                                                  tile: "",
                                                                  size: "80"
                                                                }
                                                              },
                                                              [
                                                                _c("v-img", {
                                                                  attrs: {
                                                                    src:
                                                                      "/img/avatares/" +
                                                                      list.avatar,
                                                                    height:
                                                                      "200px"
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.verempleados.length === 0
                              ? _c("v-container", [
                                  _c("p", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "este equipo no ah sido asignado a ningun personal!"
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialog2 = false
                                      }
                                    }
                                  },
                                  [_vm._v("\n          Cerrar\n          ")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h3", { staticClass: "text-center" }, [
                      _c("b", [
                        _vm._v(
                          "Manejo de Equipos de:" +
                            _vm._s(this.$route.params.nombre) +
                            " "
                        )
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", [
                _vm.showesquipos.length > 0
                  ? _c("h5", [_vm._v("equipos asignados")])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showesquipos.length === 0
                  ? _c("h5", [_vm._v("no tiene equipos")])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("v-row"),
              _vm._v(" "),
              _c(
                "v-row",
                _vm._l(_vm.showesquipos, function(ver, i) {
                  return _c(
                    "v-col",
                    { key: i },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "d-flex flex-wrap",
                          attrs: {
                            "max-width": "280",
                            "min-width": "280",
                            "min-height": "280",
                            "max-height": "280",
                            outlined: "",
                            shaped: ""
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Equipo: " + _vm._s(ver.equipo) + " ")
                          ]),
                          _vm._v(" "),
                          _c("v-card-subtitle", [
                            _vm._v("Modelo: " + _vm._s(ver.modelo))
                          ]),
                          _vm._v(" "),
                          _c("v-card-subtitle", [
                            _vm._v("Marca: " + _vm._s(ver.marca))
                          ]),
                          _vm._v(" "),
                          _c("v-card-subtitle", [
                            _vm._v("Codigo: " + _vm._s(ver.codigo))
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "red" },
                                  on: {
                                    click: function($event) {
                                      return _vm.remover(ver.id)
                                    }
                                  }
                                },
                                [_vm._v("remover")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "purple", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.explorarver(ver.id)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Explorar\n                           "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-container", [
                _c("p", [
                  _vm._v(
                    " Añadir un nuevo equipo para: " +
                      _vm._s(this.$route.params.nombre)
                  )
                ])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _vm.equipostable.length > 0
                ? _c(
                    "div",
                    [
                      _c("v-simple-table", {
                        attrs: { height: "300px", "fixed-header": "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function() {
                                return [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("nombre")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("modelo")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("status")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("codigo")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("detallar")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "text-left" }, [
                                        _vm._v("asignar")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.equipostable, function(equipo) {
                                      return _c("tr", { key: equipo.id }, [
                                        _c("td", [
                                          _vm._v(_vm._s(equipo.equipo))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(equipo.modelo))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(equipo.status))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(equipo.codigo))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  icon: "",
                                                  color: "teal darken-2"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.verequipo(
                                                      equipo.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-eye")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  icon: "",
                                                  color: "teal darken-2"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.asignarar(
                                                      equipo.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-plus")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          false,
                          4179200725
                        )
                      }),
                      _vm._v(" "),
                      [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  { attrs: { justify: "center" } },
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "8" } },
                                      [
                                        _c(
                                          "v-container",
                                          { staticClass: "max-width" },
                                          [
                                            _c("v-pagination", {
                                              staticClass: "my-4",
                                              attrs: {
                                                length:
                                                  _vm.paginatetable.last_page
                                              },
                                              on: {
                                                input: function($event) {
                                                  return _vm.Chagepage2(
                                                    _vm.paginatetable
                                                      .current_page
                                                  )
                                                }
                                              },
                                              model: {
                                                value:
                                                  _vm.paginatetable
                                                    .current_page,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.paginatetable,
                                                    "current_page",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "paginatetable.current_page"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.ocultar === true
                ? [
                    _c(
                      "v-container",
                      [
                        _c(
                          "v-alert",
                          {
                            attrs: {
                              outlined: "",
                              type: "warning",
                              prominent: "",
                              border: "left"
                            }
                          },
                          [
                            _vm._v(
                              "\n              No hay equipos en este departamento puede dirigirse al modulo de equipos para añadir equipos al departamento!\n         "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsignacionEquipo.vue?vue&type=template&id=46d56a27& */ "./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27&");
/* harmony import */ var _AsignacionEquipo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsignacionEquipo.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AsignacionEquipo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_11__["VImg"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItemTitle"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_13__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/analista/personal/AsignacionEquipo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionEquipo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AsignacionEquipo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionEquipo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AsignacionEquipo.vue?vue&type=template&id=46d56a27& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=template&id=46d56a27&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AsignacionEquipo_vue_vue_type_template_id_46d56a27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);