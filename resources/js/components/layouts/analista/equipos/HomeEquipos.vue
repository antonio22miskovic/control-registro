<template>
	<div>
		 <v-container>
      <v-card
    	:loading="loading"
    	class="mx-auto"
    	max-width="100%"
    	raised
  	  >
   <v-card-title><v-icon color="nav">mdi-plus</v-icon> Añadir nuevo equipo </v-card-title>

    <v-card-text>
    	<v-form ref="form">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Equipo" v-model="data.equipo"
        	  prepend-icon="mdi-laptop" :rules="rules" hint="Nombre del equipo"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field label="Marca" v-model="data.marca"
        	  prepend-icon="mdi-laptop-chromebook" :rules="rules" hint="marca del equipo"></v-text-field>
        </v-col>
      </v-row>
       <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Modelo" v-model="data.modelo"
        	 prepend-icon="mdi-laptop-windows"
        	 :rules="rules" hint="Modelo del equipo"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field
        	 prepend-icon="mdi-cellphone-link" v-model="data.codigo"
        	  label="Codigo" :rules="rules"  hint="Codigo del equipo"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      	<v-col>
      		<v-select
          		:items="categorias"
          		 v-model="data.categoria_id"
          		item-text="categoria"
          		item-key="categoria.id"
          		prepend-icon="mdi-folder-multiple"
          		item-value="id"
          		:rules="rules"
          		label="selecione una categoria"
        	></v-select>
      	</v-col>
      	<v-col>
      		<v-select
          		:items="status"
          		 v-model="data.status"
          		item-text="statu"
          		item-key="statu.statu"
          		prepend-icon="mdi-shuffle"
          		item-value="statu"
          		:rules="rules"
          		label="Estatus del equipo"
        	></v-select>
      	</v-col>
      </v-row>
      	<v-row>
      		<v-col>
      			<v-select
          			:items="departamentos"
          			v-model="data.departamento_id"
          			item-text="departamento"
          			item-key="departamento.id"
          			prepend-icon="mdi-domain"
          			item-value="id"
          			:rules="rules"
          			label="seleccione un departamento"

        		></v-select>
      		</v-col>
      		<v-col>
      		   <v-textarea
      			  label="Descripcion"
      			    prepend-icon="mdi-comment"
      			    class="mx-2"
      			    rows="1"
      			  v-model="data.descripcion"
      			  :rules="rules"
    			></v-textarea>
      		</v-col>
      	</v-row>
      	<v-row>
      		<v-container class="text-center">
      			<v-btn  color="info" @click="guardar">
      				Registrar
      			</v-btn>
      		</v-container>
      	</v-row>
      	</v-form>
</v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>

    </v-container>

	</div>
</template>
<script>
 import Swal from 'sweetalert2'
	export default{
		name:'Equipos',
		mounted(){
			this.getselects()
		},
		data: () => ({

			data:{

				'equipo':'',
    			'modelo':'',
    			'marca':'',
    			'codigo':'',
    			'descripcion':'',
    			'status':'',
        		'departamento_id':'',
        		'categoria_id':'',

			},
			loading: false,
		 	rules: [
        		value => !!value || 'campo requerido.'
      			],
		categorias:[],
      	departamentos:[],
      	status:[{'statu':'activo'},{'statu':'desincorporado'}],

		}),
		methods:{

			getselects(){
				axios.get('/api/get-categorias').then(res =>{
					this.categorias = res.data
				})
				axios.get('/api/get-departamentos').then(res => {
					this.departamentos = res.data

				})
			},
			guardar(){
				this.loading = true
				axios.post('/api/equipos/store',this.data).then(res =>{
					if (res.data === true) {
						this.loading = false
							Swal.fire({
                				position: 'center',
                				icon: 'success',
                				title: 'Equipo registrado con exito',
                				showConfirmButton: false,
                		})
							 this.$refs.form.reset()
					}
				})
			},

		},
		computed:{

		}
	}
</script>