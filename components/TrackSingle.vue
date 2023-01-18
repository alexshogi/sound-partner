<template>
  <section
    class="track"
    :class="{ 'full-width': wide, 'flat': wide }"
  >
    <h3>{{ track.artist }} — {{ track.title }}</h3>
    <div class="params">
      <v-btn
        class="control-btn"
        icon
        :color="color"
        :disabled="!loaded"
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
        :disabled="!loaded"
        @change="setPosition"
      />
      <span class="duration">{{ elapsedTime }}</span>
      <span> / </span>
      <span class="duration">{{ duration }}</span>
      <audio
        id="player"
        ref="player"
        :src="source"
        @ended="ended"
        @canplay="canPlay"
      />
    </div>
  </section>
</template>

<script>
  import { Howl, Howler } from 'howler'

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
      autoplay: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: true
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
        loaded: false,
        playing: false,
        paused: false,
        percentage: 0,
        currentTime: '00:00',
        audio: undefined,
        sound: null,
        totalDuration: 0,
        elapsed: 0,
        playerVolume: 1,
        updateTimeIntervalId: null
      }
    },
    computed: {
      duration: function () {
        return this.audio && this.totalDuration ? formatTime(this.totalDuration) : ''
      },
      elapsedTime: function () {
        return this.audio && this.elapsed ? formatTime(this.elapsed) : ''
      },
      source () {
        return this.track.source;
      }
    },
    watch: {
      track: function (newVal, oldVal) {
        this.audio = this.$refs.player;

        console.log('***** watch track')
        console.log(this.track)

        console.log(newVal)
        console.log(oldVal)

        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.init();
        }
      },
      deep: true,
    },
    mounted () {
      // this.audio = this.$refs.player;
      // this.init();

      // if (this.autoplay) {
      //   setTimeout(() => {
      //     this.audio.play().then(() => this.playing = true)
      //   }, 50);
      // }
    },
    beforeUnmount () {
      this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
      this.audio.removeEventListener('loadeddata', this._handleLoaded)
      this.audio.removeEventListener('pause', this._handlePlayPause)
      this.audio.removeEventListener('play', this._handlePlayPause)
      this.audio.removeEventListener('ended', this._handleEnded)
    },
    methods: {
      setPosition () {
        // this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
        this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
      },
      play () {
        if (this.playing) return
        // this.audio.play().then(() => this.playing = true)

        this.sound.play();
        this.playing = true;
        this.paused = false;
      },
      pause () {
        this.paused = !this.paused;
        // (this.paused) ? this.audio.pause() : this.audio.play()
        (this.paused) ? this.sound.pause() : this.sound.play()
      },
      _handleLoaded: function () {
        if (this.audio.readyState >= 2) {
          if (this.audio.duration === Infinity) {
            // Fix duration for streamed audio source or blob based
            // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
            this.audio.currentTime = 1e101;
            this.audio.ontimeupdate = () => {
              this.audio.ontimeupdate = () => {}
              this.audio.currentTime = 0
              this.totalDuration = parseInt(this.audio.duration)
              this.loaded = true;
            }
          } else {
            this.totalDuration = parseInt(this.audio.duration)
            this.loaded = true
          }
        } else {
          throw new Error('Failed to load sound file')
        }
      },
      _handlePlayingUI: function () {
        this.audio.volume = this.playerVolume
        this.percentage = this.audio.currentTime / this.audio.duration * 100
        this.currentTime = formatTime(this.audio.currentTime)
        this.playing = true
      },
      _handleEnded () {
        this.paused = this.playing = false;
      },
      init: function () {
        this.audio.addEventListener('timeupdate', this._handlePlayingUI);
        this.audio.addEventListener('loadeddata', this._handleLoaded);
        this.audio.addEventListener('ended', this._handleEnded);
        // this.playing = false;

        // setTimeout(() => {
        //   this.playing = false;
        // }, 10);

        console.log(this.track);

        this.elapsed = 0;
        this.totalDuration = 0;

        clearInterval(this.updateTimeIntervalId);

        const sound = new Howl({
          src: [this.track.source],
          html5: true
        });

        console.log('sound', sound)

        this.sound = sound;
        this.totalDuration = this.track.duration;
        this.elapsed = this.track.elapsed;
        this.loaded = true;
        this.paused = true;

        this.updateTimeIntervalId = setInterval(this.updateClock, 1000);
        // sound.play();

        // setTimeout(() => {
        //   this.playing = true;
        //   sound.play();
        // }, 3000);
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
    height: 80px;
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

    h3 {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #272727;
      text-align: center;
    }

    .params {
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
