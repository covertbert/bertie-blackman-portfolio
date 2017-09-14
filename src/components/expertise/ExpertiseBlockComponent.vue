<template lang="pug">
  div.expertise-block.col-md-6
    span.expertise-block__figure(v-text="formatBlockFigure(blockFigure)")
    div.expertise-block__body
      h3.expertise-block__body-title(v-text="blockTitle")
      p.expertise-block__body-copy(v-text="blockCopy")
</template>

<script type="text/babel">
  /* ============
   ExpertiseBlockComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'ExpertiseBlockComponent',

    extends: {},

    props: {
      blockFigure: {
        type: Number,
        require: true
      },
      blockTitle: {
        type: String,
        require: true
      },
      blockCopy: {
        type: String,
        require: true
      }
    },

    data () {
      return {}
    },

    computed: {},

    components: {},

    watch: {},

    methods: {
      formatBlockFigure (number) {
        return `0${number + 1}`
      }
    },

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variables.styl"

  .expertise-block
    display flex
    &:not(:nth-last-child(-n+2))
      margin-bottom 1.4rem

  .expertise-block__figure
    color $primary-yellow
    font-weight 700

  .expertise-block__body
    margin-left .6rem
    padding-top 0.2rem

  .expertise-block__body-title
    color $tertiary-gray
    text-transform uppercase
    font-size 1rem
</style>
