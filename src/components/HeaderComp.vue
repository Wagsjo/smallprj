<script>
import axios from "axios";

export default {
  methods: {
    factAxios() {
      axios.get("https://api.adviceslip.com/advice").then((resp) => {
        this.advice = resp.data.slip.advice;
      });
    },
    secretFunction() {
      if (this.showProp) {
        this.showProp = false;
      } else {
        this.showProp = true;
      }
      this.$emit("not-so-secret");
    },
  },
  created() {
    this.factAxios();
  },
  data() {
    return {
      advice: String,
      home: "../../assets/hem.png",
      showProp: true,
    };
  },
  props: {
    prop: {
      type: String,
      default: "Ska du ha en propp?",
    },
  },
  emits: ["not-so-secret"],
};
</script>

<template>
  <header>
    <nav>
      <img src="../../assets/hem.png" alt="" srcset="" />
      <div class="tip">{{ this.advice }}</div>

      <ul>
        <li class="list"><RouterLink to="/"> Jokes </RouterLink></li>
        <li class="list">
          <RouterLink to="/weather/weekday"> Weather </RouterLink>
        </li>
        <input type="button" value="Secret button" @click="secretFunction" />
      </ul>
    </nav>
  </header>
  <div class="secret" :style="{ display: showProp ? 'none' : 'block' }">
    <p>
      {{ this.prop }}
    </p>
    <p>{{ $store.state.daysLeft }} Days left until year 2038 problem</p>
  </div>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
li {
  display: inline-block;
  padding-left: 10px;
  text-decoration: none;
}
li a {
  color: black;
}
header {
  padding: 30px;
  border-bottom: 1px solid black;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tipbox {
  display: flex;
}
.tip {
  font-weight: 600;
}
.secret {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.secret p {
  display: flex;
  justify-content: center;
}
</style>
