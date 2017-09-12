<template lang="pug">
  ul.social-media
    li.social-media__button(v-for="button in buttonsArray")
      a.social-media__link(:href="button.link")
        i.social-media__icon.fa.fa-lg(:class="`fa-${button.slug}`")

</template>

<script type="text/babel">
  /* ============
   SocialMediaButtonsComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'SocialMediaButtonsComponent',

    extends: {},

    props: {
      buttonsArray: {
        required: true,
        type: Array
      }
    },

    data () {
      return {}
    },

    computed: {},

    components: {},

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/scss/variables.styl"

  .social-media
    padding-left: 0
    padding-right: 0
    list-style none
    display flex
    justify-content center
    @media (min-width $break-lg)
      align-items center

  .social-media__button
    $size = 2.2rem
    position relative
    padding .2rem
    width $size
    height $size
    background-color $secondary-gray
    margin 0 .2rem

  .social-media__link
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center

    &:hover
      text-decoration none

      .social-media__icon
        color $primary-yellow

  .social-media__icon
    color $quaternary-gray
    font-size 1.25rem
</style>
