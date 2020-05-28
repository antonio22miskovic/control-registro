<template>
  <v-navigation-drawer
       v-model="drawerOn"
       color="nav"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :letf="letf"
        absolute
        temporary
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line >
            <v-list-item-avatar >
              <img :src="'/img/avatares/' + datosusercurrent.avatar">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ datosusercurrent.nombre }}</v-list-item-title>
              <v-list-item-subtitle>{{ datosusercurrent.apellido }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <template v-if="datosusercurrent.rol_id === 2">
          <!-- SECCION DE BOTONES DE DRAWER -->
            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="/personal" tag="span">Personal</router-link>
            </v-list-item-content>
          </v-list-item>

            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-desktop-classic</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="/equipos" tag="span"> Equipos </router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name: 'categorias'}" tag="span">Categorias</router-link>
            </v-list-item-content>
          </v-list-item>

           <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <router-link :to="{name: 'departamentos'}" tag="span"> Departamentos </router-link>
            </v-list-item-content>
          </v-list-item>

           <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name: 'asignacion'}" tag="span">Asignacion</router-link>
            </v-list-item-content>
          </v-list-item>

           <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name:'perfil'}" tag="span">Perfil</router-link>
            </v-list-item-content>
          </v-list-item>
            <!-- SECCION DE BOTONES DE DRAWER -->
           </template>
          <!--  si es administrador -->
           <template v-else>
            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name:'usuarios'}" tag="span">Usuarios</router-link>
            </v-list-item-content>
          </v-list-item>

            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-factory</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="/equipos" tag="span"> Cedes </router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name: 'categorias'}" tag="span">Categorias</router-link>
            </v-list-item-content>
          </v-list-item>

           <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name: 'asignacion'}" tag="span">Asignacion</router-link>
            </v-list-item-content>
          </v-list-item>

           <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link :to="{name:'perfil'}" tag="span">Perfil</router-link>
            </v-list-item-content>
          </v-list-item>
            <!-- SECCION DE BOTONES DE DRAWER -->
           </template>

        </v-list>
      </v-navigation-drawer>
</template>
<script>
 import { mapState } from 'vuex'
  export default{
    name:'Drawer',

    data:() =>({

        color: 'teal',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',

        ],
        letf: true,
        miniVariant: false,
        expandOnHover: false,


    }),

    computed: {

      ...mapState(['datosusercurrent']),

      drawerOn:{
        get(){
          return this.$store.state.drawer
        },
        set(value){
           return this.$store.commit('updatedrawer', value)
        }
      },
   },
   methods:{
    getdatos()
        {
          this.$store.dispatch('datosuser')
        },
   },
   mounted(){
      this.getdatos()
      console.log(this.datosusercurrent)
    },

  }
</script>