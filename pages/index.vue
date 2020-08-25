<template>
  <div id="index">
    <hero-wrapper></hero-wrapper>
    <image-square></image-square>
  </div>
</template>

<script>
import HeroWrapper from "../components/heroWrapper"
import ImageSquare from "../components/imageSquare"

export default {
  name: 'Index',
  components:{HeroWrapper, ImageSquare}
}
</script>


