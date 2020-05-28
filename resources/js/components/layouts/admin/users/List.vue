<template>
	<div>
	<v-container class="my-12">
		<v-card
    	 :loading="loading"
      class="mx-auto"
      max-width="100%"
    	raised>
      		<v-container>
      			<v-row>
      				<v-col>
      					<v-card-title><v-icon color="nav">mdi-account-multiple</v-icon> Usuarios </v-card-title>
      				</v-col>
      				<v-col>
      					 <v-form ref="filtro">
                 <v-text-field label="Buscar"
                    v-model="datafiltro"
                    :append-icon="b ? 'mdi-magnify' : 'mdi-restart'"
                    :rules="rules"
                    :hint="ocultarbuscador ? 'no hubo resultados en la busqueda verifique sus datos por favor' : 'Busqueda de usuarios'"
                    :error="ocultarbuscador"
                    @click:append="buscarfiltro">
                </v-text-field>
              </v-form>
      				</v-col>
      			</v-row>

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
              <div> Cede: {{ item.cede }}</div>
              <div> Usuario: {{ item.username }}</div>
              <div>Nombre: {{ item.nombre }}</div>
              <div>Apellido: {{ item.apellido }}</div>
              <div>Cedula: {{ item.cedula }}</div>
              <div>Telefono: {{ item.telefono }}</div>
              <div> Email: {{ item.email }}</div>
            </v-card-text>
            <v-card-actions>

            			<v-btn
        				color="green"
        				text @click="detallar(item)">
        				<v-icon>mdi-eye</v-icon>
      					</v-btn>

      					<v-btn
        				color="warning"
        				text @click="mostrarmodal(item)">
        				<v-icon>mdi-account-edit</v-icon>
      					</v-btn>


      					<v-btn
        				color="red"
        				text @click="eliminar(item.id_empleado)">
        				<v-icon>mdi-account-remove</v-icon>
      					</v-btn>

    				</v-card-actions>
          </v-card>
      </v-flex>
    </v-col>
    </v-row>
    </template>
    </v-container>
      				</v-col>
      			</v-row>
      		</v-container>
      		   <template v-if="users.length > 0">
  <div class="text-center">

  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="paginate.current_page"
            class="my-4"
            :length="paginate.last_page"
            @input="Chagepage(paginate.current_page)"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>
<template v-if="ocultar === true">
			<v-container>
			  <v-alert
      		  outlined
      		  type="warning"
      		  prominent
      		  border="left"
    		  >
     					No hay Usuarios Registrados!
   			 </v-alert>
   			</v-container>
		</template>
      	</v-card>
      </v-container>
	</div>
</template>
<script>
	export default{
		name:'Usuarios',
		mounted(){
			this.getusers()

		},
		data: () => ({
			users:[],
			loading:false,
			valid:false,
			b:true,
			ocultarbuscador:false,
			datafiltro:'',
			ocultar: false,
			paginate:{
                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to' : 0,
            },
             rules: [
            value => !!value || 'campo requerido.'
            ],

		}),
		methods:{


			getusers(){
				this.loading = true
				axios.get('/api/users').then(res => {
					if (res.data.usuarios.length > 0) {
				  		this.users = res.data.usuarios
				  		this.paginate =res.data.paginate
				  		this.loading = false
				  	}else{
				  		this.loading = false
				  		this.ocultar = false
				  	}
				}).catch((error) => {
     				this.loading = false
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

			mostrarmodal(item){

			},
			eliminar(item){

			},
			detallar(item){

			},
			buscarfiltro(){

			},

	}
}
</script>