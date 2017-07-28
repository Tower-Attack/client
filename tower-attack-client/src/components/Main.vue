<template>
  <div>
    <p>{{message}}</p>

    <div class="btn-group-vertical" role="group" aria-label="...">
      <button type="button" class="btn btn-default"><router-link to="/towerone">Attack Tower One!</router-link></button>
      <button type="button" class="btn btn-default"><router-link to="/towertwo">Attack Tower Two!</router-link></button>
    </div>
    <!-- <towerOne></towerOne> -->
    <!-- <towerTwo></towerTwo> -->
  </div>
</template>

<script>
import towerOne from './Towers/Towerone'
import towerTwo from './Towers/towertwo'


export default {
  data() {
    return {
      message: 'Hello from main component'
    }
  },
  components: {
    towerOne,
    towerTwo
  }
}
</script>

<style lang="css">
</style>
