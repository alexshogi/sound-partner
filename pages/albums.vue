<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <h2 class="mb-4">
        Альбомы
      </h2>

      <v-row>
        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="4"
        >
          <div class="rest-playlist-card">
            <div>
              <h4>Плейлист для “Рассвет”</h4>
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
