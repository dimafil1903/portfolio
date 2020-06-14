<template>
    <div v-bind:class="centered">
        <p  class="animate__animated hello  Nunito  text-center "  v-bind:class="animation+' '+displayBig"  >
      fdsfdsfs
        </p>
    </div>

</template>

<script>
    import MainComponent from "./LayoutComponent";
    export default {
        name: "MyNameComponent",
        components: {MainComponent},
        data() {
            return {
                centered:"vh-100 justify-content-center  align-items-center d-flex",
                animation: "animate__fadeIn",
                displayBig: "display-1",
                msg:"",
            }
        },
        methods:{

            changeAnimation(){

                this.animation="animate__fadeOut"
            },

        },
        mounted() {

            setTimeout(this.changeAnimation, 3000);



        }
    }
</script>

<style scoped>
    .Nunito{
        font-family: "Nunito", sans-serif;
    }



</style>
