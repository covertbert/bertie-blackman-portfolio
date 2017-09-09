<template lang="pug">
  section.o-section.t-section.o-section--footer
    .o-section__header-bg.t-section__header
    .o-section__content-bg.t-section__content
    .o-container
      .o-section__container
        header.o-section__header.t-section__header
          .o-content
            h2.o-section__heading
              | Contact
            .o-content__body.o-section__description
              | Call me, maybe.

        .o-section__content.t-section__content
          .c-footer__contact
            .o-grid
              .o-grid__col-md-3.o-grid__col-sm-6
                .o-content
                  .o-content__body
                    h4 Location
                    address
                      | Portland, OR

              .o-grid__col-md-3.o-grid__col-sm-6
                .o-content
                  .o-content__body
                    h4 Phone
                    p
                      | 534.456.886

              .o-grid__col-md-3.o-grid__col-sm-6
                .o-content
                  .o-content__body
                    a.t-link-container(href='#', target='_blank')
                      h4 Web
                      p
                        span.t-link-container__item--blended
                          | ruventhemes.com

              .o-grid__col-md-3.o-grid__col-sm-6
                .o-content
                  .o-content__body
                    a.t-link-container(href='#', target='_blank')
                      h4 Email
                      p
                        span.t-link-container__item--blended
                          | hello@example.com

          hr.c-footer__contact-divider
          .o-content
            .c-footer__bottom
              .c-footer__brand
                .c-brand
                  .o-content__body
                    h1.c-brand__title.t-title
                      span.c-brand__sizer.c-brand__sizer--sm
                        span.a-footer.c-brand__first-word.t-title__first-word
                          | Desmond
                        span.a-footer.c-brand__second-word.t-title__second-word
                          | Rambowski

              ul.c-footer__social-buttons.c-social-buttons.o-content__body
                li.a-footer
                  a.c-social-button.t-social-button(href='https://www.facebook.com/RuvenThemes/', target='_blank')
                    i.fa.fa-lg.fa-facebook
                li.a-footer
                  a.c-social-button.t-social-button(href='https://dribbble.com/', target='_blank')
                    i.fa.fa-lg.fa-dribbble
                li.a-footer
                  a.c-social-button.t-social-button(href='https://twitter.com/_Ruven', target='_blank')
                    i.fa.fa-lg.fa-twitter
</template>

<script type="text/babel">
  /* ============
   FooterComponent
   * ============
   *
   * todo: add documentation here!
   */

  export default {
    name: 'FooterComponent',

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

<style scoped lang="scss" rel="stylesheet/scss">
  .c-footer__contact-divider {
    margin-bottom: 3.5rem;
  }

  .c-footer__brand {
    margin-bottom: 1.75rem;
  }

  @media (min-width: 600px) {
    .c-footer__contact-divider {
      margin-bottom: 6.3rem;
    }
    .c-footer__bottom {
      position: relative;
    }
    .c-footer__brand {
      margin-bottom: 0;
    }
    .c-footer__social-buttons {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 0;
    }
  }

  @media (min-width: 760px) {
    .c-footer__contact {
      margin-bottom: 1.4rem;
    }
  }

  @media (min-width: 1200px) {
    .c-footer__contact-divider {
      margin-bottom: 8.75rem;
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

</style>
