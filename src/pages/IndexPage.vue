<template lang="pug">
  main.page-body
    page-section-component(:pageTitle="introData.title", :pageSubTitle="introData.subTitle")
      div.container(v-html="introData.body")
</template>

<script type="text/babel">
  /* ============
   IndexPage
   * ============
   *
   * todo: add documentation here!
   */

  import introData from '../data/intro'
  import PageSectionComponent from '../components/layout/PageSectionComponent.vue'

  export default {
    name: 'IndexPage',

    extends: {},

    props: {},

    data () {
      return {
        introData
      }
    },

    computed: {},

    components: {
      PageSectionComponent
    },

    watch: {},

    methods: {},

    beforeCreate () {
    },

    mounted () {
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
