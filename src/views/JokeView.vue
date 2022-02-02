<script>
import moment from "moment";
import axios from "axios";
export default {
  created() {
    this.y2k38 =
      Math.floor(
        new Date(moment("2038-01-19 03:14:08", "YYYY-MM-DD h:mm:ss"))
      ) / 1000;
    this.now =
      Math.floor(new Date(moment().format("YYYY-MM-DD h:mm:ss"))) / 1000;
    this.diff = Math.floor((this.y2k38 - this.now) / 60 / 60 / 24);
    this.$store.commit("updateTime", this.diff);
  },
  methods: {
    loadJoke() {
      axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode").then((resp) => {
        this.jokeData = [];
        this.switchThis = false;
        this.jokeData.push(resp.data.setup, resp.data.delivery);
        this.switchThis = true;
      });
    },
  },
  data() {
    return {
      y2k38: Number,
      now: Number,
      diff: Number,
      jokeData: [],
      switchThis: false,
    };
  },

  watch: {
    jokeData(neww, old) {
      console.log(`${neww} ${old}`);
    },
  },
};
</script>

<template>
  <input
    class="btn btn-success"
    type="button"
    value="Load joke"
    @click="loadJoke"
  />
  <div class="card" v-if="switchThis">
    <div class="card-body">
      <div class="card-text" v-for="value in jokeData" :key="value">
        {{ value }}
      </div>
    </div>
  </div>
</template>
