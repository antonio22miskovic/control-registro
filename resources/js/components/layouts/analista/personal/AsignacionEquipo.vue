<template>
  <div>
 <v-card
      :loading="loading"
      class="mx-auto"
      max-width="100%"
      raised
      >
      <v-container>
   <v-card-title><v-icon color="blue">mdi-account-star</v-icon> Asignacion de equipos</v-card-title>


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
            </v-row>
                <p class="text-center"> Empleados vinculado al equipo </p>
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
  <div class="text-center">
    <v-dialog
      v-model="dialog2"
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
         Equipo: {{ verequipover.equipo }}
        </v-card-title>

          <v-container>
            <v-row>
              <v-col>
                  <v-card-subtitle class="pb-0">Departamento: {{ verdepartamento.departamento }}</v-card-subtitle>
              </v-col>
              <v-col>
                <v-card-subtitle class="pb-0">Categoria: {{ vercategoria.categoria }}</v-card-subtitle>
              </v-col>
              <v-col>
                <v-card-subtitle class="pb-0">Modelo: {{ verequipover.modelo }}</v-card-subtitle>
              </v-col>
               <v-col>
                <v-card-subtitle class="pb-0">Codigo: {{ verequipover.codigo }}</v-card-subtitle>
              </v-col>
            </v-row>
             <v-row>
                <v-card-subtitle class="pb-0">Descripcion: {{ verequipover.descripcion }}</v-card-subtitle>
              </v-row>
                <p class="text-center"> Empleados vinculado al equipo </p>
                <v-container v-if="verempleados.length > 0">
                  <v-row>

                            <v-col v-for="list in verempleados" :key="list.id">
                                <v-flex >
                               <v-card
                                class="mx-auto"
                                max-width="344"
                                  outlined
                                  >
                                    <v-list-item three-line>
                                      <v-list-item-content>
                                        <div class="overline mb-4">Asignacion: {{ list.asignacion }}</div>
                                        <v-list-item-title class="headline mb-4">Nombre: {{ list.nombre }}</v-list-item-title>
                                        <v-list-item-subtitle>Apellido: {{ list.apellido }}</v-list-item-subtitle>
                                      </v-list-item-content>

                                      <v-list-item-avatar
                                        tile
                                        size="80"
                                          >
                                          <v-img
                                          :src="'/img/avatares/' + list.avatar"
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
            <v-container v-if="verempleados.length === 0">
                          <p class="text-center">este equipo no ah sido asignado a ningun personal!</p>
                      </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog2 = false"
          >
          Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


    <v-row>
      <v-col>
      <h3 class="text-center"> <b>Manejo de Equipos de:{{ this.$route.params.nombre }} </b> </h3>
    </v-col>
    </v-row>
      <v-col>
       <h5 v-if="showesquipos.length > 0">equipos asignados</h5>
       <h5 v-if="showesquipos.length === 0">no tiene equipos</h5>
     </v-col>
       </v-row>
       <v-row>
        </v-row>
        <v-row>
                <v-col v-for="(ver,i) in showesquipos" :key="i">
                  <v-card
                  max-width="280"
                  min-width="280"
                  min-height="280"
                  max-height = "280"
                  class="d-flex flex-wrap"
                  outlined
                  shaped
                  >
                     <v-card-title>Equipo: {{ ver.equipo }} </v-card-title>
                     <v-card-subtitle>Modelo: {{ ver.modelo }}</v-card-subtitle>
                     <v-card-subtitle>Marca: {{ ver.marca }}</v-card-subtitle>
                     <v-card-subtitle>Codigo: {{ ver.codigo }}</v-card-subtitle>
                      <v-card-actions>

                        <v-btn text color="red" @click="remover(ver.id)">remover</v-btn>
                          <v-btn
                            color="purple"
                            text
                            @click="explorarver(ver.id)"
                                >
                                    Explorar
                           </v-btn>

                          <v-spacer></v-spacer>

                    </v-card-actions>
            </v-card>
            </v-col>
          </v-row>

          <v-divider></v-divider>
          <v-container>
            <p> Añadir un nuevo equipo para: {{ this.$route.params.nombre }}</p>

          </v-container>
          <v-divider></v-divider>
          <div v-if="equipostable.length > 0">
  <v-simple-table  height="300px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>

          <th class="text-left">nombre</th>
          <th class="text-left">modelo</th>
           <th class="text-left">status</th>
          <th class="text-left">codigo</th>
          <th class="text-left">detallar</th>
          <th class="text-left">asignar</th>

        </tr>
      </thead>
      <tbody>

        <tr v-for="equipo in equipostable" :key="equipo.id">

          <td>{{ equipo.equipo }}</td>
          <td>{{ equipo.modelo }}</td>
          <td>{{ equipo.status }}</td>
          <td>{{ equipo.codigo }}</td>

          <td>

            <v-btn icon color="teal darken-2"  @click="verequipo(equipo.id)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>

          </td>
           <td>

            <v-btn icon color="teal darken-2"  @click="asignarar(equipo.id)">
              <v-icon>mdi-plus</v-icon>
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
            v-model="paginatetable.current_page"
            class="my-4"
            :length="paginatetable.last_page"
            @input="Chagepage2(paginatetable.current_page)"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
</div>
  <template v-if="ocultar === true">
      <v-container>
        <v-alert
            outlined
            type="warning"
            prominent
            border="left"
          >
              No hay equipos en este departamento puede dirigirse al modulo de equipos para añadir equipos al departamento!
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
		name:'AsignacionEquipo',
		mounted(){
        this.addequipo()
        this.getTable()
    	},

		data: () => ({

      equipostable:[],
      showesquipos:[],
      showasignacion:'',
      showdepartamento:'',
      ocultar:false,
      mostrarexplorar:false,
     paginatetable:{

                'total': 0,
                'current_page': 0,
                'per_page': 0,
                'last_page': 0,
                'from': 0,
                'to' : 0,

            },
          dialog: false,
          dialog2:false,
          empleados:[],

          explorarequipo:'',
          explorardepartamento:'',
          explorarcategoria:'',
          loading:false,
          verequipover:'',
          vercategoria:'',
          verempleados:[],
          verdepartamento:'',

		}),
		methods:{
      explorarver(ver){
        axios.get('/api/equipos/show/'+ ver).then(res => {
             this.explorardepartamento = res.data.departamento
             this.explorarequipo = res.data
             this.explorarcategoria = res.data.categoria
             this.empleados = res.data.datos_empleados
             this.dialog = true

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
      remover(ver){
         Swal.fire({
             title: 'ADVERTENCIA!!',
             text: "¿ Esta seguro que Desea Remover este equipo ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si Remover!'
            }).then((result) => {
               if (result.value) {
        axios.get('/api/remover/equipo/'+ ver + '/' + this.$route.params.id).then(res => {
            this.addequipo()
             Swal.fire(
                    'Removido',
                    'se ah Removido con exito.',
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
       addequipo(){

        axios.get('/api/personal/show/'+ this.$route.params.id).then(res => {

            this.showdata = res.data.dato
            this.showesquipos = res.data.equipos
            this.showasignacion = res.data.asignacion
            this.showdepartamento = res.data.departamento
        })
      },
      getTable(page){

        axios.get('/api/equipos/listado/'+ this.$route.params.departamento +'?page='+page).then(res =>{

            this.equipostable = res.data.equipo.data
            this.paginatetable = res.data.paginate
             if (this.equipostable.length > 0) {
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

      },

      asignarar(equipo){

        let data = {
            'equipo': equipo,
            'empleado': this.$route.params.id }

        axios.post('/api/asignar/equipo',data).then(res =>{
          this.addequipo()
          this.getTable()
          if (res.data === false) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este equipo ya se encuentra vinculado',
              })
          }else{

          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Se ah añadido con exito',
              showConfirmButton: false,
              timer: 1500
          })
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
      verequipo(equipo){
          axios.get('/api/equipos/show/'+ equipo).then(res => {
             this.verdepartamento = res.data.departamento
             this.verequipover = res.data
             this.vercategoria = res.data.categoria
             this.verempleados = res.data.datos_empleados
             this.dialog2 = true

          })

      },

      Chagepage2(page){
        this.paginatetable.current_page = page
            this.getTable(page)
          },
		},
		computed:{

		}
	}
</script>