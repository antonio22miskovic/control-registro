<template>
 <v-footer padless
 app
 >
    <v-col
      class="text-center"
      cols="12"
    >
    <v-icon>mdi-factory</v-icon>   {{ new Date().getFullYear() }} — <strong>SINDONI</strong>
    </v-col>
  </v-footer>
  </v-card>
</template>

<script>
export default {
  name:'Footer',
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  }
}