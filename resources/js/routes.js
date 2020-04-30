//llamamos a vue y a vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
//usamos a vur router
Vue.use(VueRouter)

const routes = [
//rutas
	 {
    path: '/',
    component: () => import( './components/layouts/auth/Login'),
  },
  {
    path:'/home',
    name:'home',
    component: () => import('./views/Home'),
    meta: {
      requiresAuth: true
    },
  },
	{
  	// rutas no encontradas
 	 path: '*',
 	 name:'404',
 	component: () => import('./components/notfound/NotFound')
	}
]

export default routes