<template lang="pug">
  main.page-body
    page-section-component(:pageTitle="introData.title", :pageSubTitle="introData.subTitle")
      div.container(v-html="introData.body")
    page-section-component(:pageTitle="expertiseData.title", :pageSubTitle="expertiseData.subTitle")
      div.container
        div.row
          expertise-block-component(
          v-for="(item, index) in expertiseData.items",
          :blockFigure="index",
          :blockTitle="item.title",
          :blockCopy="item.body")
</template>

<script type="text/babel">
  /* ============
   IndexPage
   * ============
   *
   * todo: add documentation here!
   */

  import introData from '../data/intro'
  import expertiseData from '../data/expertise'
  import PageSectionComponent from '../components/layout/PageSectionComponent.vue'
  import ExpertiseBlockComponent from '../components/expertise/ExpertiseBlockComponent.vue'

  export default {
    name: 'IndexPage',

    extends: {},

    props: {},

    data () {
      return {
        introData,
        expertiseData
      }
    },

    computed: {},

    components: {
      ExpertiseBlockComponent,
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
