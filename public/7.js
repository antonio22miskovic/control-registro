(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NewPersonal',
  mounted: function mounted() {
    this.getselects();
  },
  data: function data() {
    return {
      data: {
        'nombre': '',
        'apellido': '',
        'cedula': '',
        'telefono': '',
        'avatar': '',
        'asignacion': '',
        'departamento': ''
      },
      imageName: '',
      loading: false,
      selection: 1,
      rules: [function (value) {
        return !!value || 'campo requerido.';
      }],
      rulesci: [function (value) {
        return !!value || 'campo requerido.';
      }, function (value) {
        return /(?=.*\d)/.test(value) || 'favor introducir valores Numericos';
      }],
      rulestelefono: [function (value) {
        return !!value || 'campo requerido.';
      }, function (value) {
        return /(?=.*\d)/.test(value) || 'favor introducir valores Numericos';
      }],
      file: [function (value) {
        return !value || value.size < 2000000 || 'Su imagen de perfil no pude ser mayor 2 MB!';
      }],
      asignaciones: [],
      departamentos: []
    };
  },
  methods: {
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    getselects: function getselects() {
      var _this = this;

      axios.get('/api/get-asignaciones').then(function (res) {
        _this.asignaciones = res.data;
      });
      axios.get('/api/get-departamentos').then(function (res) {
        _this.departamentos = res.data;
      });
    },
    obtenerimagen: function obtenerimagen(e) {
      var file = e.target.files[0];
      this.data.avatar = file;
      this.imageName = file.name;
      this.cargarimagen(file);
    },
    cargarimagen: function cargarimagen(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.data.avatar = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    guardar: function guardar() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post('/api/personal/store', this.data).then(function (res) {
          if (res.data === true) {
            _this3.loading = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              position: 'center',
              icon: 'success',
              title: 'solicitud registrada con exito',
              showConfirmButton: false
            });

            _this3.$refs.form.reset();
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
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0& ***!
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
            "v-card-title",
            [
              _c("v-icon", { attrs: { color: "nav" } }, [
                _vm._v("mdi-account-plus")
              ]),
              _vm._v(" Añadir Personal  ")
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
                              label: "Nombre",
                              "prepend-icon": "mdi-human-male",
                              rules: _vm.rules,
                              hint: "Nombre"
                            },
                            model: {
                              value: _vm.data.nombre,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "nombre", $$v)
                              },
                              expression: "data.nombre"
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
                              label: "Apellido",
                              "prepend-icon": "mdi-human-handsdown",
                              rules: _vm.rules,
                              hint: "Apellido"
                            },
                            model: {
                              value: _vm.data.apellido,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "apellido", $$v)
                              },
                              expression: "data.apellido"
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
                              label: "Cedula",
                              "prepend-icon": "mdi-contacts",
                              rules: _vm.rulesci,
                              hint: " cedula de identidad"
                            },
                            model: {
                              value: _vm.data.cedula,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "cedula", $$v)
                              },
                              expression: "data.cedula"
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
                              "prepend-icon": "mdi-phone",
                              label: "Telefono",
                              rules: _vm.rulestelefono,
                              hint: " numero telefonico"
                            },
                            model: {
                              value: _vm.data.telefono,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "telefono", $$v)
                              },
                              expression: "data.telefono"
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
                          _c("v-text-field", {
                            attrs: {
                              accept: "image/png, image/jpeg, image/bmp",
                              placeholder: "imagen de perfil",
                              "prepend-icon": "mdi-camera",
                              label: "Avatar"
                            },
                            on: { click: _vm.pickFile },
                            model: {
                              value: _vm.imageName,
                              callback: function($$v) {
                                _vm.imageName = $$v
                              },
                              expression: "imageName"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            ref: "image",
                            staticStyle: { display: "none" },
                            attrs: {
                              type: "file",
                              rules: _vm.file,
                              accept: "image/*"
                            },
                            on: { change: _vm.obtenerimagen }
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
                              items: _vm.asignaciones,
                              "item-text": "asignacion",
                              "item-key": "asignacion.id",
                              rules: _vm.rules,
                              "prepend-icon": "mdi-shopping",
                              "item-value": "id",
                              label: "selecione un cargo"
                            },
                            model: {
                              value: _vm.data.asignacion,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "asignacion", $$v)
                              },
                              expression: "data.asignacion"
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
                              value: _vm.data.departamento,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "departamento", $$v)
                              },
                              expression: "data.departamento"
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
                            [_vm._v("\n      \t\t\t\tRegistrar\n      \t\t\t")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/NewPersonal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/NewPersonal.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPersonal.vue?vue&type=template&id=ec4c56a0& */ "./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0&");
/* harmony import */ var _NewPersonal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPersonal.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js&");
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





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPersonal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/analista/personal/NewPersonal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPersonal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPersonal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPersonal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPersonal.vue?vue&type=template&id=ec4c56a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/analista/personal/NewPersonal.vue?vue&type=template&id=ec4c56a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPersonal_vue_vue_type_template_id_ec4c56a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);