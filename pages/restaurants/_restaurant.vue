<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div
      v-if="loading"
      class="content-container"
    >
      <div
        class="d-flex justify-center align-center pa-5"
        style="min-height: 400px;"
      >
        <v-progress-circular
          indeterminate
          color="#2256F6"
        />
      </div>
    </div>

    <div
      v-if="!loading"
      class="content-container"
    >
      <h2 class="mb-4">
        Ресторан “{{ restaurant.station.name }}”
      </h2>

      <section
        v-if="restaurant.station.image"
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
            :track="currentTrack"
          />

          <h2 class="mb-4 mt-8">
            История музыки
          </h2>

          <TrackSingle
            v-for="(track, index) in restaurant.song_history"
            :key="track.song.id + index"
            class="mb-5"
            flat
            history
            wide
            :track="{ ...track.song, ...track }"
          />
        </section>

        <aside class="playlists-content">
          <h2 class="mb-4 mt-8">
            Плейлист(-ы) ресторана
          </h2>

          <v-row>
            <v-col
              v-for="playlist in playlists"
              :key="playlist.id"
            >
              <div class="playlist-card">
                <h4 class="mb-2">
                  {{ playlist.name }}
                </h4>
                <p>{{ playlist.num_songs }} треков</p>
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
      loading: true,
      restaurant: {},
      playlists: [],
      currentTrack: null
    }
  },
  created () {
    this.$nuxt.$emit('hide-sidebar');

    this.getStationInfo();
    this.getPlaylists();
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    this.$nuxt.$emit('show-sidebar');
  },
  methods: {
    getStationInfo () {
      const itemId = this.$route.params.restaurant;

      this.$axios.get(`nowplaying/${itemId}`)
        .then((result) => {
          if (result?.data) {
            this.restaurant = result.data;

            const track = result.data.now_playing;
            const station = result.data.station;

            this.currentTrack = {
              ...track,
              ...station
            }

            console.log(this.currentTrack)
          }

          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });

      setTimeout(() => {
        this.getStationInfo();
      }, 5000);
    },
    getPlaylists () {
      const itemId = this.$route.params.restaurant;

      this.$axios.get(`station/${itemId}/playlists`)
        .then((result) => {
          if (result?.data) {
            this.playlists = result.data;
          }

          console.log(this.playlists);
        })
        .catch((err) => {
          console.error(err);
        });
    },
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
