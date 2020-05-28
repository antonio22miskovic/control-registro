<template>
	<div>
		    <template>

  <v-container class="my-12">
      <v-card
      :loading="loading"
      max-width="100%"
      raised
      >
   <v-card-title> <v-icon color="nav">mdi-account-plus</v-icon> Nuevo usuario </v-card-title>

    <v-card-text>
      <v-form ref="form" v-model="valid1">
      <v-row
        align="center"
        class="mx-0"
      >
      <v-col>
      	<v-text-field label="Username" v-model="data.username"
            prepend-icon="mdi-account-circle" :rules="rules" hint="Nombre"></v-text-field>
      </v-col>
        <v-col>
           <v-text-field label="Nombre" v-model="data.nombre"
            prepend-icon="mdi-human-male" :rules="rules" hint="Nombre"></v-text-field>
        </v-col>
    </v-row>
        <v-row  align="center"
        class="mx-0">
        	 <v-col>
           <v-text-field label="Apellido" v-model="data.apellido"
            prepend-icon="mdi-human-handsdown" :rules="rules" hint="Apellido"></v-text-field>
        </v-col>
         <v-col>
            <v-text-field label="Cedula" v-model="data.cedula"
           prepend-icon="mdi-contacts"
           :rules="rules"  hint=" cedula de identidad"></v-text-field>
        </v-col>
        </v-row>

       <v-row
        align="center"
        class="mx-0"
      >
        <v-col>
          <v-text-field
           prepend-icon="mdi-phone" v-model="data.telefono"
            label="Telefono" :rules="rules"  hint=" numero telefonico"></v-text-field>
        </v-col>
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
      </v-row>
      <v-row>
        <v-col>
            <v-text-field
           prepend-icon="mdi-phone" v-model="data.email"
            label="Email" :rules="rules"  hint=" correo electronico"></v-text-field>
        </v-col>
        <v-col>
          <v-select
              :items="cedes"
               v-model="data.cede"
              item-text="cede"
              item-key="cede.id"
              prepend-icon="mdi-factory"
              item-value="id"
              label="asignar cede"
          ></v-select>
        </v-col>
      </v-row>
        <v-row>
          <v-col>
          	<v-text-field
           prepend-icon="mdi-lock" v-model="data.password"
            label="Controseña" :rules="rules"  hint=" Contraseña"></v-text-field>
          </v-col>
          <v-col>
           <v-text-field
           prepend-icon="mdi-lock"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'password'"
            name="password"
            required
            label="Confirmar Contraseña"
            hint="Confirmar contrseña"
            value="wqfasds"
            v-model="passwordconform"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
        		<v-container class="text-center">
      			<v-btn  color="info" @click="newUser">
      				Registrar
      			</v-btn>
      		</v-container>
        </v-row>
        </v-form>
</v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>

  </v-container>
</template>
	</div>
</template>
<script>
	export default{
		name:'New',
		mounted(){
			this.getcede()
		},
		data:() => ({
			valid1:false,
			show2: false,
			cedes:[],
			passwordconform:'',
			imageName:'',
			loading:false,
			file: [
            	value => !value || value.size < 2000000 || 'Su imagen de perfil no pude ser mayor 2 MB!',
          	],
			data:{
        		'id':'',
        		'nombre':'',
        		'apellido':'',
        		'cedula':'',
        		'telefono':'',
        		'avatar':'',
        		'cede':'',
        		'password':'',
        		'email':'',
        		'username':'',
			},
             rules: [
        		value => !!value || 'campo requerido.'
      			],
		}),
		methods:{
				getcede(){
				axios.get('/api/get-cede-all').then(res =>{
						this.cedes = res.data

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
			 pickFile(){
            this.$refs.image.click()
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
      		newUser(){
      			this.loading = true
      		},
		},
		computed:{

		}
	}
</script>