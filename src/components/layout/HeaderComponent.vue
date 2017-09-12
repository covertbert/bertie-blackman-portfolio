<template lang="pug">
  header.header-component.container
    div.row.header-component__row
      div.header-component-avatar.col-lg-4
        img.header-component-avatar__img.rounded-circle(src="../../assets/img/header/avatar.jpg")

      div.logo-and-title.col-lg-4
        logo-component(:forename="headerData.forename", :surname="headerData.surname", textAlign="center")
        div.job-title
          h2.job-title__text(v-text="headerData.title")

      social-media-buttons-component.col-lg-4(:buttonsArray="headerData.social")

        //div.container
        //  hr.header-component__hr


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

  .header-component
    @media (min-width $break-lg)
      height 100vh
      width 100%
      max-width 100%
      margin-left 0
      margin-right 0
      padding-right 0
      padding-left 0

  .header-component__row
    @media (min-width $break-lg)
      height 100%

  .header-component-avatar
    display flex
    justify-content center
    align-items center
    padding-top 1.7rem
    padding-bottom 1.4rem

    @media (min-width $break-lg)
      height 100%
      padding-top: 0
      padding-right 2.5rem
      background-color $black
      justify-content flex-end

  .logo-and-title
    display flex
    justify-content center
    flex-direction column

    @media (min-width $break-lg)
      align-items flex-start
      padding-left 3rem

  .header-component-avatar__img
    width 10.5rem

  .job-title__text
    margin-top 1.3rem
    margin-bottom: 1.7rem
    text-align center
    font-size .8rem
    color $tertiary-gray
    font-family $lato-light

    @media (min-width $break-lg)
      text-align left !important

  .header-component__hr
    background-color $quinary-gray
    height 2px
    margin-top 1.4rem

</style>
