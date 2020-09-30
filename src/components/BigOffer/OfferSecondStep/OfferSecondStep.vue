<template>
  <div
    class="second-step"
    @mousemove="move"
  >
    <div
      :class="[
         'moderate-to-severe',
        {'short-state': afterShortData}
      ]"
    >
      <div class="large-data">
        <strong class="group-title">Moderate to Severe</strong>
        <h3 class="product-title">PLAQUE PSORIASIS</h3>
        <a href="" class="read-more">learn more</a>
      </div>
      <div class="short-data">
        <strong class="group-title">Moderate to Severe</strong>
        <h3 class="product-title">PLAQUE PSORIASIS</h3>
      </div>
    </div>
    <div
      :class="[
         'tremfya-result',
        {'short-state': beforeShortData}
      ]"
    >
      <div class="large-data">
        <h3 class="product-title">Tremfya<sup>&reg;</sup></h3>
        <strong class="group-title">(guselkumab)</strong>
        <a href="" class="read-more">learn more</a>
      </div>
      <div class="short-data">
        <h3 class="product-title">Tremfya<sup>&reg;</sup></h3>
        <strong class="group-title">(guselkumab)</strong>
      </div>
    </div>
    <div class="img-block">
      <span
        class="img-after-board"
        :style="`width: ${imgAfterWidth}px`"
      >
        Before image additional layer
      </span>
      <span
        class="img-before-board"
        :style="`width: ${imgBeforeWidth}px`"
      >
        <span class="before-after-transition">
          Before after transition border
        </span>
        <div class="mouse-icon-wrapper">
          <i class="offer-mouse-icon">Scroll down</i>
        </div>
      </span>
      <div class="img-before-wrap">
        <div
          class="img-wrapper"
          :style="`width: ${imgBeforeWidth}px`"
        >
          <div
            class="img-wrapper-centered"
            :style="`width: ${windowWidth}px`"
          >
            <img class="img-before" src="../../../assets/img/woman-before.png" alt="">
          </div>
        </div>
      </div>
      <div class="img-after-wrap">
        <div
          class="img-wrapper"
          :style="`width: ${imgAfterWidth}px`"
        >
          <div
            class="img-wrapper-centered"
            :style="`width: ${windowWidth}px`"
          >
            <img class="img-after" src="../../../assets/img/woman-after.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferSecondStep',
  data () {
    return {
      imgBeforeWidth: '50%',
      imgAfterWidth: '50%',
      windowWidth: 0,
      beforeShortData: false,
      afterShortData: false
    }
  },
  methods: {
    move (e) {
      // Image and background computing
      if ((this.windowWidth - e.clientX) > 120 && e.clientX > 120) {
        this.imgBeforeWidth = this.windowWidth - e.clientX
      } else if (e.clientX <= 120) {
        this.imgBeforeWidth = this.windowWidth - 120
      }

      this.imgAfterWidth = e.clientX >= 120 ? e.clientX : 120

      // Text visibility changing
      this.beforeShortData = e.clientX < this.thirdOfWidow
      this.afterShortData = e.clientX > this.thirdOfWidow * 2
    }
  },
  computed: {
    thirdOfWidow () {
      return this.windowWidth / 3
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
  }
}
</script>

<style scoped lang="scss">
  @import "offer-second-step";
</style>
