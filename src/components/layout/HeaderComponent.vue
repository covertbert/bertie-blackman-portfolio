<template lang="pug">
  header.header-component.container
    div.header-component-avatar
      img.header-component-avatar__img.rounded-circle(src="../../assets/img/header/avatar.jpg")
    logo-component(:forename="headerData.forename", :surname="headerData.surname", textAlign="center")
    div.job-title
      h2.job-title__text(v-text="headerData.title")
    social-media-buttons-component(:buttonsArray="headerData.social")

</template>

<script type="text/babel">
  /* ============
   HeaderComponent
   * ============
   *
   * todo: add documentation here!
   */
  import headerData from '../../data/header'
  import LogoComponent from '../logo/LogoComponent.vue'
  import SocialMediaButtonsComponent from '../social/SocialMediaButtonsComponent.vue'

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

    components: {
      SocialMediaButtonsComponent,
      LogoComponent
    },

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

  .header-component-avatar
    display flex
    justify-content center
    align-items center
    padding-top 1.7rem
    padding-bottom 1.4rem

  .header-component-avatar__img
    width 9.4rem

  .job-title__text
    margin-top 1.3rem
    margin-bottom: 1.7rem
    text-align center
    font-size .8rem
    color tertiary-gray
    font-family lato-light
</style>
