(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{110:function(t,n,o){var i=o(111);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(8)(i,a);i.locals&&(t.exports=i.locals)},111:function(t,n,o){(t.exports=o(7)(!1)).push([t.i,".theme--light.v-bottom-navigation {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {\n  color: rgba(0, 0, 0, 0.6) !important;\n}\n\n.theme--dark.v-bottom-navigation {\n  background-color: #2E2E2E;\n  color: #FFFFFF;\n}\n.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {\n  color: rgba(255, 255, 255, 0.7) !important;\n}\n\n.v-item-group.v-bottom-navigation {\n  bottom: 0;\n  display: flex;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-item-group.v-bottom-navigation .v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {\n  background-color: transparent;\n}\n.v-item-group.v-bottom-navigation .v-btn {\n  border-radius: 0;\n  box-shadow: none;\n  flex: 0 1 auto;\n  font-size: 0.75rem;\n  height: inherit;\n  max-width: 168px;\n  min-width: 80px;\n  position: relative;\n  text-transform: none;\n}\n.v-item-group.v-bottom-navigation .v-btn:after {\n  content: none;\n}\n.v-item-group.v-bottom-navigation .v-btn .v-btn__content {\n  flex-direction: column-reverse;\n  height: inherit;\n}\n.v-item-group.v-bottom-navigation .v-btn .v-btn__content > *:not(.v-icon) {\n  line-height: 1.2;\n}\n.v-item-group.v-bottom-navigation .v-btn.v-btn--active {\n  color: inherit;\n}\n.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before {\n  opacity: 0;\n}\n\n.v-item-group.v-bottom-navigation--absolute,\n.v-item-group.v-bottom-navigation--fixed {\n  z-index: 4;\n}\n\n.v-item-group.v-bottom-navigation--absolute {\n  position: absolute;\n}\n\n.v-item-group.v-bottom-navigation--active {\n  transform: translate(0, 0);\n}\n\n.v-item-group.v-bottom-navigation--fixed {\n  position: fixed;\n}\n\n.v-item-group.v-bottom-navigation--grow .v-btn {\n  width: 100%;\n}\n\n.v-item-group.v-bottom-navigation--horizontal .v-btn > .v-btn__content {\n  flex-direction: row-reverse;\n}\n.v-item-group.v-bottom-navigation--horizontal .v-btn > .v-btn__content > .v-icon {\n  margin-bottom: 0;\n  margin-right: 16px;\n}\n\n.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content > *:not(.v-icon) {\n  opacity: 0;\n  position: absolute;\n  top: calc(100% - 12px);\n  transform: scale(0.9);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > .v-icon {\n  transform: translateY(-8px);\n}\n.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > *:not(.v-icon) {\n  opacity: 1;\n  top: calc(100% - 22px);\n  transform: scale(1);\n}",""])},228:function(t,n,o){"use strict";o(74),o(75);var i=o(61),a=o(20);n.a=Object(i.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:o,children:i}){let e;const{attrs:r}=o;return r&&(o.attrs={},e=Object.keys(r).filter(t=>{if("slot"===t)return!1;const n=r[t];return t.startsWith("data-")?(o.attrs[t]=n,!1):n||"string"==typeof n})),n.id&&(o.domProps=o.domProps||{},o.domProps.id=n.id),t(n.tag,Object(a.a)(o,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),i)}})},234:function(t,n,o){"use strict";o(110);var i=o(39),a=o(19),e=a.a.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return a.a.options.computed.classes.call(this)}},methods:{genData:a.a.options.methods.genData}}),r=o(11),s=o(38),v=o(36),c=o(49),l=o(6),u=o(15),p=o(2),m=o(5);n.a=Object(p.a)(Object(i.a)("bottom",["height","inputValue"]),r.a,s.a,Object(u.b)("inputValue"),v.a,c.a,l.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data(){return{isActive:this.inputValue}},computed:{canScroll(){return c.a.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles(){return{...this.measurableStyles,transform:this.isActive?"none":"translateY(100%)"}}},created(){this.$attrs.hasOwnProperty("active")&&Object(m.a)("active.sync","value or v-model",this)},methods:{thresholdMet(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication(){return this.$el?this.$el.clientHeight:0},updateValue(t){this.$emit("change",t)}},render(t){const n=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(n.directives=n.directives||[],n.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(e,this.setTextColor(this.color,n),this.$slots.default)}})},250:function(t,n,o){"use strict";o.r(n);var i={name:"Equipos",data:function(){return{bottomNav:!1}},methods:{},computed:{}},a=o(9),e=o(10),r=o.n(e),s=o(234),v=o(56),c=o(228),l=o(72),u=Object(a.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("v-container",[[o("v-container",[o("v-bottom-navigation",{attrs:{shift:""},model:{value:t.bottomNav,callback:function(n){t.bottomNav=n},expression:"bottomNav"}},[o("v-btn",{attrs:{to:{name:"desincorporados"}}},[o("span",[t._v("desincomporados")]),t._v(" "),o("v-icon",[t._v("mdi-laptop-off")])],1),t._v(" "),o("v-btn",{attrs:{to:"/equipos/"}},[o("span",[t._v("nuevo")]),t._v(" "),o("v-icon",[t._v("mdi-plus")])],1),t._v(" "),o("v-btn",{attrs:{to:{name:"incorporados"}}},[o("span",[t._v("activos")]),t._v(" "),o("v-icon",[t._v("mdi-laptop")])],1)],1)],1)]],2),t._v(" "),o("v-container",[o("router-view")],1)],1)}),[],!1,null,null,null);n.default=u.exports;r()(u,{VBottomNavigation:s.a,VBtn:v.a,VContainer:c.a,VIcon:l.a})},61:function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var i=o(3),a=o.n(i);function e(t){return a.a.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:o,data:i,children:a}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:e}=i;if(e){i.attrs={};const t=Object.keys(e).filter(t=>{if("slot"===t)return!1;const n=e[t];return t.startsWith("data-")?(i.attrs[t]=n,!1):n||"string"==typeof n});t.length&&(i.staticClass+=` ${t.join(" ")}`)}return o.id&&(i.domProps=i.domProps||{},i.domProps.id=o.id),n(o.tag,i,a)}})}}}]);