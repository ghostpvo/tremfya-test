<template>
  <div
    :class="[
       'big-offer',
      {'first-screen': initialState}
    ]"
    @wheel="initialState = false"
  >
    <Header />
    <OfferFirstStep class="offer-screen-initial" />
    <OfferSecondStep class="offer-screen-general" />
  </div>
</template>

<script>
import OfferFirstStep from './OfferFirstStep/OfferFirstStep'
import OfferSecondStep from './OfferSecondStep/OfferSecondStep'
import Header from '../Header/Header'
export default {
  name: 'BigOffer',
  components: { Header, OfferFirstStep, OfferSecondStep },
  data () {
    return {
      initialState: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "big-offer";
</style>
