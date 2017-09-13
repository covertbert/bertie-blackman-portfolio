<template lang="pug">
  div.logo
    h1.logo__text
      span.logo__forename(v-text="forename", :style="`text-align: ${textAlign}`")
      span.logo__surname(v-text="surname", :style="`text-align: ${textAlign}`")
</template>

<script type="text/babel">
  /* ============
   LogoComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'LogoComponent',

    extends: {},

    props: {
      forename: {
        required: true,
        type: String
      },

      surname: {
        required: true,
        type: String
      },

      textAlign: {
        required: true,
        type: String
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
  @import "../../assets/stylus/variables.styl"

  .logo
    display flex
    justify-content center
    align-items center
    flex-direction column


  .logo__forename
  .logo__surname
    display block

    @media (min-width $break-lg)
      text-align left !important

  .logo__forename
    text-transform lowercase
    color $tertiary-gray
    font-family $lato-light
    margin-bottom 0

  .logo__surname
    text-transform uppercase
    color $primary-yellow
    font-family $lato-bold
    font-size 2.7rem
    line-height .8
</style>
