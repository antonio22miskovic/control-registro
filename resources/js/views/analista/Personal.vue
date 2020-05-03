<template>
	<div>
	 <v-container>
	 	<v-form>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">

        		<v-select
          			:items="departamentos"
          			item-text="departamento"
          			item-key="departamento.id"
          			prepend-icon="mdi-domain"
          			v-model="depa"
          			item-value="id"
          			label="seleccione un departamento"
        		></v-select>
			</v-col>
			<v-col class="d-flex" cols="12" sm="6">
      			<v-btn
        		 color="blue"
        	     @click="listar">
      			<v-icon>mdi-account-search</v-icon>
      			</v-btn>
      		</v-col>
		</v-row>
		</v-form>
	 </v-container>
		<v-container>
			<template v-if="personal.length > 0">
			<v-row  dense>
				<v-col v-for="item in personal" :key="item.id">
			<v-flex>
				<v-card
				  class="d-flex flex-wrap"
   				 max-width="300"
    			 outlined
    			 shaped >
    				<v-img
      				class="white--text align-end"
      				height="220px"
      				:src="'/img/avatares/' + item.avatar" >
      					<v-card-title>{{ item.asignacion }}</v-card-title>
   				   </v-img>

    			   <v-card-subtitle class="pb-0"></v-card-subtitle>

    				<v-card-text class="text--primary">
    					<div>Nombre: {{ item.nombre }}</div>
      					<div>Apellido: {{ item.apellido }}</div>
     					<div>Cedula: {{ item.cedula }}</div>
     					<div>Telefono: {{ item.telefono }}</div>
    				</v-card-text>

    				<v-card-actions>
      					<v-btn
        				color="blue"
        				text >
      					<v-icon>mdi-desktop-classic</v-icon>
      					</v-btn>

      					<v-btn
        				color="warning"
        				text >
        				<v-icon>mdi-account-edit</v-icon>
      					</v-btn>

      					<v-btn
        				color="red"
        				text >
        				<v-icon>mdi-account-remove</v-icon>
      					</v-btn>

    				</v-card-actions>
  				</v-card>
			</v-flex>
		</v-col>
		</v-row>
		</template>
		</v-container>
	  	<template v-if="personal.length > 0">
  			<div class="text-center">
  				<v-container>
    				<v-row justify="center">
      				<v-col cols="8">
        				<v-container class="max-width">
          				<v-pagination
            				v-model="paginate.current_page"
            				class="my-4"
            				:length="paginate.last_page"
            				@input="Chagepage(paginate.current_page)">				 </v-pagination>
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
     					No hay empleados registrados en este departamento!
   			 </v-alert>
   			</v-container>
		</template>
		<template v-if="bienvenida === true">
		  <v-container>
			 <v-alert
      		color="#2A3B4D"
      		icon="mdi-human-greeting"
      		outlined >
      			Bienvenido al modulo de Administracion de Personal, Debe seleccionar un departamento Para Facilitar La busqueda y control del Personal.!
            </v-alert>
          </v-container>
		</template>
	</div>
</template>
<script>

	export default{
		name:'Personal',
		mounted(){

			this.listardepartamentos()

		},
		data: () => ({

			departamentos:[],
			depa:'',
			bienvenida:true,
			ocultar: false,
			personal:[],
			 paginate:{

                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to' : 0,

            },

		}),
		methods:{

			listar(page){
				this.bienvenida = false
				axios.get('/api/listado/'+ this.depa +'?page='+page).then(res => {
						this.personal = res.data.personal
             			this.paginate = res.data.paginate
             				if (this.personal.length > 0) {
             					this.ocultar = false
             				}else{
             					this.ocultar = true
             				}

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
			Chagepage(page){

      			this.paginate.current_page = page;
      			this.listar(page);

    		},
    		listardepartamentos(){

    			axios.get('/api/get-departamentos').then(res => {
						this.departamentos = res.data

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