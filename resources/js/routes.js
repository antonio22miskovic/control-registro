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
    path:'/personal/',
    component: () => import('./views/analista/Personal'),
    meta: {
      requiresAuth: true
    },
     children: [
      {
        path:'/',
         component: () => import('./components/layouts/analista/personal/HomePersonal'),
      },
      {
        path:'new',
        name:'newpersonal',
         component: () => import('./components/layouts/analista/personal/NewPersonal'),
      },
       {
        path:':id/:nombre/:departamento',
        name:'asignarequipos',
         component: () => import('./components/layouts/analista/personal/AsignacionEquipo'),
      },

    ]
  },

  {
    path:'/asignacion',
    name:'asignacion',
    component: () => import('./views/analista/Asignacion'),
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
         component: () => import('./components/layouts/analista/equipos/HomeEquipos'),
      },
      {
        path:'desincorporados',
        name:'desincorporados',
         component: () => import('./components/layouts/analista/equipos/Desincorporados'),
      },
      {
        path:'incorporados',
        name:'incorporados',
         component: () => import('./components/layouts/analista/equipos/Incorporados'),
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