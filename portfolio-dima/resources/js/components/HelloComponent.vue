<template>



    <div v-bind:class="centered">
        <p  class="animate__animated   Nunito  text-center  "
            v-bind:class="animation+' '+displayBig"
        >{{msg}}</p>
        ))
    </div>

</template>

<script>
    import MainComponent from "./MainComponent";
    export default {
        name: "HelloComponent",
        components: {MainComponent},
        props: ['msg'],
        data() {
            return {
                centered:"vh-100 justify-content-center  align-items-center d-flex",
                animation: "animate__fadeIn",
                displayBig: "display-1",
            }
        },
        methods:{

             changeAnimation(){

                 this.animation="animate__fadeOut"
            },

        },
        mounted() {

            setTimeout(this.changeAnimation, 2000);



        }
    }
</script>

<style scoped>
    .Nunito{
        font-family: "Nunito", sans-serif;
    }



</style>
