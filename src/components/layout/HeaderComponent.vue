<template lang="pug">
  header.header-component.container
    div.header-component-avatar
      img.header-component-avatar__img.rounded-circle(src="../../assets/img/header/avatar.jpg")
    div.logo
      h1.logo__text
        span.logo__forename(v-text="headerData.forename")
        span.logo__surname(v-text="headerData.surname")
    div.job-title
      h2.job-title__text(v-text="headerData.title")

</template>

<script type="text/babel">
  /* ============
   HeaderComponent
   * ============
   *
   * todo: add documentation here!
   */
  import headerData from '../../data/header'

  export default {
    name: 'HeaderComponent',

    extends: {},

    props: {},

    data () {
      return {
        headerData
      }
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

<style scoped lang="stylus" rel="stylesheet/scss">
  .header-component-avatar
    display flex
    justify-content center

</style>
