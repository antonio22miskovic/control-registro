<template>
    <div>
      <v-card
    	:loading="loading"
    	class="mx-auto"
    	max-width="100%"
    	raised
  	  >
   <v-card-title><v-icon color="nav">mdi-account-plus</v-icon> Añadir Personal  </v-card-title>

    <v-card-text>
    	<v-form ref="form">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Nombre" v-model="data.nombre"
        	  prepend-icon="mdi-human-male" :rules="rules" hint="Nombre"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field label="Apellido" v-model="data.apellido"
        	  prepend-icon="mdi-human-handsdown" :rules="rules" hint="Apellido"></v-text-field>
        </v-col>
      </v-row>
       <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Cedula" v-model="data.cedula"
        	 prepend-icon="mdi-contacts"
        	 :rules="rules"  hint=" cedula de identidad"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field
        	 prepend-icon="mdi-phone" v-model="data.telefono"
        	  label="Telefono" :rules="rules"  hint=" numero telefonico"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      	<v-col>
      		 <v-text-field
   				accept="image/png, image/jpeg, image/bmp"
    			placeholder="imagen de perfil"
    			prepend-icon="mdi-camera"
    			label="Avatar"
    			v-model="imageName"
    			@click='pickFile'
  			></v-text-field>
  			<input
				type="file"
				:rules="file"
				style="display: none"
				ref="image"
				accept="image/*"
				@change="obtenerimagen"
				>
      	</v-col>
      	<v-col>
      		<v-select
          		:items="asignaciones"
          		 v-model="data.asignacion"
          		item-text="asignacion"
          		item-key="asignacion.id"
          		prepend-icon="mdi-shopping"
          		item-value="id"
          		label="selecione un cargo"
        	></v-select>
      	</v-col>
      </v-row>
      	<v-row>
      		<v-col>
      			<v-select
          			:items="departamentos"
          			v-model="data.departamento"
          			item-text="departamento"
          			item-key="departamento.id"
          			prepend-icon="mdi-domain"
          			item-value="id"
          			label="seleccione un departamento"

        		></v-select>
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

    </div>
</template>
<script>
 import Swal from 'sweetalert2'
	export default{
		name:'NewPersonal',
		mounted(){
			this.getselects()
		},
		data: () => ({
			data:{

				'nombre':'',
				'apellido':'',
				'cedula':'',
				'telefono':'',
				'avatar':'',
				'asignacion':'',
				'departamento':''

			},
			imageName:'',
			loading: false,
      		selection: 1,
      		 rules: [
        		value => !!value || 'campo requerido.'
      		],
      		file: [
        		value => !value || value.size < 2000000 || 'Su imagen de perfil no pude ser mayor 2 MB!',
      		],
      		asignaciones:[],
      		departamentos:[],

		}),
		methods:{
			pickFile(){
            this.$refs.image.click()
        },
			getselects(){
				axios.get('/api/get-asignaciones').then(res =>{
					this.asignaciones = res.data
				})
				axios.get('/api/get-departamentos').then(res => {
					this.departamentos = res.data

				})
			},
			obtenerimagen(e){
				let file = e.target.files[0]
				this.data.avatar = file
				this.imageName = file.name
				this.cargarimagen(file)
			},

			cargarimagen(file){

				let reader = new FileReader()
				reader.onload = (e) =>{
					this.data.avatar = e.target.result
				}
				reader.readAsDataURL(file)

			},
			guardar(){

        		this.loading = true
        		axios.post('/api/personal/store',this.data).then(res =>{
					if (res.data === true) {
						this.loading = false
						Swal.fire({

                				position: 'center',
                				icon: 'success',
                				title: 'solicitud registrada con exito',
                				showConfirmButton: false,

                		})
                		 this.$refs.form.reset()
					}

				}).catch((error) => {

                        if (error.response) {

                            console.log(error.response.data)
                            console.log(error.response.status)
                            console.log(error.response.headers)

                        } else if (error.request) {

                            console.log(error.request)

                          } else {

                              console.log('Error', error.message)

                          }
                    })

     		 },

			},
		computed:{

		}
	}
</script>