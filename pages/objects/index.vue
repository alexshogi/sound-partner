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
        Мои заведения
      </h2>

      <v-row>
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
              <h4 v-if="r.now_playing && r.now_playing.song">
                Сейчас играет “{{ r.now_playing.song.text }}”
              </h4>
            </div>
            <div class="d-flex justify-end">
              <NuxtLink :to="{ path: `objects/${r.station.id}` }">
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
    </div>
  </main>
</template>

<script>
export default {
  layout: 'lk',
  data () {
    return {
      loading: true,
      objects: [],
    }
  },
  created () {
    this.$nuxt.$emit('hide-sidebar');

    this.getStations();
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy () {
    this.$nuxt.$emit('show-sidebar');
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
              this.loading = false;
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
