<template>
	<div>
	     		<v-container>
      			<template>
  <v-card color="indigo lighten-3">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 dark--text">Control y Registro</h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="primary"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="deep-purple lighten-5"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
      		</v-container>
          <v-container>
            <v-row>
              <v-col>
                <v-card
                   class="d-flex flex-wrap"
                    max-width="400"
                    outlined
                    shaped >
                  <v-img
                    class="dark--text align-end"
                    height="320px"
                    :src="'/img/avatares/' + user.avatar" >
                </v-img>

                <v-card-subtitle class="pb-0"></v-card-subtitle>

               <v-card-text class="text--primary">
                  <div>Username: {{ user.username }}</div>
                  <div>Email: {{ user.email }}</div>
                  <div>Nombre: {{ user.nombre }}</div>
                  <div>Apellido: {{ user.apellido }}</div>
                  <div>Cedula: {{ user.cedula }}</div>
                  <div>Telefono: {{ user.telefono }}</div>
            </v-card-text>
          </v-card>

              </v-col>
              <v-col>

              </v-col>
            </v-row>
          </v-container>

	</div>
</template>
<script>
import { mapState , mapGetters , mapActions , mapMutations } from 'vuex'
	export default{
		name:'Home',
    mounted(){
      this.getinfo()
    },
		data:() => ({
			  tab: null,
        user:'',
        items: [
          'bienvenida', 'Equipos', 'Cede', 'personal',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}),
		methods:{
      getinfo(){
        axios.get('/api/get-currentuser').then(res =>{
          this.user = res.data
        }).catch((error) => {
                      if (error.response) {

                             console.log(error.response.data);
                             console.log(error.response.status);
                             console.log(error.response.headers);

                     } else if (error.request) {

                            console.log(error.request);
                     } else {

                            console.log('Error', error.message);
                     }
                 })
      },
			},
		computed:{

		}
		}
</script>
<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>