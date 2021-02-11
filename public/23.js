(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{248:function(e,t,a){"use strict";a.r(t);var o=a(14),i=a.n(o),s={name:"AsignacionEquipo",mounted:function(){this.addequipo(),this.getTable()},data:function(){return{equipostable:[],showesquipos:[],showasignacion:"",showdepartamento:"",ocultar:!1,mostrarexplorar:!1,paginatetable:{total:0,current_page:0,per_page:0,last_page:0,from:0,to:0},dialog:!1,dialog2:!1,empleados:[],explorarequipo:"",explorardepartamento:"",explorarcategoria:"",loading:!1,verequipover:"",vercategoria:"",verempleados:[],verdepartamento:""}},methods:{explorarver:function(e){var t=this;axios.get("/api/equipos/show/"+e).then((function(e){t.explorardepartamento=e.data.departamento,t.explorarequipo=e.data,t.explorarcategoria=e.data.categoria,t.empleados=e.data.datos_empleados,t.dialog=!0})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))},remover:function(e){var t=this;i.a.fire({title:"ADVERTENCIA!!",text:"¿ Esta seguro que Desea Remover este equipo ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si Remover!"}).then((function(a){a.value&&axios.get("/api/remover/equipo/"+e+"/"+t.$route.params.id).then((function(e){t.addequipo(),i.a.fire("Removido","se ah Removido con exito.","success")})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))}))},addequipo:function(){var e=this;axios.get("/api/personal/show/"+this.$route.params.id).then((function(t){e.showdata=t.data.dato,e.showesquipos=t.data.equipos,e.showasignacion=t.data.asignacion,e.showdepartamento=t.data.departamento}))},getTable:function(e){var t=this;axios.get("/api/equipos/listado/"+this.$route.params.departamento+"?page="+e).then((function(e){t.equipostable=e.data.equipo.data,t.paginatetable=e.data.paginate,t.equipostable.length>0?t.ocultar=!1:t.ocultar=!0})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))},asignarar:function(e){var t=this,a={equipo:e,empleado:this.$route.params.id};axios.post("/api/asignar/equipo",a).then((function(e){t.addequipo(),t.getTable(),!1===e.data?i.a.fire({icon:"error",title:"Oops...",text:"Este equipo ya se encuentra vinculado"}):i.a.fire({position:"center",icon:"success",title:"Se ah añadido con exito",showConfirmButton:!1,timer:1500})})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}))},verequipo:function(e){var t=this;axios.get("/api/equipos/show/"+e).then((function(e){t.verdepartamento=e.data.departamento,t.verequipover=e.data,t.vercategoria=e.data.categoria,t.verempleados=e.data.datos_empleados,t.dialog2=!0}))},Chagepage2:function(e){this.paginatetable.current_page=e,this.getTable(e)}},computed:{}},r=a(9),n=a(10),l=a.n(n),c=a(233),v=a(56),d=a(76),p=a(1),u=a(226),_=a(228),g=a(238),m=a(78),h=a(229),b=a(72),x=a(73),q=a(59),f=a(81),C=a(13),w=a(235),V=a(232),k=a(230),y=a(268),E=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{loading:e.loading,"max-width":"100%",raised:""}},[a("v-container",[a("v-card-title",[a("v-icon",{attrs:{color:"nav"}},[e._v("mdi-account-star")]),e._v(" Asignacion de equipos")],1),e._v(" "),[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"max-width":"1000","min-width":"1000","min-height":"1000","max-height":"1000"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n         Equipo: "+e._s(e.explorarequipo.equipo)+"\n        ")]),e._v(" "),a("v-container",[a("v-row",[a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Departamento: "+e._s(e.explorardepartamento.departamento))])],1),e._v(" "),a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Categoria: "+e._s(e.explorarcategoria.categoria))])],1)],1),e._v(" "),a("p",{staticClass:"text-center"},[e._v(" Empleados vinculado al equipo ")]),e._v(" "),e.empleados.length>0?a("v-container",[a("v-row",e._l(e.empleados,(function(t){return a("v-col",{key:t.id},[a("v-flex",[t.nombre!=e.$route.params.nombre?a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[e._v("Asignacion: "+e._s(t.asignacion))]),e._v(" "),a("v-list-item-title",{staticClass:"headline mb-4"},[e._v("Nombre: "+e._s(t.nombre))]),e._v(" "),a("v-list-item-subtitle",[e._v("Apellido: "+e._s(t.apellido))])],1),e._v(" "),a("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[a("v-img",{attrs:{src:"/img/avatares/"+t.avatar,height:"200px"}})],1)],1)],1):e._e()],1)],1)})),1)],1):e._e()],1),e._v(" "),0===e.empleados.length?a("v-container",[a("p",{staticClass:"text-center"},[e._v("este equipo no ah sido asignado a ningun personal!")])]):e._e(),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Cerrar\n          ")])],1)],1)],1)],1)],e._v(" "),[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"max-width":"1000","min-width":"1000","min-height":"1000","max-height":"1000"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("\n         Equipo: "+e._s(e.verequipover.equipo)+"\n        ")]),e._v(" "),a("v-container",[a("v-row",[a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Departamento: "+e._s(e.verdepartamento.departamento))])],1),e._v(" "),a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Categoria: "+e._s(e.vercategoria.categoria))])],1),e._v(" "),a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Modelo: "+e._s(e.verequipover.modelo))])],1),e._v(" "),a("v-col",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Codigo: "+e._s(e.verequipover.codigo))])],1)],1),e._v(" "),a("v-row",[a("v-card-subtitle",{staticClass:"pb-0"},[e._v("Descripcion: "+e._s(e.verequipover.descripcion))])],1),e._v(" "),a("p",{staticClass:"text-center"},[e._v(" Empleados vinculado al equipo ")]),e._v(" "),e.verempleados.length>0?a("v-container",[a("v-row",e._l(e.verempleados,(function(t){return a("v-col",{key:t.id},[a("v-flex",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"overline mb-4"},[e._v("Asignacion: "+e._s(t.asignacion))]),e._v(" "),a("v-list-item-title",{staticClass:"headline mb-4"},[e._v("Nombre: "+e._s(t.nombre))]),e._v(" "),a("v-list-item-subtitle",[e._v("Apellido: "+e._s(t.apellido))])],1),e._v(" "),a("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[a("v-img",{attrs:{src:"/img/avatares/"+t.avatar,height:"200px"}})],1)],1)],1)],1)],1)})),1)],1):e._e()],1),e._v(" "),0===e.verempleados.length?a("v-container",[a("p",{staticClass:"text-center"},[e._v("este equipo no ah sido asignado a ningun personal!")])]):e._e(),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog2=!1}}},[e._v("\n          Cerrar\n          ")])],1)],1)],1)],1)],e._v(" "),a("v-row",[a("v-col",[a("h3",{staticClass:"text-center"},[a("b",[e._v("Manejo de Equipos de:"+e._s(this.$route.params.nombre)+" ")])])])],1),e._v(" "),a("v-col",[e.showesquipos.length>0?a("h5",[e._v("equipos asignados")]):e._e(),e._v(" "),0===e.showesquipos.length?a("h5",[e._v("no tiene equipos")]):e._e()]),e._v(" "),a("v-row"),e._v(" "),a("v-row",e._l(e.showesquipos,(function(t,o){return a("v-col",{key:o},[a("v-card",{staticClass:"d-flex flex-wrap",attrs:{"max-width":"280","min-width":"280","min-height":"280","max-height":"280",outlined:"",shaped:""}},[a("v-card-title",[e._v("Equipo: "+e._s(t.equipo)+" ")]),e._v(" "),a("v-card-subtitle",[e._v("Modelo: "+e._s(t.modelo))]),e._v(" "),a("v-card-subtitle",[e._v("Marca: "+e._s(t.marca))]),e._v(" "),a("v-card-subtitle",[e._v("Codigo: "+e._s(t.codigo))]),e._v(" "),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"red"},on:{click:function(a){return e.remover(t.id)}}},[e._v("remover")]),e._v(" "),a("v-btn",{attrs:{color:"purple",text:""},on:{click:function(a){return e.explorarver(t.id)}}},[e._v("\n                                    Explorar\n                           ")]),e._v(" "),a("v-spacer")],1)],1)],1)})),1),e._v(" "),a("v-divider"),e._v(" "),a("v-container",[a("p",[e._v(" Añadir un nuevo equipo para: "+e._s(this.$route.params.nombre))])]),e._v(" "),a("v-divider"),e._v(" "),e.equipostable.length>0?a("div",[a("v-simple-table",{attrs:{height:"300px","fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("nombre")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("modelo")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("status")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("codigo")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("detallar")]),e._v(" "),a("th",{staticClass:"text-left"},[e._v("asignar")])])]),e._v(" "),a("tbody",e._l(e.equipostable,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.equipo))]),e._v(" "),a("td",[e._v(e._s(t.modelo))]),e._v(" "),a("td",[e._v(e._s(t.status))]),e._v(" "),a("td",[e._v(e._s(t.codigo))]),e._v(" "),a("td",[a("v-btn",{attrs:{icon:"",color:"teal darken-2"},on:{click:function(a){return e.verequipo(t.id)}}},[a("v-icon",[e._v("mdi-eye")])],1)],1),e._v(" "),a("td",[a("v-btn",{attrs:{icon:"",color:"teal darken-2"},on:{click:function(a){return e.asignarar(t.id)}}},[a("v-icon",[e._v("mdi-plus")])],1)],1)])})),0)]},proxy:!0}],null,!1,4179200725)}),e._v(" "),[a("div",{staticClass:"text-center"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-container",{staticClass:"max-width"},[a("v-pagination",{staticClass:"my-4",attrs:{length:e.paginatetable.last_page},on:{input:function(t){return e.Chagepage2(e.paginatetable.current_page)}},model:{value:e.paginatetable.current_page,callback:function(t){e.$set(e.paginatetable,"current_page",t)},expression:"paginatetable.current_page"}})],1)],1)],1)],1)],1)]],2):e._e(),e._v(" "),!0===e.ocultar?[a("v-container",[a("v-alert",{attrs:{outlined:"",type:"warning",prominent:"",border:"left"}},[e._v("\n              No hay equipos en este departamento puede dirigirse al modulo de equipos para añadir equipos al departamento! "),a("router-link",{attrs:{to:"/equipos"}},[e._v(" ir ")])],1)],1)]:e._e()],2)],1)],1)}),[],!1,null,null,null);t.default=E.exports;l()(E,{VAlert:c.a,VBtn:v.a,VCard:d.a,VCardActions:p.a,VCardSubtitle:p.b,VCardTitle:p.d,VCol:u.a,VContainer:_.a,VDialog:g.a,VDivider:m.a,VFlex:h.a,VIcon:b.a,VImg:x.a,VListItem:q.a,VListItemAvatar:f.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VPagination:w.a,VRow:V.a,VSimpleTable:k.a,VSpacer:y.a})}}]);