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
          <h3>{{ title }}</h3>
          <p>{{ artist }}</p>
        </div>

        <div
          v-if="playing"
          id="levels"
        >
          <div class="level level1" />
          <div class="level level2" />
          <div class="level level3" />
          <div class="level level4" />
          <div class="level level5" />
          <div class="level level6" />
          <div class="level level7" />
          <div class="level level8" />
          <div class="level level9" />
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
          v-model="progress"
          height="2"
          class="mx-4 mt-1"
          disabled
        />
        <!-- <span class="duration">{{ elapsedTime }}</span>
        <span> / </span> -->
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
        sound: null,
        totalDuration: 0,
        playerVolume: 1,
        updateTimeIntervalId: null
      }
    },
    computed: {
      duration: function () {
        return this.track.duration ? formatTime(this.track.duration) : ''
      },
      elapsedTime: function () {
        return this.track.elapsed ? formatTime(this.track.elapsed) : ''
      },
      source () {
        return this.track.song.listen_url;
      },
      title () {
        return this.track.song.title;
      },
      artist () {
        return this.track.song.artist;
      },
      progress () {
        return parseInt((this.track.elapsed / this.track.duration) * 100)
      }
    },
    mounted () {
      if (this.track?.sh_id) {
        this.init();
      }

      if (this.history) {
        this.loading = false;
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
        if (!this.sound) return;

        this.sound.pause()

        this.paused = true;
        this.playing = false;
      },
      init: function () {
        this.elapsed = 0;
        this.totalDuration = 0;

        clearInterval(this.updateTimeIntervalId);

        if (this.sound) {
          this.sound = null;
        }

        this.sound = new Howl({
          src: [this.track.listen_url],
          html5: true,
        });

        if (this.autoplay) {
          this.play();
        }

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
  $animation-name: 'pump-it-up';

  @mixin keyframes($animationName) {
    @-webkit-keyframes #{$animationName} {
      @content;
    }
    @-moz-keyframes #{$animationName} {
      @content;
    }
    @-o-keyframes #{$animationName} {
      @content;
    }
    @keyframes #{$animationName} {
      @content;
    }
  }

  @for $i from 1 through 9 {
    @include keyframes(#{$animation-name+$i}) {
      20% {

      }
      40% {
        height: random(50) + px;
      }
      60% {
        height: random(50) + px;
      }
      80% {
        height: random(50) + px;
      }
      100% {
        height: random(50) + px;
      }
    }
  }

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

    #levels {
      width: 70px;
      height: 50px;
      top: 50%;
      margin: 0 auto;
      position: relative;

      .level {
        width: 3px;
        height: 50px;
        margin-left: 1px;
        display: inline-block;
        position: relative;

        &:after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(34, 87, 246, 0.6);
          width: 3px;
        }

        @for $i from 1 through 9 {
          &.level#{$i}:after {
            height: random(50) + px;
            animation: #{$animation-name+$i} 600 + random(500) + ms linear infinite alternate;
          }
        }
      }
    }
  }
</style>
