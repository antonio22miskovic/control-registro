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
    path:'/perfil',
    name:'perfil',
    component: () => import('./views/analista/Perfil'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path:'/categorias',
    name:'categorias',
    component: () => import('./views/analista/Categorias'),
    meta: {
      requiresAuth: true
    },
  },

   {
    path:'/departamentos',
    name:'departamentos',
    component: () => import('./views/analista/Departamentos'),
    meta: {
      requiresAuth: true
    },
  },

   {
    path:'/personal',
    name:'personal',
    component: () => import('./views/analista/Personal'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path:'/informacion',
    name:'info',
    component: () => import('./views/analista/Info'),
    meta: {
      requiresAuth: true
    },
  },

  {
    path:'/equipos/',
    component: () => import('./views/analista/Equipos'),
    meta: {
      requiresAuth: true
    },
      children: [
      {
        path:'/',
         component: () => import('./components/layouts/equipos/HomeEquipos'),
      },
      {
        path:'desincorporados',
        name:'desincorporados',
         component: () => import('./components/layouts/equipos/Desincorporados'),
      },
      {
        path:'incorporados',
        name:'incorporados',
         component: () => import('./components/layouts/equipos/Incorporados'),
      },
    ]
  },

	{
  	// rutas no encontradas
 	 path: '*',
 	 name:'404',
 	component: () => import('./components/notfound/NotFound')
	}
]

export default routes