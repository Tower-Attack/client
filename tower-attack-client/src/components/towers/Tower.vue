<template>
  <div class="">
  <div>
    <h1>{{$route.params.name}}</h1>
    <p>Health: {{$route.params.health}}</p>
  </div>
  <player :health="player_health"></player>
  <!-- <turns></turns> -->
  </div>
</template>

<script>
import player from '../player.vue'
// import turns from '../turns.vue'

export default {
  data () {
    return {
      player_health: 100
    }
  },
  components: {
    player
  },
  methods: {
    calculateDamage (){

    }
  }
}
</script>

<style lang="css">
</style>
