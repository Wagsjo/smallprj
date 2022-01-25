<!-- views-filer används för VueRouter  -->
<script>
    import axios from 'axios'
    export default {
    methods: {
        testFunc() {
            console.log("hej");
        },
        testAxios() {
            axios.get('https://api.adviceslip.com/advice')
            .then(resp => console.log(resp.data.slip.advice))

        },
    },
    created() {
            this.testAxios()
        }
}
</script>

<template>
  <div> {{ $store.state.info }} i AboutView</div>
</template>
