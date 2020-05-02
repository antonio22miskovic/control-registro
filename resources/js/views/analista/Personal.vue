<template>
	<div>
	<v-container>
		<v-card
    class="mx-auto"
    max-width="400"
    outlined
    shaped
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="'/img/avatares/' + personal.avatar"
    >
      <v-card-title>{{ personal.nombre }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Apellido: {{ personal.apellido }}</div>

      <div>Apellido: {{ personal.ci }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
       equipo
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        asignacion
      </v-btn>
    </v-card-actions>
  </v-card>
	</v-container>
</div>
</template>
<script>

	export default{
		name:'Personal',
		mounted(){

		},
		data: () => ({

			departamento:'',
			Personal:'',
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

			listar(){
				axios.get('/api/listado'+ this.departamento +'?page='+page).then(res => {
						this.Personal = res.data.personal.data
             			this.paginate = res.data.paginate
				})
			},

		},
		computed:{

		}
	}
</script>