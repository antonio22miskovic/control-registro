(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/personal/AsignacionEquipo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AsignacionEquipo',
  mounted: function mounted() {
    this.getdepartamentos();
  },
  data: function data() {
    return {
      tabla: false,
      desserts: [],
      departamentos: [],
      depa: '',
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

      this.tabla = true;
      var url = '/api/equipos/listado/' + this.depa + '?page=' + page;
      axios.get(url).then(function (res) {
        _this.desserts = res.data.equipo.data;
        _this.paginate = res.data.paginate;

        if (_this.desserts.length > 0) {}
      });
    },
    ver: function ver() {},
    getdepartamentos: function getdepartamentos() {
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
    },
    Chagepage: function Chagepage(page) {
      this.paginate.current_page = page;
      this.listar(page);
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
    "v-container",
    [
      _vm.tabla === false
        ? _c(
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
                    "\n      \t\t\tBienvenido al modulo deAsignacion de Equipos en operacion, Debe seleccionar un Equipo y asignarlo al personal selecionado !\n            "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
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
                          "item-key": "id",
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
      _vm.tabla === true
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
                                _vm._v("codigo")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("detallar")
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
                                _c("td", [_vm._v(_vm._s(item.codigo))]),
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
                  2284766149
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
            ],
            2
          )
        : _vm._e()
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
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VPagination */ "./node_modules/vuetify/lib/components/VPagination/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





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











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VPagination: vuetify_lib_components_VPagination__WEBPACK_IMPORTED_MODULE_9__["VPagination"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__["VSimpleTable"]})


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