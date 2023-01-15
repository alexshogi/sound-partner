<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <div class="logo">
        <NuxtLink :to="{ path: '/' }">
          <img
            src="../static/images/logo-horizontal.png"
            alt="SOUND PARTNER"
            @click="scrollTo('top')"
          >
        </NuxtLink>
      </div>

      <v-text-field
        placeholder="Поиск музыки, альбома, артиста или ресторана"
        solo
        dense
        hide-details
        class="search-field"
      />
    </v-app-bar>

    <div
      class="d-flex"
      style="padding-top: 100px;"
    >
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav-heading">
              Обзор музыки
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items1"
            :key="item.title"
            class="nav-item"
            link
          >
            <NuxtLink
              :to="{ path: item.route }"
              class="d-flex"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </NuxtLink>
          </v-list-item>
        </v-list>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav-heading">
              Обзор ресторана
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items2"
            :key="item.title"
            class="nav-item"
            link
          >
            <NuxtLink
              :to="{ path: item.route }"
              class="d-flex"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </NuxtLink>
          </v-list-item>
        </v-list>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav-heading">
              Настройки
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items3"
            :key="item.title"
            class="nav-item"
            link
          >
            <NuxtLink
              :to="{ path: item.route }"
              class="d-flex"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="padding-top: 0;">
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>

      <v-navigation-drawer
        right
        permanent
        width="400"
      >
        <v-list class="music-player">
          <v-list-item class="mb-4">
            <v-list-item-title>
              <h2>Следующая песня</h2>
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-for="(track, index) in tracks"
            :key="track.title + index"
          >
            <v-list-item-avatar>
              <v-img
                min-height="56"
                min-width="56"
                max-height="56"
                max-width="56"
                :src="track.avatar"
                style="background: #D9D9D9; border-radius: 5px;"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ track.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ track.artist }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">
                  mdi-dots-vertical
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-list-item class="mt-4 mb-4">
            <v-list-item-title>
              <h2>Сейчас играет</h2>
            </v-list-item-title>
          </v-list-item>

          <v-list-item class="mt-4">
            <TrackSingle
              class="mb-5"
              wide
              :track="currentTrack"
              :title="currentTrack.title"
            />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script>
import TrackSingle from '@/components/TrackSingle.vue'

export default {
  name: 'LKLayout',
  components: {
    TrackSingle
  },
  data () {
    return {
      currentTrack: {
        artist: 'DJ Shadow, Mos Def',
        title: 'Six Days',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy15ez24PqDSOEn7zfVZTAz-U22aDiQ5-2A&usqp=CAU',
        plays: '4 300 124',
        duration: '3:53',
        source: '../audio/six-days.mp3',
        liked: true
      },
      items1: [
        { title: 'Главная', icon: 'mdi-home', route: 'dashboard' },
        { title: 'Обзор', icon: 'mdi-view-dashboard', route: 'review' },
        { title: 'Альбомы', icon: 'mdi-folder-play', route: 'albums' },
        { title: 'Артисты', icon: 'mdi-account-music', route: 'artists' },
        { title: 'Понравилось', icon: 'mdi-heart', route: 'favourite' },
      ],
      items2: [
        { title: 'Мои ресторан(-ы)', icon: 'mdi-home-group', route: 'myrestaurants' },
        { title: 'Рестораны', icon: 'mdi-account-supervisor', route: 'restaurants' },
      ],
      items3: [
        { title: 'Аккаунт', icon: 'mdi-cog', route: 'account' },
        { title: 'Загрузить', icon: 'mdi-upload', route: 'upload' },
        { title: 'Выход', icon: 'mdi-logout-variant' },
      ],
      tracks: [
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          number: '01',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          number: '02',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          number: '03',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          number: '04',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          number: '05',
          liked: true
        },
      ]
    }
  },
  created() {
    this.$nuxt.$on('change-song', (track) => {
      this.changeTrack(track);
    })
  },
  methods: {
    changeTrack (track) {
      console.log('** changeTrack')
      console.log(track)

      this.currentTrack = track;
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

  .v-toolbar {
    display: flex;
    justify-content: center;
    box-shadow: none !important;
    background-color: #ffffff !important;
  }

  .v-toolbar__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    width: 100%;
    max-width: 100%;
    height: 100% !important;
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

  .search-field > .v-input__control > .v-input__slot {
    box-shadow: none !important;
    background: #F6F6F6 !important;
    border-right: 2px solid #2256F6;
    border-radius: 10px;
    max-width: 40%;
    margin-left: 115px;
  }

  .nav-heading {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #7A7A7A;
  }

  .nav-item div.v-list-item__content div.v-list-item__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

  .nav-item div.v-list-item__icon {
    margin-right: 15px !important;
  }

  .nav-item div.v-list-item__icon i {
    color: #272727;
  }

  .music-player {

    .main-icon {
      font-size: 30px;
      line-height: 37px;
      color: #272727;
      margin-right: 15px;
    }
    
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 37px;
      color: #272727;
    }
  }
</style>
