<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <h2 class="mb-4">
        Ваши заведения
      </h2>

      <v-row>
        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-card">
            <div>
              <h4 class="mb-2">
                Бассейн “Небо”
              </h4>
              <h4>Сейчас играет “Millions Always Never”</h4>
            </div>
            <div class="d-flex justify-end">
              <v-btn
                class="simple-btn"
                depressed
              >
                Подробнее
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-card">
            <div>
              <h4 class="mb-2">
                Ресторан “Весна”
              </h4>
              <h4>Сейчас играет “Millions Always Never”</h4>
            </div>
            <div class="d-flex justify-end">
              <v-btn
                class="simple-btn"
                depressed
              >
                Подробнее
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-card">
            <div>
              <h4 class="mb-2">
                Баня “Под дубом”
              </h4>
              <h4>Сейчас играет “Millions Always Never”</h4>
            </div>
            <div class="d-flex justify-end">
              <v-btn
                class="simple-btn"
                depressed
              >
                Подробнее
              </v-btn>
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
      loading: false,
    }
  },
  mounted () {
    this.getStation();
  },
  methods: {
    getStation () {
      this.$axios.get('nowplaying/1')
        .then((result) => {
          const track = result.data.now_playing;
          const station = result.data.station;

          this.$nuxt.$emit('change-song', {
            ...track,
            ...station
          });
        })
        .catch((err) => {
          console.error(err);
        });
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
