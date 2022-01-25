import { createStore } from 'vuex'

const mutations = {}

const state = {
    info: 'Info från store'
}

export default createStore({mutations, state, strict: true})
