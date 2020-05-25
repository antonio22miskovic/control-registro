<template>
    <v-app-bar
        color="nav"
        dense
         >
         <!-- NAV PARA USUARIO NO LOGUEADO -->
         <template v-if="!currentUser">
              <v-toolbar-title>
                  <router-link to="/" tag="span" style="cursor:pointer">vuetify</router-link>
              </v-toolbar-title>

              <v-spacer></v-spacer>

              <v-toolbar-items>

                      <v-btn color="primary" text small>
                        <router-link :to="{name:'login'}"tag="span">login</router-link>
                      </v-btn>

                      <v-btn color="primary" text small>
                        <router-link :to="{name:'registro'}" tag="span">registrate</router-link>
                      </v-btn>

                </v-toolbar-items>
         </template>
         <!-- FIN NAV PARA USUARIO NO LOGUEADO -->

         <!-- NAV PARA USUARIO LOGUEADO -->
         <template v-else>
             <v-app-bar-nav-icon @click="draweroff"></v-app-bar-nav-icon>
              <v-toolbar-title>
                  <router-link to="/home" tag="span" style="cursor:pointer">{{datocede.cede}}</router-link>
              </v-toolbar-title>

                <v-spacer></v-spacer>

               <v-toolbar-items>

                      <v-btn  text small  @click="logout">
                        <v-icon >mdi-logout</v-icon>
                      </v-btn>

                </v-toolbar-items>
         </template>
         <!--FIN NAV PARA USUARIO LOGUEADO -->
      </v-app-bar>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default{

    name:'Navbar',

    data: () => ({
       activeBtn: 1,
    }),

    computed:{
      ...mapState(['currentUser','datocede'])
    },
    methods:{
      ...mapMutations(['draweroff']),
      logout(){
        this.$store.commit('logout')
        this.$router.push('/')
      },
       getcede()
        {
          this.$store.dispatch('datoscede')
        },

    },
    mounted(){
      this.getcede()
    },
  }
</script>