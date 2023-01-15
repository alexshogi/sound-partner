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
                Ресторан “Небо”
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
                Ресторан “Под дубом”
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

      <h2 class="mt-12 mb-4">
        Твой плейлист
      </h2>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr
                  v-for="(item, index) in items"
                  :key="item.name"
                >
                  <td width="10">
                    {{ '0' + (index + 1) }}
                  </td>
                  <td width="50">
                    <v-img
                      min-height="50"
                      min-width="50"
                      max-height="50"
                      max-width="50"
                      :src="item.avatar"
                      style="background: #D9D9D9; border-radius: 5px;"
                    />
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
                    >
                      mdi-heart
                    </v-icon>
                    <v-icon
                      v-else
                      color="#2256F6"
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

      <h2 class="mt-12 mb-4">
        Популярно для тебя
      </h2>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template #default>
              <tbody>
                <tr
                  v-for="(item, index) in recommendedItems"
                  :key="item.name"
                >
                  <td width="10">
                    {{ '0' + (index + 1) }}
                  </td>
                  <td width="50">
                    <v-img
                      min-height="50"
                      min-width="50"
                      max-height="50"
                      max-width="50"
                      :src="item.avatar"
                      style="background: #D9D9D9; border-radius: 5px;"
                    />
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
                    >
                      mdi-heart
                    </v-icon>
                    <v-icon
                      v-else
                      color="#2256F6"
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
      items: [
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
      ],
      recommendedItems: [
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../../static/audio/the-drum.mp3',
          number: '01',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../../static/audio/the-drum.mp3',
          number: '02',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../../static/audio/the-drum.mp3',
          number: '03',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../../static/audio/the-drum.mp3',
          number: '04',
          liked: false
        },
        {
          artist: 'Alan Walker',
          title: 'The Drum',
          avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
          plays: '8 796 542',
          duration: '3:09',
          source: '../../static/audio/the-drum.mp3',
          number: '05',
          liked: false
        },
      ],
    }
  },
}
</script>

<style>
  .v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 10px;
  }

  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    padding-bottom: 10px;
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
