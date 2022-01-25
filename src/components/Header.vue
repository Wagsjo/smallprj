<script>
import Router from "../router";
import axios from "axios";
export default {
  methods: {
    factAxios() {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((resp) => this.advice = resp.data.slip.advice);
    },
  },

  created() {
    this.factAxios();
  },
  data() {
    return {
      advice: String
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <img src="../../assets/hem.png" alt="" srcset="">
      <div class="tip"> {{ advice }} </div>
      <ul>
        <li class="list"><RouterLink to="/about"> routerLink </RouterLink></li>
        <li class="list"><RouterLink to="/weather"> Weather </RouterLink></li>
        <li class="list"><RouterLink to="/about"> routerLink </RouterLink></li>
      </ul>
    </nav>
  </header>
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
  flex-direction: row;
  list-style: none;
  display: inline-block;
  padding-left: 10px;
}
header {
  background-color: aqua;
  padding: 30px 10%;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tipbox {
  display: flex;
  justify-content: center;
}
.tip {
  font-weight: 600;
}
</style>
