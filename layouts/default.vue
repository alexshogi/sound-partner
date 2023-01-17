<template>
  <v-app>
    <v-app-bar
      id="top"
      fixed
      app
      class="landing-header"
    >
      <div class="logo">
        <NuxtLink :to="{ path: '/' }">
          <img
            src="../static/images/logo.png"
            alt="SOUND PARTNER"
            @click="scrollTo('top')"
          >
        </NuxtLink>
      </div>

      <nav class="nav-big">
        <NuxtLink :to="{ path: '/' }">
          <v-btn
            class="common-btn nav-btn"
            depressed
            @click="scrollTo('top')"
          >
            Какая музыка есть
          </v-btn>
        </NuxtLink>

        <NuxtLink :to="{ path: '/' }">
          <v-btn
            class="common-btn nav-btn"
            depressed
            @click="scrollTo('pros')"
          >
            Что мы предлагаем?
          </v-btn>
        </NuxtLink>

        <NuxtLink :to="{ path: '/' }">
          <v-btn
            class="common-btn nav-btn"
            depressed
            @click="scrollTo('clients')"
          >
            Наши клиенты
          </v-btn>
        </NuxtLink>

        <NuxtLink :to="{ path: '/' }">
          <v-btn
            class="common-btn nav-btn"
            depressed
            @click="scrollTo('how-it-works')"
          >
            Как это работает?
          </v-btn>
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <v-btn
          class="common-btn nav-btn mr-3"
          depressed
        >
          Вход
        </v-btn>

        <NuxtLink :to="{ path: '/dashboard' }">
          <v-btn
            class="common-btn action-btn"
            depressed
          >
            Попробовать Демо
          </v-btn>
        </NuxtLink>
      </div>

      <nav class="nav-small">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              class="ham-btn"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <NuxtLink :to="{ path: '/' }">
                <v-btn
                  class="common-btn nav-btn"
                  depressed
                  @click="scrollTo('top')"
                >
                  Какая музыка есть
                </v-btn>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <NuxtLink :to="{ path: '/' }">
                <v-btn
                  class="common-btn nav-btn"
                  depressed
                  @click="scrollTo('pros')"
                >
                  Что мы предлагаем?
                </v-btn>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <NuxtLink :to="{ path: '/' }">
                <v-btn
                  class="common-btn nav-btn"
                  depressed
                  @click="scrollTo('clients')"
                >
                  Наши клиенты
                </v-btn>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <NuxtLink :to="{ path: '/' }">
                <v-btn
                  class="common-btn nav-btn"
                  depressed
                  @click="scrollTo('how-it-works')"
                >
                  Как это работает?
                </v-btn>
              </NuxtLink>
            </v-list-item>

            <v-list-item>
              <v-btn
                class="common-btn nav-btn"
                depressed
              >
                Вход
              </v-btn>
            </v-list-item>

            <v-list-item>
              <v-btn
                class="common-btn action-btn"
                depressed
              >
                Попробовать Демо
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <div class="content-container">
        <div class="footer-content">
          <div class="logo">
            <NuxtLink :to="{ path: '/' }">
              <img
                src="../static/images/logo.png"
                alt="SOUND PARTNER"
              >
            </NuxtLink>
          </div>

          <nav class="nav-big">
            <NuxtLink :to="{ path: '/' }">
              <v-btn
                class="common-btn nav-btn"
                depressed
                @click="scrollTo('top')"
              >
                Какая музыка есть
              </v-btn>
            </NuxtLink>

            <NuxtLink :to="{ path: '/' }">
              <v-btn
                class="common-btn nav-btn"
                depressed
                @click="scrollTo('moto')"
              >
                Что мы предлагаем?
              </v-btn>
            </NuxtLink>

            <NuxtLink :to="{ path: '/' }">
              <v-btn
                class="common-btn nav-btn"
                depressed
                @click="scrollTo('us')"
              >
                Наши клиенты
              </v-btn>
            </NuxtLink>

            <NuxtLink :to="{ path: '/' }">
              <v-btn
                class="common-btn nav-btn"
                depressed
                @click="scrollTo('feedback')"
              >
                Как это работает?
              </v-btn>
            </NuxtLink>
          </nav>

          <div class="contacts">
            <p>
              <b>Телефон:</b>
              <a href="tel:+79217858574">+7(921)785-85-74</a>
            </p>
            <p>
              <b>E-mail:</b>
              <a href="mailto:bwasilii@gmail.com">bwasilii@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
    }
  },
  methods: {
    scrollTo(refName) {
      if (this.$route.path === '/') {
        const element = document.getElementById(refName);
        const top = element.offsetTop;

        window.scrollTo(0, top);
      } else {
        this.$router.push({
          path: '/'
        })

        setTimeout(() => {
          const element = document.getElementById(refName);
          const top = element.offsetTop;

          window.scrollTo(0, top);
        }, 300)
      }
    }
  }
}
</script>

<style>
  @font-face {
    font-family: Gilroy;
    src: url(../static/fonts/font/Gilroy-Regular.woff2);
  }

  html,
  body {
    background-color: #ffffff;
  }

  .v-main .container {
    margin: 0 auto !important;
  }

  @media screen and (max-width: 900px) {
    .v-toolbar,
    .v-toolbar__content {
      padding: 8px 16px;
      width: 100vw;
      max-width: 100vw;
    }

    body {
      overflow: hidden;
    }
  }
</style>

<style lang="scss">
  .app,
  .v-application {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    color: #272727;
  }

  .content-container {
    width: 100%;
    max-width: 1470px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 180px;

    .contacts {

      p {
        margin: 0;
      }

      a {
        color: #272727;
        text-decoration: none;
      }
    }
  }

  a {
    text-decoration: none !important;
  }

  .v-main .container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0px !important;
  }

  .v-toolbar {
    display: flex;
    justify-content: center;
    box-shadow: none !important;
    background-color: #ffffff !important;
  }

  .landing-header .v-toolbar__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    width: 1470px;
    max-width: 1470px;
    height: 100% !important;
  }

  .header-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .ham-btn {
    height: 40px !important;
    width: 40px !important;
    min-height: 40px !important;
    min-width: 40px !important;
    max-height: 40px !important;
    max-width: 40px !important;
    background: transparent !important;
    box-shadow: none;
    padding: 0 !important;

    span {

      i {
        font-size: 36px !important;
      }
    }
  }

  .v-app-bar.v-toolbar.v-sheet {
    background-color: transparent;
    box-shadow: none;
    z-index: 20;
    background-color: rgba(255, 255, 255, 0.4) !important;
    backdrop-filter: blur(30px);
    height: 100px !important;
  }

  .v-application {
    background-color: #E5E5E5;
  }

  .common-btn {
    width: fit-content;
    height: 47px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border-radius: 10px;
    color: #272727;
    text-transform: none;
  }

  .action-btn {
    height: 49px;
    background-color: #2256F6 !important;
    color: #ffffff !important;
  }

  .link-btn {
    background-color: transparent !important;
    color: #2256F6 !important;
  }

  .nav-btn {
    height: 30px;
    padding: 4px 24px;
    background-color: transparent !important;
  }

  .icon-btn {
    padding: 4px 4px !important;
    width: 40px !important;
    min-width: 40px !important;
    max-width: 40px !important;
    text-align: center;

    .v-btn__content {
      i {
        margin: 0 !important;
        height: 24px !important;
        width: 24px !important;
        font-size: 24px !important;
      }
    }
  }

  .nav-small {
    display: none;

    a {
      text-decoration: none;
    }
  }

  .nav-big {
    display: unset;

    a {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 1330px) {
    // hamburger menu
    .nav-small {
      display: block;
    }

    .nav-big,
    .header-actions {
      display: none;
    }

    .iconed {
      display: flex;
      justify-content: center;
    }

    .v-toolbar__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 8px 32px;
      width: 100%;
      max-width: 100%;
    }
  }
</style>
