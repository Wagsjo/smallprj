<script>
import axios from "axios";
import moment from "moment";

export default {
  created() {
    this.y2k38 =
      Math.floor(
        new Date(moment("2038-01-19 03:14:08", "YYYY-MM-DD h:mm:ss"))
      ) / 1000;
    this.now =
      Math.floor(new Date(moment().format("YYYY-MM-DD h:mm:ss"))) / 1000;
    this.diff = Math.floor((this.y2k38 - this.now) / 60 / 60 / 24);
    this.day = moment().format("dddd");
    this.$router.push({ path: `/weather/${this.day}` });
    this.$store.commit("updateTime", this.diff);
  },
  methods: {
    pickCity() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=3453f0c07be23ccba37ed293a1bf6c2b`
        )
        .then((response) => {
          console.log(response.data);
          this.cardTitle = response.data.name;
          this.cardCountry = response.data.sys.country;
          this.cardPicVar = response.data.weather[0].icon;
          this.cardPic = `http://openweathermap.org/img/wn/${this.cardPicVar}@4x.png`;
          this.cardMain = response.data.weather[0].main;
          this.cardTemp = Math.floor(response.data.main.temp);
          this.cardTempFeels = Math.floor(response.data.main.feels_like);
          this.locationLoaded = false;
          this.lat = response.data.coord.lat;
          this.lon = response.data.coord.lon;
          this.sunUp = moment
            .unix(response.data.sys.sunrise)
            .format("hh:mm:ss");
          this.sunDown = moment
            .unix(response.data.sys.sunset)
            .format("hh:mm:ss");
          this.humidity = response.data.main.humidity;
        });
    },
  },
  data() {
    return {
      city: "",
      locationLoaded: true,
      cardTitle: "",
      cardCountry: "",
      cardPic: "",
      cardPicVar: "",
      cardDate: "",
      cardMain: "",
      cardTemp: "",
      cardTempFeels: "",
      lat: "",
      lon: "",
      sunUp: "",
      sunDown: "",
      humidity: "",
      y2k38: Number,
      now: Number,
      diff: Number,
      day: String,
    };
  },
  computed: {
    date() {
      return this.$store.state.date;
    },
  },
};
</script>

<template>
  <div style="display: flex; justify-content: center">
    <div>
      <h1>Weather of the day {{ date }} {{ this.$route.params.weekday }}</h1>
      <input type="text" v-model="city" placeholder="City or country" />
      <input type="button" value="send" @click="pickCity" class="testSass" />
    </div>
  </div>
  <div :class="{ weather: locationLoaded }">
    <div class="col">
      <div style="width: 18rem" class="card">
        <h3 class="card-title">{{ this.cardTitle }}, {{ this.cardCountry }}</h3>
        <img :src="cardPic" class="card-img-top" alt="" />
        <div class="card-body">
          <div class="card-text">{{ this.cardMain }} {{ this.cardTemp }}c°</div>
          <div class="card-text">Feels like {{ this.cardTempFeels }}c°</div>
          <div class="card-text">
            Latitude {{ this.lat }} Longitude {{ this.lon }}
          </div>
          <div class="card-text">Sunrise {{ this.sunUp }}</div>
          <div class="card-text">Sunset {{ this.sunDown }}</div>
          <div class="card-text">Humidity {{ this.humidity }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$buttonStyles: rgb(218, 161, 161);
.testSass {
  background-color: $buttonStyles;
}
.col {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.weather {
  display: flex;
  justify-content: center;
  display: none;
}
</style>
