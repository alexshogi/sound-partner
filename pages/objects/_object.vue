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
        {{ object.station.name }}
      </h2>

      <section
        v-if="object.station.image"
        class="rest-image"
        :style="`background-image: url(${object.image})`"
      />

      <div class="d-flex">
        <section class="content">
          <h2 class="mb-6 mt-8">
            Сейчас играет
          </h2>

          <TrackSingle
            class="mb-5"
            flat
            wide
            :track="currentTrack"
          />

          <v-btn
            color="#2256F6"
            text
            style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal;"
            @click="skipCurrent"
          >
            <v-icon style="font-size: 28px; padding-bottom: 2px; margin-left: 6px;">
              mdi-skip-next
            </v-icon>
            Играть следующий трек
          </v-btn>

          <h2 class="mb-6 mt-8">
            Следующее
          </h2>

          <TrackSingle
            class="mb-5"
            flat
            history
            wide
            :track="{ ...nextTrack.song, ...nextTrack }"
          />

          <h2 class="mb-6 mt-8">
            История музыки
          </h2>

          <TrackSingle
            v-for="(track, index) in object.song_history"
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
            Плейлисты заведения
          </h2>

          <v-row>
            <v-col
              v-for="playlist in playlists"
              :key="playlist.id"
            >
              <div class="playlist-card">
                <div
                  class="d-flex justify-end"
                  style="width: 100%;"
                >
                  <v-btn
                    icon
                    @click.stop="openPlaylistDialog(playlist)"
                  >
                    <v-icon color="white">
                      mdi-square-edit-outline
                    </v-icon>
                  </v-btn>
                </div>
                <h4 class="mb-2">
                  {{ playlist.name }}
                </h4>
                <p>{{ playlist.num_songs }} треков ({{ formatTime(playlist.total_length) }})</p>
                <div v-if="playlist.schedule_items && playlist.schedule_items.length">
                  <p
                    v-for="item in playlist.schedule_items"
                    :key="item.id"
                  >
                    {{ formatPlaylistTime(item.start_time) }} - {{ formatPlaylistTime(item.end_time) }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </aside>
      </div>
    </div>

    <v-snackbar
      v-model="snackbar"
      color="#2256F6"
      timeout="5000"
    >
      {{ snackbarText }}
    </v-snackbar>

    <v-dialog
      v-model="playlistEditDialog"
      persistent
      width="1000"
    >
      <v-card v-if="playlistToEdit">
        <v-card-title>
          Плейлист "{{ playlistToEdit.name }}"
        </v-card-title>

        <v-card-text>
          <v-form>
            TODO: Здесь будет редактирование плейлиста
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="closePlaylistDialog"
          >
            Отмена
          </v-btn>
          <v-btn
            disabled
            text
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      snackbar: false,
      snackbarText: '',
      loading: true,
      object: {},
      playlists: [],
      currentTrack: null,
      nextTrack: null,
      playlistEditDialog: false,
      playlistToEdit: null,
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
    getStationInfo (doRepeat = true) {
      const itemId = this.$route.params.object;

      this.$axios.get(`nowplaying/${itemId}`)
        .then((result) => {
          if (result?.data) {
            this.object = result.data;

            const track = result.data.now_playing;
            const station = result.data.station;

            this.nextTrack = result.data.playing_next;

            this.currentTrack = {
              ...track,
              ...station
            }
          }

          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });

      if (doRepeat) {
        setTimeout(() => {
          this.getStationInfo();
        }, 5000);
      }
    },
    getPlaylists () {
      const itemId = this.$route.params.object;

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
    formatTime (seconds) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    },
    formatPlaylistTime (time) {
      time = '' + time;
      if (time.length < 4) {
        time = '0' + time;
      }

      return time.slice(0, 2) + ':' + time.slice(2);
    },
    skipCurrent () {
      const itemId = this.$route.params.object;

      this.$axios.post(`station/${itemId}/backend/skip`)
      .then(() => {
        this.getStationInfo(false);

        this.snackbarText = 'Композиция пропущена. Подождите...';
        this.snackbar = true;
      })
      .catch((err) => {
        console.error(err);
      });
    },
    openPlaylistDialog (playlist) {
      this.playlistToEdit = playlist;
      this.playlistEditDialog = true;
    },
    closePlaylistDialog () {
      this.playlistToEdit = null;
      this.playlistEditDialog = false;
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
    padding: 8px;

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
