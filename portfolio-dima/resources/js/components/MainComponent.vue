<template>
  <div>
     <HelloComponent class="animate__animated " v-bind:class="animation" v-if="currentComponent==='HelloComponent'" ></HelloComponent><HelloComponent class="animate__animated " v-bind:class="animation" v-if="currentComponent==='HelloComponent'" ></HelloComponent>
     <HelloComponent class="animate__animated " v-bind:class="animation" v-if="currentComponent==='HelloComponent'" ></HelloComponent>

  </div>
</template>

<script>
    import HelloComponent from "./HelloComponent";
    export default {
        name: "MainComponent",
        components: {HelloComponent},
        data() {
            return {
                currentComponent: "HelloComponent",
                animation: "animate__fadeIn"
            }
        },
    }
</script>

<style scoped>

</style>
