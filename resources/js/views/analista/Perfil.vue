<template>
	<div>
		<v-container>
		<v-card
    	:loading="loading"
    	class="mx-auto my-12"
    	max-width="100%"
    	raised>
      		<v-container>
      			<v-card-title><v-icon color="nav">mdi-account-multiple</v-icon> usuarios encargados </v-card-title>
      					<v-container>
      <template v-if="users.length > 0">
      <v-row  dense>
        <v-col v-for="item in users" :key="item.id">
      <v-flex>
        <v-card
          class="d-flex flex-wrap"
           max-width="300"
           outlined
           shaped >
            <v-img
              class="dark--text align-end"
              height="220px"
              :src="'/img/avatares/' + item.avatar" >
             </v-img>

             <v-card-subtitle class="pb-0"></v-card-subtitle>

            <v-card-text class="text--primary">
              <div> Usuario: {{ item.username }}</div>
              <div>Nombre: {{ item.nombre }}</div>
              <div>Apellido: {{ item.apellido }}</div>
              <div>Cedula: {{ item.cedula }}</div>
              <div>Telefono: {{ item.telefono }}</div>
              <div> Email: {{ item.email }}</div>
            </v-card-text>
          </v-card>
      </v-flex>
    </v-col>
    </v-row>
    </template>
    </v-container>
      				</v-col>
      			</v-row>
      		</v-container>
      	</v-card>
      </v-container>
	</div>
</template>
<script>

	export default{
		name:'Perfil',
		mounted(){
			this.getusers()
		},
		data: () => ({
			users:[],
			loading:false,
		}),
		methods:{
			getusers(){
				axios.get('/api/get-users').then(res => {
				  this.users = res.data
				})
			}
		},
		computed:{

		}
	}
</script>