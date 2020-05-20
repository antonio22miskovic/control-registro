(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Perfil',
  mounted: function mounted() {
    this.getusers();
  },
  data: function data() {
    return {
      users: [],
      loading: false
    };
  },
  methods: {
    getusers: function getusers() {
      var _this = this;

      axios.get('/api/get-users').then(function (res) {
        _this.users = res.data;
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
              staticClass: "mx-auto my-12",
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
                        _vm._v("mdi-account-multiple")
                      ]),
                      _vm._v(" usuarios encargados ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _vm.users.length > 0
                        ? [
                            _c(
                              "v-row",
                              { attrs: { dense: "" } },
                              _vm._l(_vm.users, function(item) {
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
                                            _c("v-img", {
                                              staticClass:
                                                "dark--text align-end",
                                              attrs: {
                                                height: "220px",
                                                src:
                                                  "/img/avatares/" + item.avatar
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-card-subtitle", {
                                              staticClass: "pb-0"
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "v-card-text",
                                              { staticClass: "text--primary" },
                                              [
                                                _c("div", [
                                                  _vm._v(
                                                    " Usuario: " +
                                                      _vm._s(item.username)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "Nombre: " +
                                                      _vm._s(item.nombre)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "Apellido: " +
                                                      _vm._s(item.apellido)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "Cedula: " +
                                                      _vm._s(item.cedula)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    "Telefono: " +
                                                      _vm._s(item.telefono)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    " Email: " +
                                                      _vm._s(item.email)
                                                  )
                                                ])
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
                              }),
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

/***/ "./resources/js/views/analista/Perfil.vue":
/*!************************************************!*\
  !*** ./resources/js/views/analista/Perfil.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Perfil.vue?vue&type=template&id=2ce1b9c6& */ "./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6&");
/* harmony import */ var _Perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Perfil.vue?vue&type=script&lang=js& */ "./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardSubtitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardSubtitle"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/analista/Perfil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Perfil.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Perfil.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Perfil.vue?vue&type=template&id=2ce1b9c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/analista/Perfil.vue?vue&type=template&id=2ce1b9c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_2ce1b9c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);