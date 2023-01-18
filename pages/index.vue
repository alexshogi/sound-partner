<template>
  <main>
    <div class="hero">
      <div class="content-container">
        <v-row>
          <v-col
            cols="12"
            class="main-text"
            lg="7"
            xs="12"
          >
            <h1>ФОНОВАЯ МУЗЫКА ДЛЯ ВАШЕГО БИЗНЕСА</h1>
            <p>Простой сервис для удобного управления музыкой</p>
            <div class="hero-actions mt-6">
              <v-btn
                class="common-btn action-btn mr-6"
                depressed
              >
                Попробовать Демо
              </v-btn>
              <v-btn
                class="common-btn link-btn lk-btn"
                depressed
              >
                Войти в личный кабинет
                <v-icon>
                  mdi-arrow-top-right
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="5"
            xs="12"
          >
            <div class="hero-music">
              <TrackSingle
                class="mb-5"
                :track="track"
              />
              <TrackSingle
                class="mb-5"
                :track="track"
              />
              <TrackSingle
                class="mb-5"
                :track="track"
              />
              <TrackSingle
                class="mb-5"
                :track="track"
              />
            </div>
            <div class="d-flex justify-center">
              <v-btn
                class="common-btn black-btn action-btn mr-6"
                depressed
                click="playFirstTrack"
              >
                Включить музыку
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      id="pros"
      class="pros"
    >
      <div class="content-container">
        <v-row>
          <v-col
            cols="12"
            class="px-8"
            lg="4"
            xs="12"
          >
            <div class="amount">
              30%
            </div>
            <p class="px-12">
              Создает атмосферу и эмоциональную связь с вашими клиентами
            </p>
          </v-col>
          <v-col
            cols="12"
            class="px-8"
            lg="4"
            xs="12"
          >
            <div class="amount">
              +50%
            </div>
            <p class="px-12">
              Помогает с продажами, повышает чек
            </p>
          </v-col>
          <v-col
            cols="12"
            class="px-8"
            lg="4"
            xs="12"
          >
            <div class="amount">
              +40%
            </div>
            <p class="px-12">
              Увеличивает лояльность клиентов и даже продуктивность сотрудников
            </p>
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      id="clients"
      class="clients"
    >
      <div class="content-container">
        <v-row>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <h2>Наши клиенты</h2>
            <ul>
              <li>Рестораны, кафе и бары;</li>
              <li>Фитнес-центры, бассейны;</li>
              <li>Бизнес-центры, отели;</li>
              <li>Торговые центры, магазины;</li>
              <li>Медицинские клиники, аптеки;</li>
              <li>Дилерские центры, ремонтные мастерские, автомойки;</li>
              <li>Аэропорты, вокзалы, поезда, общественные уборные.</li>
            </ul>
            <v-btn
              class="common-btn action-btn mt-6"
              depressed
            >
              Попробовать Демо
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <img
              src="../static/images/dj.png"
              alt="DJ"
            >
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      id="how-it-works"
      class="how-it-works"
    >
      <div class="content-container">
        <h2>Как это работает</h2>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Подбором музыки</b> и всей технической частью занимаются наши специалисты. Вам необходимо только написать Ваши пожелания к аудиофону
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Вся музыка кешируется на музыкальной приставке</b>, и доступна даже без интернета. Таким образом достигается бесперебойное вещание музыки в заведении. Интернет требуется только для обновления контента
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Для запуска музыки</b> в заведении нужно пять минут. Достаточно просто подключить наш плеер к акустике в Вашем заведении
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Запуск Вашей аудиорекламы</b> осуществляется по графику – рекламируйте проходящие у Вас акции, открытие новых заведений и любую другую информацию
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Во всех Ваших заведениях</b> одновременно будет играть один и тот же плейлист
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <b>Обновление музыки происходит</b> один раз в месяц, удаление не понравившихся композиций – в течение одного часа после информирования
            </div>
          </v-col>
        </v-row>
        <v-btn
          class="common-btn action-btn mt-6"
          depressed
        >
          Попробовать Демо
        </v-btn>
      </div>
    </div>

    <div class="faq">
      <div class="content-container">
        <h2>Часто встречающиеся вопросы</h2>
        <v-row class="justify-center">
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <h3>Помогаете ли вы подключать оборудование?</h3>
              Помогаем, наши инженеры делают это удалённо либо приезжают в заведение.
            </div>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col
            cols="12"
            lg="6"
            xs="12"
          >
            <div class="feature">
              <h3>Есть ли решение, если мы хотим использовать своё оборудование / нас не устраивает ваш плеер / мы хотим устроить разовое мероприятие на выезде?</h3>
              Есть. Мы можем предоставить Вам ссылку на он-лайнпоток Вашей музыки, она ничем не будет отличаться от того, что играет у Вас в заведении. Для этого подойдет любой телефон / планшет / ПК. И понадобится постоянный доступ в интернет
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </main>
</template>

<script>
import TrackSingle from '@/components/TrackSingle.vue'

export default {
  name: 'IndexPage',
  components: {
    TrackSingle
  },
  data: () => {
    return {
      loading: false,
      track: {
        artist: 'Alan Walker',
        title: 'The Drum',
        avatar: 'http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1671119553458-alan_walker.jpg',
        plays: '8 796 542',
        duration: '3:09',
        // source: '../audio/the-drum.mp3',
        number: '01',
        liked: false
      },
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .content-container {
    width: 100%;
    max-width: 1470px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .hero {
    margin-top: 100px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    position: relative;

    .main-text {
      padding-top: 40px;
    }

    h1 {
      font-weight: 700;
      font-size: 62px;
      line-height: 78px;
      text-transform: capitalize;
    }

    p {
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      padding-left: 4px;
    }

    .common-btn {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      padding: 14px 18px;
      height: 49px;
    }

    .black-btn {
      background-color: #272727 !important;
    }

    .hero-music {
      position: relative;
      height: 470px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: -50px;
        left: calc(50% - 235px);
        width: 470px;
        height: 470px;
        background: #2256F6;
        border-radius: 50%;
        z-index: 0;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 80px;
        width: 640px;
        height: 350px;
        background: linear-gradient(360deg, #FFFFFF -10.63%, rgba(255, 255, 255, 0) 67.68%, rgba(255, 255, 255, 0) 129.89%);
        z-index: 2;
      }

      .track {
        position: relative;
        z-index: 1;
      }
    }
  }

  .pros {
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 40px;
    .amount {
      font-weight: 600;
      font-size: 134px;
      line-height: 164px;
      text-align: center;
    }

    p {
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
    }
  }

  .clients {
    color: #ffffff;
    background-color: #1F2245;
    padding-top: 50px;
    padding-bottom: 60px;

    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 40px;
    }

    ul {
      padding: 0;
    }

    li {
      font-weight: 500;
      font-size: 22px;
      line-height: 27px;
      list-style: none;
      margin-bottom: 25px;
    }

    .common-btn {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      padding: 14px 18px;
      height: 49px;
    }

    img {
      width: 100%;
    }
  }

  .how-it-works {
    padding-top: 50px;
    padding-bottom: 60px;

    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 40px;
    }

    .col {
      &:nth-child(2n-1) {
        padding-right: 100px;
      }

      &:nth-child(2n) {
        padding-left: 100px;
      }
    }

    .feature {
      background: #FFFFFF;
      border: 1px solid #2256F6;
      border-bottom: 8px solid #2256F6;
      box-shadow: 0px 4px 26px rgba(34, 86, 246, 0.14);
      border-radius: 10px;
      font-size: 18px;
      line-height: 22px;
      padding: 16px 24px;
    }

    .common-btn {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      padding: 14px 18px;
      height: 49px;
    }
  }

  .faq {
    background: #E5E5E5;
    padding-top: 50px;
    padding-bottom: 60px;

    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 40px;
      text-align: center;
    }

    .feature {
      background: #FFFFFF;
      border: 1px solid #2256F6;
      border-bottom: 8px solid #2256F6;
      box-shadow: 0px 4px 26px rgba(34, 86, 246, 0.14);
      border-radius: 10px;
      font-size: 16px;
      line-height: 19px;
      padding: 16px 24px;
      text-align: center;

      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 25px;
      }
    }
  }

  @media screen and (max-width: 1263px) {
    .lk-btn {
      display: none;
    }

    .hero .main-text {
      padding-top: 0px;

      h1 {
        font-weight: 700;
        font-size: 50px;
        line-height: 58px;
        text-transform: capitalize;
      }

      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        padding-left: 4px;
        margin: 30px 0 40px 0;
      }
    }
    .hero-music {
      margin-top: 100px;

      &:after {
        width: 100% !important;
      }
    }

    .pros {

      .amount {
        font-weight: 600;
        font-size: 90px;
        line-height: 120px;
        text-align: center;
      }
    }
  }
</style>
