import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

export default new Vuetify({
   theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        nav: '#5C6BC0',
        claroazul: '#9FA8DA',
        primary: '#5C6BC0',
        azul:'#90CAF9',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
})
