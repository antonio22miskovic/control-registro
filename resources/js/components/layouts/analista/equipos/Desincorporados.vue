<template>
	<div>

			   <template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
        max-width="1000"
        min-width="1000"
        min-height="1000"
        max-height = "1000"
    >

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         Equipo: {{ explorarequipo.equipo }}
        </v-card-title>

          <v-container>
            <v-row>
              <v-col>
                  <v-card-subtitle class="pb-0">Departamento: {{ explorardepartamento.departamento }}</v-card-subtitle>
              </v-col>
              <v-col>
                <v-card-subtitle class="pb-0">Categoria: {{ explorarcategoria.categoria }}</v-card-subtitle>
              </v-col>
               <v-col>
                <v-card-subtitle class="pb-0">Modelo: {{ explorarequipo.modelo }}</v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                  <v-card-subtitle class="pb-0">Marca: {{ explorarequipo.marca }}</v-card-subtitle>
              </v-col>
              <v-col>
                <v-card-subtitle class="pb-0">Codigo: {{ explorarequipo.codigo }}</v-card-subtitle>
              </v-col>
               <v-col>
                <v-card-subtitle class="pb-0">Descripcion: {{ explorarequipo.descripcion }}</v-card-subtitle>
              </v-col>
            </v-row>
                <p clas
                <p class="text-center"> Personal vinculado al equipo </p>
                <v-container v-if="empleados.length > 0">
                  <v-row>

                            <v-col v-for="card in empleados" :key="card.id">
                                <v-flex >
                               <v-card v-if="card.nombre != $route.params.nombre "
                                class="mx-auto"
                                max-width="344"
                                  outlined
                                  >
                                    <v-list-item three-line>
                                      <v-list-item-content>
                                        <div class="overline mb-4">Asignacion: {{ card.asignacion }}</div>
                                        <v-list-item-title class="headline mb-4">Nombre: {{ card.nombre }}</v-list-item-title>
                                        <v-list-item-subtitle>Apellido: {{ card.apellido }}</v-list-item-subtitle>
                                      </v-list-item-content>

                                      <v-list-item-avatar
                                        tile
                                        size="80"
                                          >
                                          <v-img
                                          :src="'/img/avatares/' + card.avatar"
                                          height="200px">
                                        </v-img>
                                      </v-list-item-avatar>
                                    </v-list-item>
                                  </v-card>
                                </v-flex>
                            </v-col>

                  </v-row>
            </v-container>
          </v-container>
            <v-container v-if="empleados.length === 0">
                          <p class="text-center">este equipo no ah sido asignado a ningun personal!</p>
                      </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
          Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>





	<template>
  <v-row justify="center">
    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-card
      :loading="loading2"
      class="mx-auto"
      max-width="100%"
      raised
      >
   <v-card-title> Actualizar los datos </v-card-title>

    <v-card-text>
     <v-form ref="actualizar">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Equipo" v-model="fillequipo.equipo"
        	  prepend-icon="mdi-laptop" :rules="rules" hint="Nombre del equipo"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field label="Marca" v-model="fillequipo.marca"
        	  prepend-icon="mdi-laptop-chromebook" :rules="rules" hint="marca del equipo"></v-text-field>
        </v-col>
      </v-row>
       <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
        	 <v-text-field label="Modelo" v-model="fillequipo.modelo"
        	 prepend-icon="mdi-laptop-windows"
        	 :rules="rules" hint="Modelo del equipo"></v-text-field>
        </v-col>
        <v-col>
        	 <v-text-field
        	 prepend-icon="mdi-cellphone-link" v-model="fillequipo.codigo"
        	  label="Codigo" :rules="rules"  hint="Codigo del equipo"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
      	<v-col>
      		<v-select
          		:items="categorias"
          		 v-model="fillequipo.categoria_id"
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
          		 v-model="fillequipo.status"
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
          			v-model="fillequipo.departamento_id"
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
      			  v-model="fillequipo.descripcion"
      			  :rules="rules"
    			></v-textarea>
      		</v-col>
      	</v-row>
      	 <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="actualizar">actualizar</v-btn>
        </v-card-actions>
      	</v-form>
</v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
    </v-dialog>
  </v-row>
</template>









	<v-card
    	:loading="loading"
    	class="mx-auto"
    	max-width="100%"
    	raised
  	  >
      <v-container>
        <v-row>
          <v-col>
             <v-card-title><v-icon color="nav">mdi-laptop-off</v-icon> Equipos Desincorporados </v-card-title>
          </v-col>
          <v-col>
             <v-form ref="filtro">
                 <v-text-field label="Buscar"
                    v-model="datafiltro"
                    :append-icon="b ? 'mdi-magnify' : 'mdi-restart'"
                    :rules="rules"
                    :hint="ocultarbuscador ? 'no hubo resultados en la busqueda verifique sus datos por favor' : 'Busqueda de equipos'"
                    :error="ocultarbuscador"
                    @click:append="buscarfiltro">
                </v-text-field>
              </v-form>
          </v-col>
        </v-row>

      	<v-form ref="form">
    <v-row align="center">

      <v-col>
        <v-select
          :items="departamentos"
          item-text="departamento"
          item-key="departamentos.id"
          :rules="rules"
          prepend-icon="mdi-domain"
          item-value="id"
          v-model="depa"
          label="seleccione un departamento"
        ></v-select>
      </v-col>

      		<v-container class="text-center">
      			<v-btn  color="info" @click="buscar">
      				buscar
      			</v-btn>
      		</v-container>

      </v-col>
    </v-row>
      	  </v-form>
  </v-container>
   <v-divider></v-divider>
	 <v-simple-table v-if="desserts.length > 0"  height="300px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>

          <th class="text-left">equipo</th>
          <th class="text-left">modelo</th>
          <th class="text-left">categoria</th>
          <th class="text-left">codigo</th>
          <th class="text-left">editar</th>
          <th class="text-left">detallar</th>
           <th class="text-left">pdf</th>
          <th class="text-left">eliminar</th>

        </tr>
      </thead>
      <tbody>

        <tr v-for="item in desserts" :key="item.id">

          <td>{{ item.equipo }}</td>
          <td>{{ item.modelo }}</td>
          <td>{{ item.categoria }}</td>
          <td>{{ item.codigo }}</td>

          <td>
            <v-btn icon color="indigo" @click="mostraredit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>

          <td>

            <v-btn icon color="teal darken-2"  @click="ver(item.id)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>

          </td>

            <td>

            <v-btn icon color="dark"  >
              <v-icon>mdi-shredder</v-icon>
            </v-btn>

          </td>

          <td>
            <v-btn icon color="pink"@click="eliminar(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>

        </tr>

      </tbody>
    </template>
  </v-simple-table>
     <template v-if="desserts.length > 0">
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
     					No hay Equipos registrados en este departamento!
   			 </v-alert>
   			</v-container>
		</template>
		<template v-if="bienvenida === true">
		  <v-container>
			 <v-alert
      		color="#2A3B4D"
      		icon="mdi-human-greeting"
      		outlined >
      			Bienvenido al modulo de Administracion de Equipos Desincorporados, Debe seleccionar un departamento Para Facilitar La busqueda y control de los Equipos.!
            </v-alert>
          </v-container>
		</template>
</v-card>
	</div>
</template>
<script>
import Swal from 'sweetalert2'
import {mapState, mapMutations} from 'vuex'

	export default{

		name:'DateTable',
    components:{


    },

		data:() => ({

        desserts: [],
        loading:false,
        loading2:false,
        bienvenida:true,
        ocultar:false,
        categoria:'',
        b:true,
         empleados:[],
         explorarequipo:'',
         explorardepartamento:'',
         explorarcategoria:'',
		     dialog:false,
		     dialog2:false,
         departamentos:[],
         ocultarbuscador:false,
         datafiltro:'',
         categorias:[],
        rules: [
        		value => !!value || 'campo requerido.'
      			],
        depa:'',
        status:[{'statu':'activo'},{'statu':'desincorporado'}],
        paginate:{

                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to' : 0,

            },
            fillequipo:{
            	'id': '',
				'equipo': '',
				'codigo': '',
				'modelo': '',
				'marca': '',
				'status': '',
				'descripcion': '',
				'departamento_id': '',
				'categoria_id': ''
            },

		}),

    created(){

       this.getselects()
    },

    methods:{

      getequipos(page){

      	this.loading = true
        this.datafiltro = null
        let status = 'desincorporado'

        if(this.depa !== 0) {

           var url = '/api/equipos/listado/'+this.depa+'/'+ status +'?page='+page

         }else{

           url = '/api/equipos/listado/'+ this.fillequipo.departamento_id +'/'+ status +'?page='+page
         }

          axios.get(url)
          .then(res =>{
            if (res.data.equipo.length > 0) {

                  this.desserts = res.data.equipo
                  this.paginate = res.data.paginate
                  this.loading = false
                  this.bienvenida = false
                  this.ocultar = false

             }else{

                  this.desserts = []
             			this.ocultar = true
                  this.loading = false

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

     getselects(){
				axios.get('/api/get-categorias').then(res =>{
					this.categorias = res.data
				})
				axios.get('/api/get-departamentos').then(res => {
					this.departamentos = res.data

				})
			},

        Chagepage(page){

      this.paginate.current_page = page;
      this.getequipos(page);

    },

    buscar(){
         if (this.$refs.form.validate()) {
    	     this.getequipos()
        }
    },

    eliminar(item){

       Swal.fire({
      title: 'ADVERTENCIA!!',
      text: "Deseas eliminar el equipo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.value) {

            axios.delete('/api/equipos/delete/'+item)
            .then(res=>{
            	if (res.data === true) {

                Swal.fire(
                 'eliminado',
                  'se ah eliminado con exito.',
                  'success')
                if(this.depa !== null){
                   this.getequipos(this.paginate.current_page)
                }else{
                   this.desserts = []
                   this.buscarfiltro()
               }
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
          }
          })
      },
      ver(item){
      	  axios.get('/api/equipos/show/'+ item).then(res => {
             this.explorardepartamento = res.data.departamento
             this.explorarequipo = res.data
             this.explorarcategoria = res.data.categoria
             this.empleados = res.data.datos_empleados
             this.dialog = true

          })
      },
      actualizar(){
          if (this.$refs.actualizar.validate()) {
      	axios.put('/api/equipos/update/'+ this.fillequipo.id, this.fillequipo).then(res =>{
      		if (res.data === true) {
      			this.dialog2 = false
      			Swal.fire({
                			position: 'center',
                			icon: 'success',
                			title: 'Equipo actualizado con exito',
                			showConfirmButton: false,
                		})
            if(this.depa !== null){
                this.getequipos(this.paginate.current_page)
            }else{
               this.desserts = []
                   this.buscarfiltro()
               }

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
      }
      },
      mostraredit(item){
      			this.fillequipo.id =  item.id,
                this.fillequipo.equipo =  item.equipo,
                this.fillequipo.codigo =  item.codigo,
                this.fillequipo.modelo =  item.modelo,
                this.fillequipo.marca =  item.marca,
                this.fillequipo.status =  item.status,
                this.fillequipo.descripcion =  item.descripcion,
                this.fillequipo.departamento_id =  item.departamento_id,
                this.fillequipo.categoria_id =  item.categoria_id,
                this.dialog2 = true
      },
      buscarfiltro()
      {
       if (this.$refs.filtro.validate()){
            this.loading = true
            this.b = false
            let status = 'desincorporado'
          axios.get('/api/filtro/equipos/'+ status +'/'+this.datafiltro).then(res => {

              if (res.data.equipo.length > 0){

                  this.desserts = res.data.equipo
                  this.paginate = res.data.paginate
                  this.b = true
                  this.loading = false
                  this.ocultarbuscador = false
                  this.depa = null
                  this.bienvenida = false
                  this.ocultar = false

              }else{

                  this.ocultarbuscador = true
                  this.ocultar = false
                  this.loading = false

              }

          }).catch((error) => {
              this.b = false
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
        }
      }
    },
    computed:{


  },

}
</script>