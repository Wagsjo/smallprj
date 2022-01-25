<script>
import axios from "axios";
export default {
  created() {
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() +1
    this.day = date.getDate()
  },
  methods: {
    pickCity() {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=3453f0c07be23ccba37ed293a1bf6c2b`)
      .then(response => {
        console.log(response)
        this.cardTitle = response.data.name
        this.cardPicVar = response.data.weather[0].icon
        this.cardPic = `http://openweathermap.org/img/wn/${this.cardPicVar}@4x.png`
        this.cardMain = response.data.weather[0].main
        this.cardTemp = Math.floor(response.data.main.temp)
        this.cardTempFeels = Math.floor(response.data.main.feels_like)
        this.locationLoaded = false
        this.lat = response.data.coord.lat
        this.lon = response.data.coord.lon
      })
    }
  },
  data() {
    return {
      city: '',
      locationLoaded: true,
      year: '',
      month: '',
      day: '',
      cardTitle: '',
      cardPic: '',
      cardPicVar: '',
      cardDate: '',
      cardMain: '',
      cardTemp: '',
      cardTempFeels: '',
      lat: '',
      lon: '',
    };
  },
};
</script>

<template>
  <div style="display: flex;
    justify-content: center;">
    <div>
      <h1>Weather of the day {{this.year}}/{{this.month}}/{{this.day}} </h1>
      <input type="text" v-model="city" placeholder="City or country">
      <input type="button" value="send" @click="pickCity" class="testSass">
    </div>
  </div>
  <div :class="{ weather: locationLoaded}">
    <!-- behövs classerna här? -->
    <div class="col">
      <div style="width:18rem; " class="card">
        <h3 class="card-title"> {{ this.cardTitle }} </h3>
        <img :src="cardPic" class="card-img-top" alt="">
        <div class="card-body">
          <div class="card-text">{{ this.cardMain }} {{this.cardTemp}}c°</div>
          <div class="card-text"> Feels like {{this.cardTempFeels}}c° </div>
          <div class="card-text">Latitude {{this.lat}} Longitude {{this.lon}} </div>
          <div class="card-text"></div>
          <div class="card-text"></div>
          <div class="card-text"></div>
          <div class="card-text"></div>
          <div class="card-text"></div>
          <div class="card-text"></div>
          <div class="card-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* $buttonStyles: rgb(218, 161, 161);
  .testSass {
    background-color: $buttonStyles ;
  } */
  .col {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .card {
    padding: 10px;
    border: 1px grey solid;
  }
  .weather {
    display: flex;
    justify-content: center;
    display: none;

  }

</style>
