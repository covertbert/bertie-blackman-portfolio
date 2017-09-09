<template lang="pug">
  header.header-component.container

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

<style scoped lang="scss" rel="stylesheet/scss">

  .o-section__header {
    padding: 1.75rem 1.75rem 0rem;
  }

  .o-section__content {
    padding: 1.75rem 1.75rem 0rem;
  }

  .o-section__full-top-space {
    padding-top: 1.75rem;
  }

  .o-section__full-bottom-space {
    padding-bottom: 1.75rem;
  }

  @media (min-width: 760px) {
    .o-section__header {
      padding: 3.15rem 3.5rem 1.4rem;
    }
    .o-section--header .o-section__header {
      padding-bottom: 0;
    }
    .o-section__content {
      padding: 3.15rem 3.5rem 1.4rem;
    }
    .o-section__full-top-space {
      padding-top: 3.15rem;
    }
    .o-section__full-bottom-space {
      padding-bottom: 3.15rem;
    }
  }

  @media (min-width: 1024px) {
    .o-section {
      position: relative;
    }
    .o-section__container {
      z-index: 2;
      position: relative;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }
    .o-section__header {
      width: 30%;
      text-align: right;
    }
    .o-section__content {
      width: 70%;
    }
    .o-section__header-bg,
    .o-section__content-bg {
      display: block;
      position: absolute;
      height: 100%;
      width: 50%;
      z-index: 1;
    }
    .o-section__content-bg {
      right: 0;
    }
  }

  @media (min-width: 1200px) {
    .o-section__header {
      padding: 4.375rem 5.25rem 1.6625rem;
    }
    .o-section__content {
      padding: 4.375rem 5.25rem 1.6625rem;
    }
    .o-section__full-top-space {
      padding-top: 4.375rem;
    }
    .o-section__full-bottom-space {
      padding-bottom: 4.375rem;
    }
  }

  .c-header__top,
  .c-header__brand,
  .c-header__contact-divider {
    margin-bottom: 1.75rem;
  }

  .c-header__brand,
  .c-header__avatar,
  .c-header__contact {
    text-align: center;
  }

  .c-header__social-buttons {
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media (min-width: 760px) {
    .c-header__top,
    .c-header__brand {
      margin-bottom: 1.75rem;
    }
    .c-header__content {
      padding-top: 1.75rem;
    }
    .c-header__contact {
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    .c-header__header,
    .c-header__content {
      height: 100vh;
    }
    .c-header__inner-header,
    .c-header__inner-content {
      position: relative;
      height: 100%;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
    .c-header__avatar,
    .c-header__top {
      top: -2vh;
      position: relative;
    }
    .c-header__avatar {
      margin-top: -5.8rem;
      text-align: right;
      position: relative;
    }
    /* IE11 hack */
    *::-ms-backdrop, .c-header__avatar {
      height: 18vw;
    }
    .c-header__brand {
      text-align: left;
      margin-bottom: 0;
    }
    .c-header__social-buttons {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .c-header__contact {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }

  .c-brand__title,
  .c-brand__sub-title {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.75;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
  }

  .c-brand__first-word,
  .c-brand__second-word {
    display: block;
  }

  .c-brand__sub-title {
    margin-bottom: 0;
  }

  .c-brand__sizer {
    font-size: 65%;
  }

  @media (min-width: 1024px) {
    .c-brand__title {
      margin-bottom: .8rem;
    }
  }

  @media (min-width: 1200px) {
    .c-brand__title {
      margin-bottom: 1.4rem;
    }
    .c-brand__sizer {
      font-size: 100%;
    }
    .c-brand__sizer--sm {
      font-size: 80%;
    }
  }

  .c-avatar__img {
    border-radius: 50%;
    width: 11rem;
  }

  @media (min-width: 760px) {
    .c-avatar__img {
      width: 14rem;
    }
  }

  @media (min-width: 1200px) {
    .c-avatar__img {
      width: 100%;
    }
  }

  /* Sections */
  .t-section__header {
    background: #282929;
  }

  .t-section__content,
  .t-section--header .t-section__header {
    background: #2d2e2e;
  }

  .t-section__content-border-color {
    border-color: #2d2e2e;
  }

  @media (min-width: 1024px) {
    /* Odd Sections */
    .t-section,
    .t-section__header,
    .t-section--header .t-section__header {
      background: #2b2c2c;
    }
    .t-section__content {
      background: #2d2e2e;
    }
    /* Even Sections */
    .t-section:nth-child(even),
    .t-section:nth-child(even) .t-section__header {
      background: #292a2a;
    }
    .t-section:nth-child(even) .t-section__content {
      background: #2b2c2c;
    }
    .t-section:nth-child(even) .t-timeline__point {
      box-shadow: 0 0 0 6px #2b2c2c;
    }
  }

  .t-timeline__point {
    box-shadow: 0 0 0 6px #2d2e2e;
  }

  @media (max-width: 1023px) {
    .t-section__header {
      border-top: 1px solid #404242;
      border-bottom: 1px solid #404242;
    }
    .t-section--header .t-section__header {
      border-top: none;
      border-bottom: none;
    }
  }

  /* Brand Typography */
  .t-title {
    font-size: 4.8rem;
    line-height: 0.91;
  }

  .t-title__first-word {
    text-transform: lowercase;
    font-weight: 300;
  }

  .t-title__second-word {
    text-transform: uppercase;
    font-weight: 700;
  }

  .t-sub-title {
    font-weight: 300;
    font-size: 1.5rem;
    margin-left: .3rem;
  }


</style>
