(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DateTable',
  components: {},
  data: function data() {
    return {
      desserts: [],
      loading: false,
      bienvenida: true,
      ocultar: false,
      categoria: '',
      empleados: [],
      explorarequipo: '',
      explorardepartamento: '',
      explorarcategoria: '',
      dialog: false,
      dialog2: false,
      departamentos: [],
      categorias: [],
      rules: [function (value) {
        return !!value || 'campo requerido.';
      }],
      depa: '',
      status: [{
        'statu': 'activo'
      }, {
        'statu': 'desincorporado'
      }],
      paginate: {
        'total': 0,
        'current_page': 0,
        'per_page': 0,
        'last_page': 0,
        'from': 0,
        'to': 0
      },
      fillequipo: {
        'id': '',
        'equipo': '',
        'codigo': '',
        'modelo': '',
        'marca': '',
        'status': '',
        'descripcion': '',
        'departamento_id': '',
        'categoria_id': ''
      }
    };
  },
  created: function created() {
    this.getselects();
  },
  methods: {
    getequipos: function getequipos(page) {
      var _this = this;

      this.loading = true;
      var status = 'activo';
      var url = '/api/equipos/listado/' + this.depa + '/' + status + '?page=' + page;
      axios.get(url).then(function (res) {
        _this.desserts = res.data.equipo;
        _this.paginate = res.data.paginate;
        _this.loading = false;
        _this.bienvenida = false;

        if (_this.desserts.length > 0) {
          _this.ocultar = false;
        } else {
          _this.ocultar = true;
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
    getselects: function getselects() {
      var _this2 = this;

      axios.get('/api/get-categorias').then(function (res) {
        _this2.categorias = res.data;
      });
      axios.get('/api/get-departamentos').then(function (res) {
        _this2.departamentos = res.data;
      });
    },
    Chagepage: function Chagepage(page) {
      this.paginate.current_page = page;
      this.getequipos(page);
    },
    buscar: function buscar() {
      this.getequipos();
    },
    eliminar: function eliminar(item) {
      var _this3 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: 'ADVERTENCIA!!',
        text: "Deseas eliminar el equipo?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/api/equipos/delete/' + item).then(function (res) {
            if (res.data === true) {
              _this3.getequipos(_this3.paginate.current_page);

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('eliminado', 'se ah eliminado con exito.', 'success');
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
        }
      });
    },
    ver: function ver(item) {
      var _this4 = this;

      axios.get('/api/equipos/show/' + item).then(function (res) {
        _this4.explorardepartamento = res.data.departamento;
        _this4.explorarequipo = res.data;
        _this4.explorarcategoria = res.data.categoria;
        _this4.empleados = res.data.datos_empleados;
        _this4.dialog = true;
      });
    },
    actualizar: function actualizar() {
      var _this5 = this;

      axios.put('/api/equipos/update/' + this.fillequipo.id, this.fillequipo).then(function (res) {
        if (res.data === true) {
          _this5.dialog2 = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Equipo actualizado con exito',
            showConfirmButton: false
          });

          _this5.getequipos();
        }
      });
    },
    mostraredit: function mostraredit(item) {
      this.fillequipo.id = item.id, this.fillequipo.equipo = item.equipo, this.fillequipo.codigo = item.codigo, this.fillequipo.modelo = item.modelo, this.fillequipo.marca = item.marca, this.fillequipo.status = item.status, this.fillequipo.descripcion = item.descripcion, this.fillequipo.departamento_id = item.departamento_id, this.fillequipo.categoria_id = item.categoria_id, this.dialog2 = true;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
                  _c("v-icon", { attrs: { color: "blue" } }, [
                    _vm._v("mdi-laptop")
                  ]),
                  _vm._v(" Equipos Activos ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-form",
                { ref: "form" },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.departamentos,
                              "item-text": "departamento",
                              "item-key": "departamentos.id",
                              rules: _vm.rules,
                              "prepend-icon": "mdi-domain",
                              "item-value": "id",
                              label: "seleccione un departamento"
                            },
                            model: {
                              value: _vm.depa,
                              callback: function($$v) {
                                _vm.depa = $$v
                              },
                              expression: "depa"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { staticClass: "text-center" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info" },
                              on: { click: _vm.buscar }
                            },
                            [_vm._v("\n      \t\t\t\tbuscar\n      \t\t\t")]
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
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.desserts.length > 0
            ? _c("v-simple-table", {
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
                                _vm._v("equipo")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("modelo")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("categoria")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("codigo")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("editar")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("detallar")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("pdf")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("eliminar")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.desserts, function(item) {
                              return _c("tr", { key: item.id }, [
                                _c("td", [_vm._v(_vm._s(item.equipo))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.modelo))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.categoria))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.codigo))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "", color: "indigo" },
                                        on: {
                                          click: function($event) {
                                            return _vm.mostraredit(item)
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-pencil")])],
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
                                            return _vm.ver(item.id)
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-eye")])],
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
                                      { attrs: { icon: "", color: "dark" } },
                                      [_c("v-icon", [_vm._v("mdi-shredder")])],
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
                                        attrs: { icon: "", color: "pink" },
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminar(item.id)
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-delete")])],
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
                  3639599604
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.desserts.length > 0
            ? [
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
                                      attrs: { length: _vm.paginate.last_page },
                                      on: {
                                        input: function($event) {
                                          return _vm.Chagepage(
                                            _vm.paginate.current_page
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.paginate.current_page,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.paginate,
                                            "current_page",
                                            $$v
                                          )
                                        },
                                        expression: "paginate.current_page"
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
                          "\n     \t\t\t\t\tNo hay Equipos registrados en este departamento!\n   \t\t\t "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.bienvenida === true
            ? [
                _c(
                  "v-container",
                  [
                    _c(
                      "v-alert",
                      {
                        attrs: {
                          color: "#2A3B4D",
                          icon: "mdi-human-greeting",
                          outlined: ""
                        }
                      },
                      [
                        _vm._v(
                          "\n      \t\t\tBienvenido al modulo de Administracion de Equipos activos, Debe seleccionar un departamento Para Facilitar La busqueda y control de los Equipos.!\n            "
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
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Departamento: " +
                                      _vm._s(
                                        _vm.explorardepartamento.departamento
                                      )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Categoria: " +
                                      _vm._s(_vm.explorarcategoria.categoria)
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Modelo: " +
                                      _vm._s(_vm.explorarequipo.modelo)
                                  )
                                ])
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
                              "v-col",
                              [
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Marca: " + _vm._s(_vm.explorarequipo.marca)
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Codigo: " +
                                      _vm._s(_vm.explorarequipo.codigo)
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              [
                                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                                  _vm._v(
                                    "Descripcion: " +
                                      _vm._s(_vm.explorarequipo.descripcion)
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-center" }, [
                          _vm._v(" Personal vinculado al equipo ")
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
                                                            _c("v-img", {
                                                              attrs: {
                                                                src:
                                                                  "/img/avatares/" +
                                                                  card.avatar,
                                                                height: "200px"
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
          "v-row",
          { attrs: { justify: "center" } },
          [
            _c(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "600px" },
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
                  {
                    staticClass: "mx-auto",
                    attrs: {
                      loading: _vm.loading,
                      "max-width": "100%",
                      raised: ""
                    }
                  },
                  [
                    _c("v-card-title", [_vm._v(" Actualizar los datos ")]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-form",
                          { ref: "form" },
                          [
                            _c(
                              "v-row",
                              {
                                staticClass: "mx-0",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Equipo",
                                        "prepend-icon": "mdi-laptop",
                                        rules: _vm.rules,
                                        hint: "Nombre del equipo"
                                      },
                                      model: {
                                        value: _vm.fillequipo.equipo,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "equipo",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.equipo"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Marca",
                                        "prepend-icon": "mdi-laptop-chromebook",
                                        rules: _vm.rules,
                                        hint: "marca del equipo"
                                      },
                                      model: {
                                        value: _vm.fillequipo.marca,
                                        callback: function($$v) {
                                          _vm.$set(_vm.fillequipo, "marca", $$v)
                                        },
                                        expression: "fillequipo.marca"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              {
                                staticClass: "mx-0",
                                attrs: { align: "center" }
                              },
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Modelo",
                                        "prepend-icon": "mdi-laptop-windows",
                                        rules: _vm.rules,
                                        hint: "Modelo del equipo"
                                      },
                                      model: {
                                        value: _vm.fillequipo.modelo,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "modelo",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.modelo"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        "prepend-icon": "mdi-cellphone-link",
                                        label: "Codigo",
                                        rules: _vm.rules,
                                        hint: "Codigo del equipo"
                                      },
                                      model: {
                                        value: _vm.fillequipo.codigo,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "codigo",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.codigo"
                                      }
                                    })
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
                                  "v-col",
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.categorias,
                                        "item-text": "categoria",
                                        "item-key": "categoria.id",
                                        "prepend-icon": "mdi-folder-multiple",
                                        "item-value": "id",
                                        rules: _vm.rules,
                                        label: "selecione una categoria"
                                      },
                                      model: {
                                        value: _vm.fillequipo.categoria_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "categoria_id",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.categoria_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.status,
                                        "item-text": "statu",
                                        "item-key": "statu.statu",
                                        "prepend-icon": "mdi-shuffle",
                                        "item-value": "statu",
                                        rules: _vm.rules,
                                        label: "Estatus del equipo"
                                      },
                                      model: {
                                        value: _vm.fillequipo.status,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "status",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.status"
                                      }
                                    })
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
                                  "v-col",
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.departamentos,
                                        "item-text": "departamento",
                                        "item-key": "departamento.id",
                                        "prepend-icon": "mdi-domain",
                                        "item-value": "id",
                                        rules: _vm.rules,
                                        label: "seleccione un departamento"
                                      },
                                      model: {
                                        value: _vm.fillequipo.departamento_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "departamento_id",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.departamento_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-textarea", {
                                      staticClass: "mx-2",
                                      attrs: {
                                        label: "Descripcion",
                                        "prepend-icon": "mdi-comment",
                                        rows: "1",
                                        rules: _vm.rules
                                      },
                                      model: {
                                        value: _vm.fillequipo.descripcion,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.fillequipo,
                                            "descripcion",
                                            $$v
                                          )
                                        },
                                        expression: "fillequipo.descripcion"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.dialog2 = false
                                      }
                                    }
                                  },
                                  [_vm._v("cerrar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.actualizar }
                                  },
                                  [_vm._v("actualizar")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-divider", { staticClass: "mx-4" })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/Incorporados.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/Incorporados.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incorporados.vue?vue&type=template&id=571754da& */ "./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da&");
/* harmony import */ var _Incorporados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incorporados.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Incorporados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["VImg"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_14__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_16__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_17__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_18__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/analista/equipos/Incorporados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incorporados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Incorporados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incorporados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Incorporados.vue?vue&type=template&id=571754da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/Incorporados.vue?vue&type=template&id=571754da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incorporados_vue_vue_type_template_id_571754da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);