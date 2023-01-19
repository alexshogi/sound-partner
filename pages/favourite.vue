<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <v-row class="mb-4">
        <v-col
          cols="12"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Весна”</h4>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="d-flex justify-space-between align-center mt-12 mb-4">
        <h2>
          Понравившиеся треки
        </h2>
        <div>
          <v-btn
            :color="showLiked ? '#2256F6' : '#D9E2FF'"
            text
            style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal;"
            @click="showLiked = true"
          >
            Понравились
          </v-btn>

          <span style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal; color: #2256F6;">|</span>

          <v-btn
            :color="!showLiked ? '#2256F6' : '#D9E2FF'"
            text
            style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal;"
            @click="showLiked = false"
          >
            Не понравились
          </v-btn>
        </div>
      </div>

      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr
                  v-for="(item, index) in showLiked ? liked : notLiked"
                  :key="item.name + index + item.number"
                >
                  <td width="10">
                    {{ '0' + (index + 1) }}
                  </td>
                  <td
                    width="50"
                    style="position: relative;"
                  >
                    <v-img
                      min-height="50"
                      min-width="50"
                      max-height="50"
                      max-width="50"
                      :src="item.avatar"
                      style="background: #D9D9D9; border-radius: 5px;"
                    />
                    <div
                      class="avatar-hover"
                      @click="play(item)"
                    >
                      <v-icon>mdi-play</v-icon>
                    </div>
                  </td>
                  <td width="200">
                    {{ item.title }}
                  </td>
                  <td>{{ item.artist }}</td>
                  <td width="160">
                    {{ item.plays }}
                  </td>
                  <td width="100">
                    {{ item.duration }}
                  </td>
                  <td width="100">
                    <v-icon
                      v-if="item.liked"
                      color="#2256F6"
                      @click="item.liked = !item.liked"
                    >
                      mdi-heart
                    </v-icon>
                    <v-icon
                      v-else
                      color="#2256F6"
                      @click="item.liked = !item.liked"
                    >
                      mdi-heart-outline
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'lk',
  data () {
    return {
      showLiked: true,
      items: [
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          source: '../audio/millions.mp3',
          number: '01',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          source: '../audio/millions.mp3',
          number: '02',
          liked: true
        },
        {
          artist: 'DJ Shadow, Mos Def',
          title: 'Six Days',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy15ez24PqDSOEn7zfVZTAz-U22aDiQ5-2A&usqp=CAU',
          plays: '4 300 124',
          duration: '3:53',
          source: '../audio/six-days.mp3',
          number: '03',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          source: '../audio/millions.mp3',
          number: '04',
          liked: true
        },
        {
          artist: 'Always Never',
          title: 'Millions',
          avatar: 'https://nikkur.ru/wp-content/uploads/2019/11/always-never-300x300.jpg',
          plays: '8 096 542',
          duration: '3:58',
          source: '../audio/millions.mp3',
          number: '05',
          liked: true
        },
      ],
      recommendedItems: [
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../audio/the-drum.mp3',
          number: '01',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../audio/the-drum.mp3',
          number: '02',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../audio/the-drum.mp3',
          number: '03',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../audio/the-drum.mp3',
          number: '04',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../audio/the-drum.mp3',
          number: '05',
          liked: false
        },
      ],
    }
  },
  computed: {
    liked () {
      const allTracks = [...this.items, ...this.recommendedItems];

      return allTracks.filter((t) => t.liked);
    },
    notLiked () {
      const allTracks = [...this.items, ...this.recommendedItems];

      return allTracks.filter((t) => !t.liked);
    }
  },
  methods: {
    play (item) {
      this.$nuxt.$emit('change-song', item);
    }
  }
}
</script>

<style>
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    padding-bottom: 10px !important;
    padding-top: 10px !important;
  }

  .avatar-hover {
    display: none;
    justify-content: center;
    align-items: center;
    width: calc(100% - 32px);
    height: calc(100% - 20px);
    position: absolute;
    border-radius: 5px;
    cursor: pointer;
    top: 10px;
    left: 16px;
    background: linear-gradient(120deg, rgba(24,229,237,0.45) 0%, rgba(156,29,223,0.45) 32%, rgba(46,193,236,0.45) 100%);
  }

  .avatar-hover i.v-icon {
    color: #FFFFFF;
    font-size: 34px;
  }

  .v-data-table > .v-data-table__wrapper > table > tbody > tr:hover > td > .avatar-hover {
    display: flex;
  }
</style>

<style lang="scss" scoped>
  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #000000;
  }

  .simple-btn {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 6px 17px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #2256F6;
    text-transform: none;
  }

  .rest-playlist-card {
    height: 222px;
    background: #8b5017;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      padding: 16px;
      backdrop-filter: blur(5px);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
</style>
