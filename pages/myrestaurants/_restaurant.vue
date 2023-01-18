<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <h2 class="mb-4">
        Ресторан “{{ restaurant.title }}”
      </h2>

      <section
        class="rest-image"
        :style="`background-image: url(${restaurant.image})`"
      />

      <div class="d-flex">
        <section class="content">
          <h2 class="mb-4 mt-8">
            Сейчас играет
          </h2>

          <TrackSingle
            class="mb-5"
            flat
            wide
            autoplay
            :track="restaurant.currentTrack"
          />

          <h2 class="mb-4 mt-8">
            История музыки
          </h2>

          <TrackSingle
            v-for="track in restaurant.history"
            :key="track.song.id"
            class="mb-5"
            flat
            wide
            :track="track"
          />
        </section>

        <aside class="playlists-content">
          <h2 class="mb-4 mt-8">
            Плейлист(-ы) ресторана
          </h2>

          <v-row>
            <v-col
              v-for="playlist in restaurant.playlists"
              :key="playlist.id"
            >
              <div class="playlist-card">
                <h4 class="mb-2">
                  {{ playlist.title }}
                </h4>
                <p>{{ playlist.tracksCount }} треков</p>
              </div>
            </v-col>
          </v-row>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import TrackSingle from '@/components/TrackSingle.vue'

export default {
  components: {
    TrackSingle
  },
  layout: 'lk',
  data () {
    return {
      restaurant: {},
      restaurants: [
        {
          title: 'Небо',
          id: 'f6d5f5d',
          image: 'https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg',
          currentTrack: {
            artist: 'Alan Walker',
            title: 'The Drum',
            avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
            plays: '8 796 542',
            duration: '3:09',
            source: '../audio/the-drum.mp3',
            number: '01',
            liked: true
          },
          history: [
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
            }
          ],
          playlists: [
            {
              id: '32k32k',
              title: 'День',
              tracksCount: 97
            },
            {
              id: 'cfv55i',
              title: 'Ночь',
              tracksCount: 68
            },
            {
              id: '55ahnr',
              title: 'Реклама',
              tracksCount: 5
            }
          ]
        },
        {
          title: 'Небо',
          id: 'd89s8dx',
          image: 'https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg',
          currentTrack: {
            artist: 'Alan Walker',
            title: 'The Drum',
            avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
            plays: '8 796 542',
            duration: '3:09',
            source: '../audio/the-drum.mp3',
            number: '01',
            liked: true
          },
          history: [
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
            }
          ]
        },
        {
          title: 'Небо',
          id: '22a3sas',
          image: 'https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg',
          currentTrack: {
            artist: 'Alan Walker',
            title: 'The Drum',
            avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
            plays: '8 796 542',
            duration: '3:09',
            source: '../audio/the-drum.mp3',
            number: '01',
            liked: true
          },
          history: [
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
            }
          ]
        }
      ]
    }
  },
  created () {
    const itemId = this.$route.params.restaurant;
    this.restaurant = this.restaurants.find((r) => r.id = itemId);

    this.$nuxt.$emit('hide-sidebar');
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    this.$nuxt.$emit('show-sidebar');
  }
}
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;
  }

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

  .rest-image {
    height: 215px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ececec;
  }

  .playlists-content {
    min-width: 450px;
    margin-left: 50px;
  }

  .playlist-card {
    min-height: 80px;
    background: #2256F6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    padding-top: 24px;

    h4 {
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      color: #FFFFFF;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
    }
  }
</style>
