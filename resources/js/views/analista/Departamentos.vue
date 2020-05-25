<template>
	<div>




	<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
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

        	 <v-text-field label="Departamento" v-model="filldepartamento.departamento"
        	  prepend-icon="mdi-domain" :rules="rules" hint="Nombre del departamento"></v-text-field>
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
      			  v-model="filldepartamento.descripcion"
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
      :loading="loading3"
      class="mx-auto"
      max-width="100%"
      raised
      >
   <v-card-title> Agreaga un nuevo departamento </v-card-title>

    <v-card-text>
     <v-form ref="form">
      <v-row
        align="center"
        class="mx-0"
      >

        	 <v-text-field label="Departamento" v-model="data.departamento"
        	  prepend-icon="mdi-domain" :rules="rules" hint="Nombre del departamento"></v-text-field>
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
      			<v-card-title><v-icon color="nav">mdi-domain</v-icon> departamentos </v-card-title>
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

          <th class="text-left">departamento</th>
          <th class="text-left">descripcion</th>
          <th class="text-left">editar</th>
          <th class="text-left">eliminar</th>

        </tr>
      </thead>
      <tbody>

        <tr v-for="item in desserts" :key="item.id">

          <td>{{ item.departamento }}</td>
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
     					No hay Departamentos Registrados!
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
         loading2:false,
          loading3:false,
        ocultar:false,
        dialog:false,
		dialog2:false,
		filldepartamento:{
            'id': '',
			'departamento':'',
			'descripcion':''
         },
         data:{
			'departamento':'',
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
        var url = '/api/departamento?page='+page
        axios.get(url).then(res=>{
        this.desserts =res.data.departamento.data
        this.paginate = res.data.paginate
        this.loading = false
        if (this.desserts.length > 0) {
        	this.ocultar = false
        }else{
        	this.ocultar = true
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

    editar(item){

      this.filldepartamento.id = item.id;
      this.filldepartamento.departamento = item.departamento;
      this.filldepartamento.descripcion = item.descripcion;
      this.dialog = true
         },

    actualizar(){
      if (this.$refs.actualizar.validate()) {
        this.loading2 = true
      axios.put('/api/departamento/'+this.filldepartamento.id, this.filldepartamento).
      then(response =>{

        this.listado(this.paginate.current_page);
        this.loading2 = false
        this.dialog = false
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: ' se ah actualizado con exito',
        showConfirmButton: false,
        timer: 1500
		})

      }).catch((error) => {
         this.loading2 = false
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

    eliminar(item){

      Swal.fire({
      title: 'ADVERTENCIA!!',
      text: "si eliminas esta categoria los equipos vinculados quedaran sin categoria!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
      }).then((result) => {
          if (result.value) {

            axios.delete('/api/departamento/'+item)
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
      if (this.$refs.form.validate()) {
    	this.dialog2 = true
      this.loading3 = true
    	axios.post('/api/departamento', this.data).then(res => {
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
        this.loading3 = false
				this.dialog2 = false
    		}
    	}).catch((error) => {
         this.loading3 = false
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

  },
		computed:{

		}
	}
</script>