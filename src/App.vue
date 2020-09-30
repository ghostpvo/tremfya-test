<template>
  <div id="app" class="page-wrapper">
    <BigOffer />
    <InfoBlock />
  </div>
</template>

<script>

import BigOffer from './components/BigOffer/BigOffer'
import InfoBlock from './components/InfoBlock/InfoBlock'
export default {
  name: 'App',
  components: { InfoBlock, BigOffer }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
