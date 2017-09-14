<template lang="pug">
  section.page-section.row
    div.page-section__header.col-lg-4(
    :class="{ 'page-section__header--lighter' : headerLighter }")
      div.container
        h2.page-section__title(v-text="pageTitle")
        h4.page-section__sub-title(v-text="pageSubTitle")
    div.page-section__body.col-lg-8(
    :class="{ 'page-section__body--lighter' : headerLighter }")
      slot
</template>

<script type="text/babel">
  /* ============
   PageSectionComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'PageSectionComponent',

    extends: {},

    props: {
      pageTitle: {
        type: String,
        required: true
      },
      pageSubTitle: {
        type: String,
        required: true
      },
      headerLighter: {
        type: Boolean,
        default: false
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

  .page-section__header
    background-color $black-dark
    border-top 1px solid $quinary-gray
    border-bottom 1px solid $quinary-gray
    padding-top 1.7rem
    padding-bottom 1.7rem
    @media (min-width $break-lg)
      border-top 0
      border-bottom 0
      &--lighter
        background-color $black

  .page-section__body
    padding-top 1.7rem
    padding-bottom 1.7rem
    background-color $primary-gray
    @media (min-width $break-lg)
      background-color $black
    &--lighter
      @media (min-width $break-lg)
        background-color $primary-gray

  .page-section__title,
  .page-section__sub-title
    color $tertiary-gray

  .page-section__title
    margin-bottom 1rem
    font-size 1.3rem
    text-transform uppercase

  .page-section__sub-title
    margin-bottom 0
    opacity .8
    font-size .9rem
    font-weight 300
</style>
