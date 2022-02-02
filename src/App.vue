<script>
import Header from "./components/HeaderComp.vue";
import moment from "moment";

export default {
  components: {
    Header,
  },
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
  data() {
    return {
      sendProp: "Lets try send a prop",
      y2k38: Number,
      now: Number,
      diff: Number,
    };
  },
  methods: {
    recieved() {
      console.log(
        "Det svåraste med den här laborationen var inte att utföra själva kodningen, utan att komma på vad jag kan använda koden till."
      );
    },
  },
};
</script>

<template>
  <Header :prop="this.sendProp" @not-so-secret="recieved" />
</template>
