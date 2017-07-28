<template>
  <div id="player">
    <button type='submit' class='btn btn-lg btn-default '>Attack</button>
    <button type='submit' class='btn btn-lg btn-default '>Special Attack</button>
    <button type='submit' class='btn btn-lg btn-default '>Heal</button>
    <h3>{{player.name}}</h3>
    <p>
      Player Health: {{health}}
    </p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "player",
  props: ['health'],
  data ()  {
    return {
      API_URL: 'https://polar-shore-15070.herokuapp.com/',
      id: 1,
      player: [],
      min_attack: 5,
      max_attack: 10,

    }
  },
  mounted() {
    axios.get(`${this.API_URL}player/${this.id}`)
      .then(res => {
        this.player = res.data
      })
  }
}
</script>
<style scoped>
</style>
