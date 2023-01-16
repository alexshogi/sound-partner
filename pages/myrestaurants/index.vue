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
