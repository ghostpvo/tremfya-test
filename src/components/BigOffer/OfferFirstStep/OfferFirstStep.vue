<template>
  <div class="offer-first">
    <h2 class="offer-first-title">
      {{ blockTitle }}
    </h2>
    <p class="offer-first-description">
      {{ blockDescription }}
    </p>
    <i class="offer-mouse-icon">Scroll down</i>
  </div>
</template>

<script>
export default {
  name: 'OfferFirstStep',
  data () {
    return {
      blockTitle: 'Plague psoriasis',
      blockDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                        'Accusamus alias, animi asperiores atque consectetur.'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "offer-first-step";
</style>
