<template>
  <div>
    <div
      v-if="loading"
      class="content-container"
    >
      <div
        class="d-flex justify-center align-center pa-5"
        style="min-height: 80px;"
      >
        <v-progress-circular
          indeterminate
          color="#2256F6"
        />
      </div>
    </div>

    <section
      v-if="!loading"
      class="track"
      :class="{ 'full-width': wide, 'flat': wide, 'padless': history }"
    >
      <div
        class="d-flex"
      >
        <img
          :src="track.song.art"
          width="56"
          height="56"
          alt="ALBUM"
          class="mr-3"
        >

        <div style="flex: 1;">
          <h3>{{ track.song.title }}</h3>
          <p>{{ track.song.artist }}</p>
        </div>

        <div
          v-if="history"
        >
          <span class="duration">{{ duration }}</span>
        </div>
      </div>

      <div
        v-if="!history"
        class="params mt-2"
      >
        <v-btn
          v-if="!history"
          class="control-btn"
          icon
          :color="color"
          :disabled="loading"
          @click="playing ? pause() : play()"
        >
          <v-icon v-if="!playing || paused">
            {{ playIcon }}
          </v-icon>
          <v-icon v-else>
            {{ pauseIcon }}
          </v-icon>
        </v-btn>
        <v-progress-linear
          v-model="percentage"
          height="2"
          class="mx-4 mt-1"
          disabled
        />
        <span class="duration">{{ elapsedTime }}</span>
        <span> / </span>
        <span class="duration">{{ duration }}</span>
      </div>
    </section>
  </div>
</template>

<script>
  import { Howl } from 'howler'

  const formatTime = second => new Date(second * 1000).toISOString().substr(14, 5);

  export default {
    name: 'TrackSingle',
    props: {
      file: {
        type: String,
        default: null
      },
      wide: {
        type: Boolean,
        default: false
      },
      flat: {
        type: Boolean,
        default: false
      },
      track: {
        type: Object,
        required: true
      },
      history: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      ended: {
        type: Function,
        default: () => {},
      },
      canPlay: {
        type: Function,
        default: () => {},
      },
      color: {
        type: String,
        default: '#2256F6'
      },
      playIcon: {
        type: String,
        default: 'mdi-play'
      },
      pauseIcon: {
        type: String,
        default: 'mdi-pause'
      }
    },
    data () {
      return {
        loading: true,
        playing: false,
        paused: false,
        percentage: 0,
        currentTime: '00:00',
        sound: null,
        totalDuration: 0,
        elapsed: 0,
        playerVolume: 1,
        updateTimeIntervalId: null
      }
    },
    computed: {
      duration: function () {
        return this.sound && this.totalDuration ? formatTime(this.totalDuration) : ''
      },
      elapsedTime: function () {
        return this.sound && this.elapsed ? formatTime(this.elapsed) : ''
      },
      source () {
        return this.track.song.listen_url;
      }
    },
    watch: {
      track: function (newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          console.log('-> init player');
          this.loading = true;
          this.init();
        }
      },
      deep: true,
    },
    mounted () {
      if (this.track?.sh_id) {
        this.init();
      }
    },
    methods: {
      play () {
        if (!this.sound) return;

        this.sound.play();

        
        this.paused = false;
        this.playing = true;
      },
      pause () {
        this.paused = !this.paused;
        this.paused ? this.sound.pause() : this.sound.play()
      },
      init: function () {
        console.log('//////////////////')
        console.log(this.track)

        this.elapsed = 0;
        this.totalDuration = 0;
        // this.playing = false;
        this.paused = false;

        clearInterval(this.updateTimeIntervalId);

        if (this.sound) {
          this.sound = null;
        }

        const sound = new Howl({
          src: [this.track.listen_url],
          // autoplay: this.autoplay ? true : false,
          html5: true,
        });

        if (this.autoplay) {
          this.play();
        }

        this.sound = sound;

        this.totalDuration = this.track.duration;
        this.elapsed = this.track.elapsed;

        this.updateTimeIntervalId = setInterval(this.updateClock, 1000);

        this.loading = false;
      },
      updateClock () {
        this.elapsed++;

        if (this.elapsed >= this.totalDuration) {
          clearInterval(this.updateTimeIntervalId);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .track {
    background: #FFFFFF;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.18);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;

    &.full-width {
      width: 100%;
    }

    &.flat {
      box-shadow: none;
    }

    &.padless {
      padding-top: 0;
      padding-bottom: 0;
    }

    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: #272727;
      text-align: left;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #272727;
      text-align: left;
    }

    .params {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .duration {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #272727;
      }

      .control-btn {
        
        .v-icon {
          height: 40px;
          font-size: 34px;
          width: 40px;
        }
      }
    }
  }
</style>
