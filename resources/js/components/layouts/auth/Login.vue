<template>
  <div>
  <v-container fluid  class="my-12">
    <v-row class="text-xs-center" justify="center">
      <v-flex xs4>
        <v-card height="500px">
           <v-img src="/logos/sindoni3.jpg" height="500px"></v-img>
        </v-card  :loading="loading">
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title >
              <h4 >SINDONI</h4>
            </v-card-title>
            <v-form ref="form" method="post"  v-model="valid">
            <v-text-field prepend-icon="mdi-account"  :rules="[ruleuser.required]" v-model="username" name="username" label="usuario"  required type="text"></v-text-field>
           <v-text-field
           prepend-icon="mdi-lock"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'password'"
            name="password"
            required
            label="password"
            hint="contraseña"
            value="wqfasds"
            v-model="password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
            <v-card-actions>
              <v-btn primary large block :disabled="!valid" @click="autenticacion">iniciar sesion</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
             <v-alert class="my-8" v-if="mostrar" type="error">
              {{ auth_error }}
            </v-alert>
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
      mostrar:false,
      password:'',
      loading:false,
      valid:false,
      error:null,
       show2: false,
       ruleuser: {
        required: value => !!value || 'Usuario requerido.'
       },
        rules: {
          required: value => !!value || 'Contrseña requerida.',
        },

    }),

        methods:{

          ...mapMutations(['header']),

          autenticacion(){
              this.loading = true
              this.$store.dispatch('login')
              const autorizacion = new Auth(this.username, this.password)
                autorizacion.login().then(res =>{

                  this.$store.commit('loginexitoso', res)
                  this.header()
                  this.mostrar = false
                  this.loading = false
                  this.$router.push({path:'/home'})
                  })
                  .catch((error) => {
                    this.mostrar = true
                    this.password = null
                    this.$refs.form.validate()
                    this.loading = false
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