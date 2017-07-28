<template>
  <div>
    <p>{{message}}</p>

    <div class="btn-group-vertical" role="group" aria-label="..." v-for="tower in towers">
      <towerButton :tower='tower'></towerButton>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import towerButton from './towers/towerButton.vue'
import tower from './towers/Tower'


export default {
  data() {
    return {
      message: 'Hello from main component',
      API_URL: 'https://polar-shore-15070.herokuapp.com/',
      towers: []
    }
  },
  components: {
    towerButton, tower
  },
  mounted () {
    axios.get(`${this.API_URL}game`)
      .then(res => {
        this.towers = res.data;
      })
  }
}
</script>

<style lang="css">
</style>
