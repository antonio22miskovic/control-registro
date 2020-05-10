<template>
	<div>
	 <v-container>
	 	<v-form>
		<v-row align="center">
			<v-col class="d-flex" cols="12" sm="6">

        		<v-select
          			:items="departamentos"
          			item-text="departamento"
          			item-key="id"
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
        				text >
      					<v-icon>mdi-information-outline</v-icon>
      					</v-btn>

                <v-btn
                color="blue"
                text
                @click="addequipo(item.id)">
                <v-icon>mdi-desktop-classic</v-icon>
                </v-btn>


      					<v-btn
        				color="warning"
        				text >
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
    <template>
  <v-row justify="center">
     <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Equipos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>
	</div>
</template>
<script>
import Swal from 'sweetalert2'
	export default{
		name:'Personal',
		mounted(){

			this.listardepartamentos()

		},
		data: () => ({

      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
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
        if (this.depa === null) {
            // this.mensaje.listar
        }else{
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

      addequipo(item){
        this.dialog = true
        axios.get('/api/personal/show/'+item).then(res =>{

        })
      },
			Chagepage(page){

      			this.paginate.current_page = page
      			this.listar(page)

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