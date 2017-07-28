<template>
  <div class="">
  <div>
    <h1>{{$route.params.name}}</h1>
    <p>Health: {{tower_health}}</p>

  </div>
  <player :health="player_health" :attkBtn='attack' :sattckBtn='specialAttack' :heal='heal'></player>
  <!-- <turns></turns> -->
  </div>
</template>

<script>
import player from '../player.vue'
// import turns from '../turns.vue'

export default {
  data () {
    return {
      player_health: 100,
      tower_health: this.$route.params.health
    }
  },
  components: {
    player
  },
  methods: {
    calculateDamage (min, max){
      return Math.max(Math.floor(Math.random() * max) +1)
    },
    CheckWin() {
      if (this.tower_health <= 0) {
        confirm('The tower has been taken. The day is won')
      }
    },
    attack () {
      var damage = this.calculateDamage(5, 10);
      this.tower_health -= damage;
      // if (this.checkWin()){
      //   return
      // }
      this.towerAttacks();
    },
    specialAttack() {
      var damage = this.calculateDamage(8, 16);
      this.tower_health -= damage;
      
      this.towerAttacks();
    },
    heal() {
      if(this.player_health <= 90) {
         this.player_health +=10;
      } else {
        this.player_health = 100
      }
      this.towerAttacks()
    },
    towerAttacks() {
      var damage = this.calculateDamage(5, 9);
      this.player_health -= damage;
    }

  }
}
</script>

<style lang="css">
</style>
