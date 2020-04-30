<template>
	<v-app>
		 <v-content>
      		<Navbar v-if="currentUser"></Navbar>
      		<Drawer v-if="currentUser"></Drawer>
      		<Footer v-if="currentUser"></Footer>
     		 <router-view/>
    	 </v-content>
	</v-app>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'
import Drawer from './components/layouts/sidebar/Drawer'
	export default{

		name:'Render',
		components:{
			Navbar,
			Drawer,
			Footer
		},
		computed:{
		...mapState(['currentUser'])
		},
	}
</script>