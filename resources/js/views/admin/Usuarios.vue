<template>
	<div>
		<v-container>
				<v-bottom-navigation
    			v-model="bottomNav"
    			shift
  				>
   	 				<v-btn
				    :to="{name: 'listuser'}">
				      <span>lista</span>
				      <v-icon>mdi-account-group</v-icon>
				    </v-btn>

				    <v-btn
				    to="/usuarios/">
				      <span>nuevo</span>
				      <v-icon>mdi-plus</v-icon>
				    </v-btn>

				  </v-bottom-navigation>
		</v-container>
		<v-container>
			<router-view/>
		</v-container>
	</div>
</template>
<script>
	export default{
		name:'Usuarios',
		data:()=>({
			bottomNav:false,
		}),
	}
</script>