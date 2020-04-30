<template>
  <v-navigation-drawer
       v-model="drawerOn"
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

          <!-- SECCION DE BOTONES DE DRAWER -->
            <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="" tag="span">personal</router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="" tag="span">categorias</router-link>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <router-link to="" tag="span"> departamentos</router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="" tag="span">perfil</router-link>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link>
           <v-list-item-icon>
              <v-icon>mdi-alert-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
               <router-link to="" tag="span">info</router-link>
            </v-list-item-content>
          </v-list-item>
             <!-- FIN SECCION DE BOTONES DE DRAWER -->
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
    },

  }
</script>