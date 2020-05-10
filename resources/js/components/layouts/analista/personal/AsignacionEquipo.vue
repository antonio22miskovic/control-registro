<template>
	<v-container>
		<v-container v-if="tabla === false">
			 <v-alert
      		color="#2A3B4D"
      		icon="mdi-human-greeting"
      		outlined >
      			Bienvenido al modulo deAsignacion de Equipos en operacion, Debe seleccionar un Equipo y asignarlo al personal selecionado !
            </v-alert>
          </v-container>
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
	 <div v-if="tabla === true">

		<v-simple-table  height="300px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>

          <th class="text-left">nombre</th>
          <th class="text-left">modelo</th>
          <th class="text-left">codigo</th>
          <th class="text-left">detallar</th>


        </tr>
      </thead>
      <tbody>

        <tr v-for="item in desserts" :key="item.id">

          <td>{{ item.equipo }}</td>
          <td>{{ item.modelo }}</td>
          <td>{{ item.codigo }}</td>

          <td>

            <v-btn icon color="teal darken-2"  @click="ver(item.id)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>

          </td>
        </tr>

      </tbody>
    </template>
  </v-simple-table>
     <template>
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
  </div>
	</v-container>
</template>
<script>
	export default{
		name:'AsignacionEquipo',
		mounted(){
       		this.getdepartamentos()
    	},

		data: () => ({
		tabla: false,
		desserts: [],
        departamentos:[],
        depa:'',
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

			  	this.tabla = true
         let url = '/api/equipos/listado/'+ this.depa +'?page='+page
          axios.get(url)
          .then(res =>{

            this.desserts = res.data.equipo.data
             this.paginate = res.data.paginate
            	if (this.desserts.length > 0) {

            	}
          })
      },

      ver(){

      },

      getdepartamentos(){

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

        Chagepage(page){

      this.paginate.current_page = page;
      this.listar(page);

    },
		},
		computed:{

		}
	}
</script>