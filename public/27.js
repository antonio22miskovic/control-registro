(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Equipos',
  mounted: function mounted() {
    this.getselects();
  },
  data: function data() {
    return {
      data: {
        'equipo': '',
        'modelo': '',
        'marca': '',
        'codigo': '',
        'descripcion': '',
        'status': '',
        'departamento_id': '',
        'categoria_id': ''
      },
      loading: false,
      rules: [function (value) {
        return !!value || 'campo requerido.';
      }],
      categorias: [],
      departamentos: [],
      status: [{
        'statu': 'activo'
      }, {
        'statu': 'desincorporado'
      }]
    };
  },
  methods: {
    getselects: function getselects() {
      var _this = this;

      axios.get('/api/get-categorias').then(function (res) {
        _this.categorias = res.data;
      });
      axios.get('/api/get-departamentos').then(function (res) {
        _this.departamentos = res.data;
      });
    },
    guardar: function guardar() {
      var _this2 = this;

      this.loading = true;
      axios.post('/api/equipos/store', this.data).then(function (res) {
        if (res.data === true) {
          _this2.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            position: 'center',
            icon: 'success',
            title: 'Equipo registrado con exito',
            showConfirmButton: false
          });

          _this2.$refs.form.reset();
        }
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
            "v-card",
            {
              staticClass: "mx-auto",
              attrs: { loading: _vm.loading, "max-width": "100%", raised: "" }
            },
            [
              _c(
                "v-card-title",
                [
                  _c("v-icon", { attrs: { color: "blue" } }, [
                    _vm._v("mdi-plus")
                  ]),
                  _vm._v(" Añadir nuevo equipo ")
                ],
                1
              ),
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
                        { staticClass: "mx-0", attrs: { align: "center" } },
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
                                  value: _vm.data.equipo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "equipo", $$v)
                                  },
                                  expression: "data.equipo"
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
                                  value: _vm.data.marca,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "marca", $$v)
                                  },
                                  expression: "data.marca"
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
                        { staticClass: "mx-0", attrs: { align: "center" } },
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
                                  value: _vm.data.modelo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "modelo", $$v)
                                  },
                                  expression: "data.modelo"
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
                                  value: _vm.data.codigo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "codigo", $$v)
                                  },
                                  expression: "data.codigo"
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
                                  value: _vm.data.categoria_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "categoria_id", $$v)
                                  },
                                  expression: "data.categoria_id"
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
                                  value: _vm.data.status,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "status", $$v)
                                  },
                                  expression: "data.status"
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
                                  value: _vm.data.departamento_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "departamento_id", $$v)
                                  },
                                  expression: "data.departamento_id"
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
                                  value: _vm.data.descripcion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "descripcion", $$v)
                                  },
                                  expression: "data.descripcion"
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
                            "v-container",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "info" },
                                  on: { click: _vm.guardar }
                                },
                                [
                                  _vm._v(
                                    "\n      \t\t\t\tRegistrar\n      \t\t\t"
                                  )
                                ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSelect/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSelect/index.js ***!
  \**************************************************************/
/*! exports provided: VSelect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSelect", function() { return _VSelect__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSelect__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/HomeEquipos.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/HomeEquipos.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeEquipos.vue?vue&type=template&id=74ef4d6a& */ "./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a&");
/* harmony import */ var _HomeEquipos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeEquipos.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeEquipos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/analista/equipos/HomeEquipos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeEquipos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeEquipos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeEquipos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HomeEquipos.vue?vue&type=template&id=74ef4d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/equipos/HomeEquipos.vue?vue&type=template&id=74ef4d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeEquipos_vue_vue_type_template_id_74ef4d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);