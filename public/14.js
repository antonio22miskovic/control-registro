(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(t,e,a){"use strict";var i=a(6);e.a=i.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.a.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},255:function(t,e,a){"use strict";a.r(e);var i={name:"New",mounted:function(){this.getcede()},data:function(){return{valid1:!1,show2:!1,cedes:[],passwordconform:"",imageName:"",loading:!1,file:[function(t){return!t||t.size<2e6||"Su imagen de perfil no pude ser mayor 2 MB!"}],data:{id:"",nombre:"",apellido:"",cedula:"",telefono:"",avatar:"",cede:"",password:"",email:"",username:""},rules:[function(t){return!!t||"campo requerido."}]}},methods:{getcede:function(){var t=this;axios.get("/api/get-cede-all").then((function(e){t.cedes=e.data})).catch((function(t){t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))},pickFile:function(){this.$refs.image.click()},obtenerimagen:function(t){var e=t.target.files[0];this.data.avatar=e,this.imageName=e.name,this.cargarimagen(e)},cargarimagen:function(t){var e=this,a=new FileReader;a.onload=function(t){e.data.avatar=t.target.result},a.readAsDataURL(t)},newUser:function(){this.loading=!0}},computed:{}},o=a(9),s=a(10),n=a.n(s),r=a(56),c=a(76),l=a(1),d=a(226),u=a(228),h=a(78),v=a(236),m=a(72),p=a(232),f=a(239),g=a(24),b=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("v-container",{staticClass:"my-12"},[a("v-card",{attrs:{loading:t.loading,"max-width":"100%",raised:""}},[a("v-card-title",[a("v-icon",{attrs:{color:"nav"}},[t._v("mdi-account-plus")]),t._v(" Nuevo usuario ")],1),t._v(" "),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid1,callback:function(e){t.valid1=e},expression:"valid1"}},[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-col",[a("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle",rules:t.rules,hint:"Nombre"},model:{value:t.data.username,callback:function(e){t.$set(t.data,"username",e)},expression:"data.username"}})],1),t._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Nombre","prepend-icon":"mdi-human-male",rules:t.rules,hint:"Nombre"},model:{value:t.data.nombre,callback:function(e){t.$set(t.data,"nombre",e)},expression:"data.nombre"}})],1)],1),t._v(" "),a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-col",[a("v-text-field",{attrs:{label:"Apellido","prepend-icon":"mdi-human-handsdown",rules:t.rules,hint:"Apellido"},model:{value:t.data.apellido,callback:function(e){t.$set(t.data,"apellido",e)},expression:"data.apellido"}})],1),t._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Cedula","prepend-icon":"mdi-contacts",rules:t.rules,hint:" cedula de identidad"},model:{value:t.data.cedula,callback:function(e){t.$set(t.data,"cedula",e)},expression:"data.cedula"}})],1)],1),t._v(" "),a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-phone",label:"Telefono",rules:t.rules,hint:" numero telefonico"},model:{value:t.data.telefono,callback:function(e){t.$set(t.data,"telefono",e)},expression:"data.telefono"}})],1),t._v(" "),a("v-col",[a("v-text-field",{attrs:{accept:"image/png, image/jpeg, image/bmp",placeholder:"imagen de perfil","prepend-icon":"mdi-camera",label:"Avatar"},on:{click:t.pickFile},model:{value:t.imageName,callback:function(e){t.imageName=e},expression:"imageName"}}),t._v(" "),a("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",rules:t.file,accept:"image/*"},on:{change:t.obtenerimagen}})],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-phone",label:"Email",rules:t.rules,hint:" correo electronico"},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1),t._v(" "),a("v-col",[a("v-select",{attrs:{items:t.cedes,"item-text":"cede","item-key":"cede.id","prepend-icon":"mdi-factory","item-value":"id",label:"asignar cede"},model:{value:t.data.cede,callback:function(e){t.$set(t.data,"cede",e)},expression:"data.cede"}})],1)],1),t._v(" "),a("v-row",[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",label:"Controseña",rules:t.rules,hint:" Contraseña"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}})],1),t._v(" "),a("v-col",[a("v-text-field",{staticClass:"input-group--focused",attrs:{"prepend-icon":"mdi-lock","append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required],type:t.show2?"text":"password",name:"password",required:"",label:"Confirmar Contraseña",hint:"Confirmar contrseña",value:"wqfasds"},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.passwordconform,callback:function(e){t.passwordconform=e},expression:"passwordconform"}})],1)],1),t._v(" "),a("v-row",[a("v-container",{staticClass:"text-center"},[a("v-btn",{attrs:{color:"info"},on:{click:t.newUser}},[t._v("\n      \t\t\t\tRegistrar\n      \t\t\t")])],1)],1)],1)],1),t._v(" "),a("v-divider",{staticClass:"mx-4"})],1)],1)]],2)}),[],!1,null,null,null);e.default=b.exports;n()(b,{VBtn:r.a,VCard:c.a,VCardText:l.c,VCardTitle:l.d,VCol:d.a,VContainer:u.a,VDivider:h.a,VForm:v.a,VIcon:m.a,VRow:p.a,VSelect:f.a,VTextField:g.a})},45:function(t,e,a){"use strict";var i=a(63),o=a(15),s=a(2),n=a(0),r=a(5);const c=Object(s.a)(i.a,o.a);e.a=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}),watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(n.n)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(r.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(n.m)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"==typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot(){return Object(n.m)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},63:function(t,e,a){"use strict";var i=a(3),o=a.n(i);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const a=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),a)}}})},64:function(t,e,a){"use strict";var i=a(48),o=a(0),s=a(2),n=a(5);e.a=Object(s.a)(i.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(o.k)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(n.c)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},65:function(t,e,a){"use strict";var i=a(3),o=a.n(i);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},66:function(t,e,a){"use strict";var i=a(3),o=a.n(i),s=a(0);e.a=o.a.extend().extend({name:"stackable",data:()=>({stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}),computed:{activeZIndex(){if("undefined"==typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s.o)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,a=[this.stackMinZIndex,Object(s.o)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let e=0;e<i.length;e++)t.includes(i[e])||a.push(Object(s.o)(i[e]));return Math.max(...a)}}})}}]);