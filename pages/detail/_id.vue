<template>
  <div id="idDetail">
    <hero-wrapper></hero-wrapper>
    <review-section></review-section>
  </div>
</template>

<script>
import HeroWrapper from '../../components/heroWrapper'
import ReviewSection from '../../components/reviewSection'

export default {
  name: 'IdDetail',
  components: { HeroWrapper, ReviewSection },
  computed: {
    detailRestaurant() {
      return this.$store.state.dataDetailRestaurant
    },
  },
  created() {
    //this.$store.dispatch('')
  },
}
</script>
