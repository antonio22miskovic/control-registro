<template>
    <v-container fluid id="create">

   <template>
    <v-container >
  <v-bottom-navigation
    v-model="bottomNav"
    shift
  >
    <v-btn
    :to="{name:'newpersonal'}">
      <span>nuevo</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn
    to="/personal/">
      <span>listado</span>
      <v-icon>mdi-account-multiple</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-container>
</template>
    <v-container>
          <router-view/>
    </v-container>
    </v-container>
</template>
<script>
	export default{
		name:'Personal',
		mounted(){

		},
		data: () => ({
      bottomNav:false,
		}),
		methods:{


		},
		computed:{

		},
	}
</script>
