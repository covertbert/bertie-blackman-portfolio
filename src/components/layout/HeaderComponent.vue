<template lang="pug">
  header.header-component.container
    div.row.header-component__row
      div.header-component-avatar.col-lg-3

        avatar-component(:hiResSrc="hiResAvatar", :lowResSrc="lowResAvatar")

      div.right-column.col-lg-9
        div.container.right-column__inner
          div
          div.row.logo-title-social
            div.logo-and-title.col-lg-6
              logo-component(:forename="headerData.forename", :surname="headerData.surname", textAlign="center")
              div.job-title
                h2.job-title__text(v-text="headerData.title")

            social-media-buttons-component.col-lg-6(:buttonsArray="headerData.social")

          div.info-section
            hr.info-section__hr
            div.info-section-items
              div.info-section-items__block(v-for="item in headerData.info")
                span.info-section-items__key(v-text="item.key")
                span.info-section-items__value(v-html="item.value")

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
  import AvatarComponent from '../avatar/AvatarComponent.vue'
  import hiResAvatar from '../../assets/img/header/avatar@2x.jpg'
  import lowResAvatar from '../../assets/img/header/avatar.jpg'

  export default {
    name: 'HeaderComponent',

    extends: {},

    props: {},

    data () {
      return {
        headerData,
        hiResAvatar,
        lowResAvatar
      }
    },

    computed: {},

    components: {
      AvatarComponent,
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
  @import "../../assets/stylus/variables.styl"

  .header-component
    padding-bottom 2.3rem
    @media (min-width $break-md)
      padding-bottom 1.5rem
    @media (min-width $break-lg)
      height 100vh
      width 100%
      max-width 100%
      margin-left 0
      margin-right 0
      padding-right 0
      padding-left 0
      padding-bottom 0

  .header-component__row
    @media (min-width $break-lg)
      height 100%
      margin 0 0

  .header-component-avatar
    display flex
    justify-content center
    align-items center
    padding-top 1.5rem
    padding-bottom 1.2rem

    @media (min-width $break-lg)
      height 100%
      padding-top: 0
      padding-right 1.7rem
      background-color $black
      justify-content flex-end

  .logo-and-title
    display flex
    justify-content center
    flex-direction column

    @media (min-width $break-lg)
      align-items flex-start

  .logo-title-social
    @media (min-width $break-lg)
      margin-top 6.6rem

  .job-title__text
    margin-top 1.3rem
    margin-bottom: 1.7rem
    text-align center
    font-size .8rem
    color $tertiary-gray
    font-family $lato-light

    @media (min-width $break-lg)
      margin-bottom 0
      text-align left !important

  .right-column
    position relative
    padding-right 0
    padding-left 0
    display flex
    flex-direction column
    justify-content center
    @media (min-width $break-lg)
      padding-right 15px
      padding-left 15px

  .right-column__inner
    height 100%
    display flex
    flex-direction column
    justify-content space-between

  .info-section
    @media (min-width $break-lg)
      padding-left 0
      margin-bottom 1.8rem

  .info-section__hr
    background-color $quinary-gray
    margin-top .8rem
    margin-bottom .4rem
    @media (min-width $break-lg)
      height 2px
      width 100%
      margin-top 1.4rem

  .info-section-items
    @media (min-width $break-md)
      display flex

  .info-section-items__block
    display flex
    flex-direction column
    align-items center
    @media (min-width $break-md)
      margin-right 3rem
      align-items flex-start

  .info-section-items__key,
  .info-section-items__value
    font-size .9rem
    color $tertiary-gray
    @media (min-width $break-md)
      font-size .8rem

  .info-section-items__key
    margin-top 1.2rem
    font-weight 600
    @media (min-width $break-md)
      margin-top 0
      margin-bottom .7rem

  .info-section-items__value
    opacity .8

</style>
