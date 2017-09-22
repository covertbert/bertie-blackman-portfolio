<template lang="pug">
  div.avatar-component
    transition-group(name="blur", tag="div")
      div.avatar-component__placeholder.rounded-circle(v-if="currentSrc === null", key="placeholder")

      canvas.avatar-component__image.rounded-circle(
      v-show="currentSrc === loResSrc",
      height="17",
      width="27",
      key="canvas",
      class="blur-transition")

      img.avatar-component__image.rounded-circle(
      v-if="currentSrc === hiResSrc",
      :src="hiResSrc",
      key="image")
</template>

<script type="text/babel">
  /* ============
   AvatarComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'AvatarComponent',

    extends: {},

    props: [
      'hiResSrc',
      'loResSrc'
    ],

    data () {
      return {
        currentSrc: null
      }
    },

    computed: {},

    components: {},

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {
      const loResImg = new Image()
      const hiResImg = new Image()

      let context = null

      context = this.$el.getElementsByTagName('canvas')[0].getContext('2d')

      loResImg.onload = () => {
        context.drawImage(loResImg, 0, 0)
        this.currentSrc = this.loResSrc
      }

      hiResImg.onload = () => {
        this.currentSrc = this.hiResSrc
      }

      loResImg.src = this.loResSrc
      hiResImg.src = this.hiResSrc
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .avatar-component__placeholder
    height 10.5rem

  .avatar-component__image, .avatar-component__placeholder
    width 10.5rem

  .avatar-component__placeholder
    background-color: $tertiary-gray

  .blur-transition
    transition opacity linear .4s 0s
    opacity 1

  canvas
    filter blur(10px)

  .blur-enter, .blur-leave
    opacity 0
</style>
