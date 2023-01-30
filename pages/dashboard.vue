<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <h2 class="mb-4">
        Ваши заведения
      </h2>

      <v-row
        v-if="loadingStations"
      >
        <div
          class="d-flex justify-center align-center pa-5"
          style="min-height: 245px;"
        >
          <v-progress-circular
            indeterminate
            color="#2256F6"
          />
        </div>
      </v-row>

      <v-row v-if="!loadingStations && objects && objects.length">
        <v-col
          v-for="r in objects"
          :key="r.id"
          cols="12"
          lg="4"
        >
          <div
            v-if="r"
            class="rest-card"
          >
            <div>
              <h4 class="mb-2">
                {{ r.station?.name }}
              </h4>
              <h4 v-if="r.now_playing?.song">
                Сейчас играет “{{ r.now_playing.song.text }}”
              </h4>
            </div>
            <div class="d-flex justify-end">
              <NuxtLink :to="{ path: `objects/${r.station?.id}` }">
                <v-btn
                  class="simple-btn"
                  depressed
                >
                  Подробнее
                </v-btn>
              </NuxtLink>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="d-flex justify-space-between align-center mt-12 mb-4">
        <h2>
          Твой плейлист
        </h2>
        <v-btn
          color="#2256F6"
          text
          style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal;"
        >
          Смотреть все
        </v-btn>
      </div>

      <div class="d-flex justify-space-between align-center mt-12 mb-4">
        <h2>
          Популярно для тебя
        </h2>
        <v-btn
          color="#2256F6"
          text
          style="font-weight: 600; font-size: 18px; line-height: 22px; text-transform: none; letter-spacing: normal;"
        >
          Смотреть все
        </v-btn>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'lk',
  data () {
    return {
      loadingStations: true,
      objects: [],
    }
  },
  mounted () {
    this.getStations();
  },
  methods: {
    getStations () {
      this.$axios.get('stations')
        .then((result) => {
          if (result?.data) {
            this.objects = [ ...result.data ];

            this.getStationsInfo();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getStationsInfo () {
      for (const [index, r] of this.objects.entries()) {
        this.$axios.get(`nowplaying/${r.id}`)
          .then((result) => {
            if (result?.data) {
              this.objects[index] = result.data;
            }

            if (index === this.objects.length - 1) {
              setTimeout(() => {
                this.loadingStations = false;
              }, 1500)
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  },
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

  .rest-card {
    height: 222px;
    background: #2256F6;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
    }
  }
</style>
