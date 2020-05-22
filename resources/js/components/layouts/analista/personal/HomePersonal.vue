<template>
	<div>

  <v-card
      :loading="loading"
      class="mx-auto"
      max-width="100%"
      raised
      >
      <v-container>
   <v-card-title><v-icon color="nav">mdi-account-star</v-icon>Listado de Personal</v-card-title>


      <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card
      :loading="loading1"
      class="mx-auto my-12"
      max-width="100%"
      raised
      >
   <v-card-title> Actualizar los datos </v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid1">
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
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" :disabled="!valid1" text @click="actualizar">Save</v-btn>
        </v-card-actions>
        </v-form>
</v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
    </v-dialog>
  </v-row>
</template>






	 <v-container>
	 	<v-form ref="bus">
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">

        		<v-select
          			:items="departamentos"
          			item-text="departamento"
          			item-key="id"
                :rules = "rules"
          			prepend-icon="mdi-domain"
          			v-model="depa"
          			item-value="id"
          			label="seleccione un departamento"
        		></v-select>
			</v-col>
			<v-col class="d-flex" cols="12" sm="6">
      			<v-btn
        		 color="blue"
        	     @click="buscar">
      			<v-icon>mdi-account-search</v-icon>
      			</v-btn>
      		</v-col>
          <!-- <v-col>

          </v-col> -->
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
      				class="dark--text align-end"
      				height="220px"
      				:src="'/img/avatares/' + item.avatar" >
   				   </v-img>

    			   <v-card-subtitle class="pb-0"></v-card-subtitle>

    				<v-card-text class="text--primary">
              <div> Cargo: {{ item.asignacion }}</div>
    					<div>Nombre: {{ item.nombre }}</div>
      					<div>Apellido: {{ item.apellido }}</div>
     					<div>Cedula: {{ item.cedula }}</div>
     					<div>Telefono: {{ item.telefono }}</div>
    				</v-card-text>

    				<v-card-actions>

                <v-btn
                color="blue"
                text>
                <router-link :to="{name:'asignarequipos', params:{id:item.id_empleado,nombre:item.nombre,departamento:depa}}" tag="span">  <v-icon>mdi-desktop-classic</v-icon> </router-link>
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
  </v-container>
</v-card>
	</div>
</template>
<script>
import Swal from 'sweetalert2'
	export default{
		name:'Personal',
		mounted(){

			this.listardepartamentos()
       this.getselects()

		},
		data: () => ({
      dialog:false,
			depa:'',
			bienvenida:true,
			ocultar: false,
      showdata:'',
      valid:false,
      valid1:false,
			personal:[],
      equipostable:[],
      mostrarexplorar:false,
      imageName:'',
      loading: false,
      loading1: false,
          selection: 1,
           rules: [
            value => !!value || 'campo requerido.'
          ],
          file: [
            value => !value || value.size < 2000000 || 'Su imagen de perfil no pude ser mayor 2 MB!',
          ],
          asignaciones:[],
          departamentos:[],
			 paginate:{

                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to' : 0,

            },
            data:{
        'id':'',
        'nombre':'',
        'apellido':'',
        'cedula':'',
        'telefono':'',
        'avatar':'',
        'asignacion':'',
        'departamento':''

      },



		}),
		methods:{
        pickFile(){
            this.$refs.image.click()
        },
      getselects(){
        axios.get('/api/get-asignaciones').then(res =>{
          this.asignaciones = res.data
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

      mostrarmodal(item){

        this.dialog= true
        console.log(item)

        this.data.id = item.id_empleado
        this.data.nombre = item.nombre
        this.data.apellido = item.apellido
        this.data.cedula=  item.cedula
        this.data.telefono=  item.telefono
        this.imageName=  item.avatar
        this.data.asignacion=  item.asignacion_id
        this.data.departamento= this.depa

      },


      actualizar(){

            this.loading1 = true
            axios.put('/api/personal/update/' + this.data.id,this.data).then(res =>{
          if (res.data === true) {
            this.loading1 = false
            this.dialog = false
            Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Actualizacion completada',
                    showConfirmButton: false,
            })
            this.listar(this.paginate.current_page)

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
         buscar(){
          if (this.$refs.bus.validate()) {
            this.listar()
          }

         },

			listar(page){
        this.loading = true
        if (this.depa === null) {
            // this.mensaje.listar
        }else{
				this.bienvenida = false
				axios.get('/api/listado/'+ this.depa +'?page='+page).then(res => {
						this.personal = res.data.personal
             this.paginate = res.data.paginate
               this.loading = false
             				if (this.personal.length > 0) {
             					this.ocultar = false

             				}else{
             					this.ocultar = true
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
        }
			},

			Chagepage(page){

      			this.paginate.current_page = page
      			this.listar(page)

    		},

        ver(equipo){
          axios.get('/api/equipos/show/'+ equipo).then(res => {
              console.log(res.data)
          })
        },

        eliminar(item){

            Swal.fire({
             title: 'ADVERTENCIA!!',
             text: "¿ Esta seguro que Desea eliminar ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Eliminar!'
            }).then((result) => {
                if (result.value) {
                    axios.delete('/api/personal/delete/'+ item).then(res =>{
                    this.listar(this.current_page)
                     Swal.fire(
                    'eliminado',
                    'se ah eliminado con exito.',
                    'success')

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
                  }
                })
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