<template>
  <div>
  <v-container fluid  class="my-12">
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
            <v-text-field prepend-icon="mdi-account" v-model="username" name="username" label="usuario" color="blue" required type="text"></v-text-field>
           <v-text-field
           prepend-icon="mdi-lock"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="password"
            label="password"
            hint="contraseña"
            value="wqfasds"
            color="blue"
            v-model="password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="autenticacion">iniciar sesion</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>

        </v-container>
      </v-flex>
    </v-row>
  </v-container>
</div>
</template>
<script>
import { Auth } from '../../../helpers/auth'
import { mapState , mapGetters , mapActions , mapMutations } from 'vuex'
	export default{
		name:'Login',
    data:() =>({

      username:'',
      password:'',
      error:null,
       show2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 3 || 'Min 3 caracteres',
        },

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
                  console.log(this.auth_error)
                  })

        },
      },
        computed:{

      ...mapState(['auth_error'])

    },

	}
</script>