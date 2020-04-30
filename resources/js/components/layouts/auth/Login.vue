<template>
  <v-container fluid >
    <v-row class="text-xs-center" justify="center">
      <v-flex xs4>
        <v-card height="500px">
           <v-img src="/logos/sindoni3.jpg" height="500px"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title >
              <h4 >SINDONI</h4>
            </v-card-title>
            <v-form >
            <v-text-field prepend-icon="mdi-account" v-model="username" name="username" label="usuario" required type="text"></v-text-field>
            <v-text-field prepend-icon="mdi-lock" v-model="password" name="Password" label="contaseña" type="password" required></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="autenticacion">iniciar sesion</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>

        </v-container>
      </v-flex>
    </v-row>
  </v-container>
</template>
<script>
import { Auth } from '../../../helpers/auth'
import { mapState , mapGetters , mapActions , mapMutations } from 'vuex'
	export default{
		name:'Login',
    data:() =>({

      username:'',
      password:'',
      errors:'',

    }),

        methods:{

          ...mapMutations(['header']),

          autenticacion(){

              this.$store.dispatch('login')
              const autorizacion = new Auth(this.username, this.password)
                autorizacion.login().then(res =>{

                  this.$store.commit('loginexitoso', res)
                  this.header()
                  this.$router.push({path:'/home'})
                  })
                  .catch((error) => {

                  this.$store.commit('loginfallido', {error})

                  })

        },
      },
        computed:{

      ...mapState(['auth_error'])

    },

	}
</script>