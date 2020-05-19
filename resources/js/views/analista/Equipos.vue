<template>
	<div>
		<v-container>
			 <template>
    		<v-container>
  				<v-bottom-navigation
    			v-model="bottomNav"
    			shift
  				>
   	 				<v-btn
				    :to="{name: 'desincorporados'}">
				      <span>desincomporados</span>
				      <v-icon>mdi-laptop-off</v-icon>
				    </v-btn>

				    <v-btn
				    to="/equipos/">
				      <span>nuevo</span>
				      <v-icon>mdi-plus</v-icon>
				    </v-btn>


				    <v-btn
				   :to="{name: 'incorporados'}">
				      <span>activos</span>
				      <v-icon>mdi-laptop</v-icon>
				    </v-btn>
				  </v-bottom-navigation>
				</v-container>
				</template>
		</v-container>
		<v-container>
			<router-view/>
		</v-container>
	</div>
</template>
<script>

	export default{
		name:'Equipos',
		data: () => ({
			bottomNav: false,

		}),
		methods:{

		},
		computed:{

		}
	}
</script>