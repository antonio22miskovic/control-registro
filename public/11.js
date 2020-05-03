(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Personal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/analista/Personal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Personal',
  mounted: function mounted() {
    this.listardepartamentos();
  },
  data: function data() {
    return {
      departamentos: [],
      depa: '',
      bienvenida: true,
      ocultar: false,
      personal: [],
      paginate: {
        'total': 0,
        'current_page': 0,
        'per_page': 0,
        'last_page': 0,
        'from': 0,
        'to': 0
      }
    };
  },
  methods: {
    listar: function listar(page) {
      var _this = this;

      this.bienvenida = false;
      axios.get('/api/listado/' + this.depa + '?page=' + page).then(function (res) {
        _this.personal = res.data.personal;
        _this.paginate = res.data.paginate;

        if (_this.personal.length > 0) {
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
    Chagepage: function Chagepage(page) {
      this.paginate.current_page = page;
      this.listar(page);
    },
    listardepartamentos: function listardepartamentos() {
      var _this2 = this;

      axios.get('/api/get-departamentos').then(function (res) {
        _this2.departamentos = res.data;
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
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-form",
            [
              _c(
                "v-row",
                { attrs: { align: "center" } },
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.departamentos,
                          "item-text": "departamento",
                          "item-key": "departamento.id",
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
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "12", sm: "6" } },
                    [
                      _c(
                        "v-btn",
                        { attrs: { color: "blue" }, on: { click: _vm.listar } },
                        [_c("v-icon", [_vm._v("mdi-account-search")])],
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
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _vm.personal.length > 0
            ? [
                _c(
                  "v-row",
                  { attrs: { dense: "" } },
                  _vm._l(_vm.personal, function(item) {
                    return _c(
                      "v-col",
                      { key: item.id },
                      [
                        _c(
                          "v-flex",
                          [
                            _c(
                              "v-card",
                              {
                                staticClass: "d-flex flex-wrap",
                                attrs: {
                                  "max-width": "300",
                                  outlined: "",
                                  shaped: ""
                                }
                              },
                              [
                                _c(
                                  "v-img",
                                  {
                                    staticClass: "white--text align-end",
                                    attrs: {
                                      height: "220px",
                                      src: "/img/avatares/" + item.avatar
                                    }
                                  },
                                  [
                                    _c("v-card-title", [
                                      _vm._v(_vm._s(item.asignacion))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-card-subtitle", { staticClass: "pb-0" }),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  { staticClass: "text--primary" },
                                  [
                                    _c("div", [
                                      _vm._v("Nombre: " + _vm._s(item.nombre))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "Apellido: " + _vm._s(item.apellido)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v("Cedula: " + _vm._s(item.cedula))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "Telefono: " + _vm._s(item.telefono)
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c(
                                      "v-btn",
                                      { attrs: { color: "blue", text: "" } },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-desktop-classic")
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      { attrs: { color: "warning", text: "" } },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-account-edit")
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      { attrs: { color: "red", text: "" } },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-account-remove")
                                        ])
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
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.personal.length > 0
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
                      "\n     \t\t\t\t\tNo hay empleados registrados en este departamento!\n   \t\t\t "
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
                      "\n      \t\t\tBienvenido al modulo de Administracion de Personal, Debe seleccionar un departamento Para Facilitar La busqueda y control del Personal.!\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/analista/Personal.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/analista/Personal.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personal.vue?vue&type=template&id=793a3b51& */ "./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51&");
/* harmony import */ var _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Personal.vue?vue&type=script&lang=js& */ "./resources/js/views/analista/Personal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_11__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/analista/Personal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/analista/Personal.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/analista/Personal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Personal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Personal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Personal.vue?vue&type=template&id=793a3b51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Personal.vue?vue&type=template&id=793a3b51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_793a3b51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);