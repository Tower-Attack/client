<template>
  <router-link :to="{ name: 'tower', params: { name: tower.name, id: tower.id, health: tower.health, min_attack: tower.min_attack, max_attack: tower.max_attack }}"><button type="button" class="btn btn-default">{{tower.name}}</button></router-link>
</template>
<script>
export default {
  name: 'towerButton',
  props: ['tower'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
