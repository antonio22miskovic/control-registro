<template>
	<div>
		<v-container>
		<v-card
    	:loading="loading"
    	class="mx-auto my-12"
    	max-width="100%"
    	raised>
      		<v-container>
      			<v-card-title><v-icon color="blue">mdi-account-multiple</v-icon> usuarios encargados </v-card-title>
      			<v-row v-for="item of users" :key="item.id">
      				<v-col>
      					  <v-card
    						class="mx-auto"
    						max-width="434"
   							tile>
    							<v-img
      							height="100%"
      							src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
      							<v-row
        						align="end"
        						class="fill-height"
      							>
        							<v-col
          							align-self="start"
          							class="pa-0"
          							cols="12"
        							>
          								<v-avatar
            								class="profile"
            								color="grey"
            								size="164"
            								tile>
            								<v-img
            								:src="'/img/avatares/' + item.avatar">
            								</v-img>
          								</v-avatar>
        							</v-col>
        							<v-col class="py-0">
         								 <v-list-item
            								color="rgba(0, 0, 0, .4)"
            								dark>
            								<v-list-item-content>
            									<v-list-item-title class="title"> Analista </v-list-item-title>
              									<v-list-item-title class="title">Usuario: {{ item.username }}</v-list-item-title>
              									<v-list-item-title class="title">Email: {{ item.email }}</v-list-item-title>
              									<v-list-item-title class="title">Nombre: {{ item.nombre }}</v-list-item-title>
              									<v-list-item-title class="title">Apellido: {{ item.apellido }}</v-list-item-title>
              									<v-list-item-title class="title">Cedula: {{ item.cedula }}</v-list-item-title>
              									<v-list-item-title class="title">Telefono: {{ item.telefono }}</v-list-item-title>

            								</v-list-item-content>
          								</v-list-item>
        							</v-col>
      							</v-row>
    						</v-img>
  						</v-card>
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