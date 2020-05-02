<template>
	<div>
	<v-container>
		<h1 class="text-center">
			<v-icon large color="blue darken-2">mdi-desktop-classic</v-icon>
			 administracion de equipos </h1>
		<v-row>

			<v-col>

  			<div class="text-center">
    				<v-btn class="ma-2" :to="{name: 'incorporados'}" outlined color="success">
    					incorporados
    					  <v-icon right >mdi-laptop</v-icon>
    				</v-btn>
  			</div>

  		</v-col>

			<v-col>

		 		<div class="text-center">
    				<v-btn class="ma-2" :to="{name: 'desincorporados'}" outlined color="warning">
    					desincorporados
    					  <v-icon right >mdi-laptop-off</v-icon>
    				</v-btn>
  				</div>

  		</v-col>

  	</v-row>
		<router-view/>
	</v-container>
	</div>
</template>
<script>

	export default{
		name:'Equipos',
		data: () => ({


		}),
		methods:{

		},
		computed:{

		}
	}
</script>