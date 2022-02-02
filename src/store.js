import { createStore } from "vuex";
import moment from "moment";

const state = {
  date: String,
  daysLeft: Number,
};
const mutations = {
  updateTime(asd, daysLeft) {
    state.date = moment().format("MMMM Do");
    state.daysLeft = daysLeft;
  },
};

export default createStore({ mutations, state, strict: true });
