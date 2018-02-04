<template lang="pug">
  main.coming-soon
    h1(v-text="'COMING SOON'").coming-soon__header
</template>

<script type="text/babel">
  export default {
    name: 'ComingSoonComponent',

    extends: {},

    props: {},

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

  .coming-soon
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    background-color $primary-gray

    &__header
      color: $primary-yellow

</style>
