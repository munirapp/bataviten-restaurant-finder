<template>
  <div id="index">
    <hero-wrapper></hero-wrapper>
    <image-square></image-square>
    {{ listCollections }}
  </div>
</template>

<script>
import HeroWrapper from '../components/heroWrapper'
import ImageSquare from '../components/imageSquare'

export default {
  name: 'Index',
  components: { HeroWrapper, ImageSquare },
  data: () => ({
    searchParams: {
      entityId: 74,
      entityType: 'city',
      order: 'asc',
      count: 4,
    },
    searchList: [
      { stateKey: 'dataRestoCenterJakarta', location: 'kemayoran' },
      { stateKey: 'dataRestoNorthJakarta', location: 'priuk' },
      { stateKey: 'dataRestoEastJakarta', location: 'duren sawit' },
      { stateKey: 'dataRestoSouthJakarta', location: 'kemang' },
      { stateKey: 'dataRestoWestJakarta', location: 'palmerah' },
    ],
  }),
  computed: {
    listCollections() {
      return this.$store.state.dataCollections
    },
    listRestoCenterJakarta() {
      return this.$store.state.dataRestoCenterJakarta
    },
    listRestoNorthJakarta() {
      return this.$store.state.dataRestoNorthJakarta
    },
    listRestoEastJakarta() {
      return this.$store.state.dataRestoEastJakarta
    },
    listRestoSouthJakarta() {
      return this.$store.state.dataRestoSouthJakarta
    },
    listRestoWestJakarta() {
      return this.$store.state.dataRestoWestJakarta
    },
  },
  created() {
    this.$store.dispatch('runGetAllCollections')

    for (const searchItem of this.searchList) {
      this.$store.dispatch('runSearchRestaurant', {
        key: searchItem.stateKey,
        data: { q: searchItem.location, ...this.searchParams },
      })
    }
  },
}
</script>
