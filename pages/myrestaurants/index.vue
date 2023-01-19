<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div class="content-container">
      <h2 class="mb-4">
        Мои рестораны
      </h2>

      <v-row>
        <v-col
          v-for="r in restaurants"
          :key="r.id"
          cols="12"
          lg="4"
        >
          <div class="rest-card">
            <div>
              <h4 class="mb-2">
                Ресторан “Небо”
              </h4>
              <h4>Сейчас играет “Millions Always Never”</h4>
            </div>
            <div class="d-flex justify-end">
              <NuxtLink :to="{ path: `myrestaurants/${r.id}` }">
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
      restaurants: []
    }
  },
  created () {
    this.$nuxt.$emit('hide-sidebar');
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
