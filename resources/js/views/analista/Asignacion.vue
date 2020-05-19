<template>
	<div>




	<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card
      :loading="loading"
      class="mx-auto"
      max-width="100%"
      raised
      >
   <v-card-title> Actualizar los datos </v-card-title>

    <v-card-text>
     <v-form >
      <v-row
        align="center"
        class="mx-0"
      >

        	 <v-text-field label="Asignacion" v-model="fillasignacion.asignacion"
        	  prepend-icon="mdi-shopping" :rules="rules" hint="Nombre de la asignacion"></v-text-field>
      </v-row>
       <v-row
        align="center"
        class="mx-0"
      >
      	 <v-textarea
      			  label="Descripcion"
      			    prepend-icon="mdi-comment"
      			    class="mx-2"
      			    rows="1"
      			  v-model="fillasignacion.descripcion"
      			  :rules="rules"
    	   ></v-textarea>
      </v-row>
      	 <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="actualizar">actualizar</v-btn>
        </v-card-actions>
      	</v-form>
</v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
    </v-dialog>
  </v-row>
</template>



<template>
  <v-row justify="center">
    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-card
      :loading="loading"
      class="mx-auto"
      max-width="100%"
      raised
      >
   <v-card-title> Agreaga una nueva asignacion </v-card-title>

    <v-card-text>
     <v-form ref="form">
      <v-row
        align="center"
        class="mx-0"
      >

        	 <v-text-field label="Asignacion" v-model="data.asignacion"
        	  prepend-icon="mdi-shopping" :rules="rules" hint="Nombre de la asignacion"></v-text-field>
      </v-row>
       <v-row
        align="center"
        class="mx-0"
      >
      	 <v-textarea
      			  label="Descripcion"
      			    prepend-icon="mdi-comment"
      			    class="mx-2"
      			    rows="1"
      			  v-model="data.descripcion"
      			  :rules="rules"
    	   ></v-textarea>
      </v-row>
      	 <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="agregar">agregar</v-btn>
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
    	class="mx-auto my-12"
    	max-width="100%"
    	raised
  	  	>
      		<v-container>
      			<v-card-title><v-icon color="blue">mdi-shopping</v-icon> Asignaciones </v-card-title>
      			 <v-btn
             		 absolute
             		 small
              		 fab
              		 top
              		 right
              		 color="blue"
              		 @click="dialog2 = true"
            	 >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
      			  <v-divider></v-divider>
	 <v-simple-table v-if="desserts.length > 0"  height="300px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>

          <th class="text-left">asignacion</th>
          <th class="text-left">descripcion</th>
          <th class="text-left">editar</th>
          <th class="text-left">eliminar</th>

        </tr>
      </thead>
      <tbody>

        <tr v-for="item in desserts" :key="item.id">

          <td>{{ item.asignacion }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <v-btn icon color="indigo" @click="editar(item)">
              <v-icon>mdi-pencil</v-icon>
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
     					No hay Asignaciones Registradas!
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
		name:'Categorias',
		mounted(){

       this.listado()
    	},
		data: () => ({
		desserts: [],
        loading:false,
        ocultar:false,
        dialog:false,
		dialog2:false,
		fillasignacion:{
            'id': '',
			'asignacion':'',
			'descripcion':''
         },
         data:{
			'asignacion':'',
			'descripcion':''
         },
          rules: [
        		value => !!value || 'campo requerido.'
      			],
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

  	Chagepage(page){

  		this.paginate.current_page = page;
  		this.listado(page);

  	},

    listado(page){
    	this.loading = true
        var url = '/api/asignacion?page='+page
        axios.get(url).then(res=>{
        this.desserts =res.data.asignacion.data
        this.paginate = res.data.paginate
        this.loading = false
        if (this.desserts.length > 0) {
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

    editar(item){

      this.fillasignacion.id = item.id;
      this.fillasignacion.asignacion = item.asignacion;
      this.fillasignacion.descripcion = item.descripcion;
      this.dialog = true
         },

    actualizar(){

      axios.put('/api/asignacion/'+this.fillasignacion.id, this.fillasignacion).
      then(response =>{

        this.listado(this.paginate.current_page);
        this.dialog = false
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' se ah actualizado con exito',
        showConfirmButton: false,
        timer: 1500
		})

      })

    },

    eliminar(item){

      Swal.fire({
      title: 'ADVERTENCIA!!',
      text: "si eliminas esta asignacion se perderan todos los datos vinculados a la misma !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
      }).then((result) => {
          if (result.value) {

            axios.delete('/api/asignacion/'+item)
            .then(res=>{
              this.listado(this.paginate.current_page)

       })
            Swal.fire(
            'eliminado',
            'se ah eliminado con exito.',
            'success'
    )
  }
})

    },
    agregar(){
    	this.dialog2 = true
    	axios.post('/api/asignacion', this.data).then(res => {
    		if (res.data === true) {
    			Swal.fire({
        		position: 'center',
        		icon: 'success',
        		title: ' se ah agredado con exito',
        		showConfirmButton: false,
        		timer: 1500
				})
				this.listado(this.paginate.current_page)
				this.$refs.form.reset()
				this.dialog2 = false
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

  },
		computed:{

		}
	}
</script>