<template>

    <div class="vertical-center vh-100 text-center justify-content-center text-justify align-items-center d-flex"> <!--
                      ^--- Added class  -->


              <p class="display-1 hello ">HELLO</p>

    </div>

</template>

<script>
    import MainComponent from "./MainComponent";
    export default {
        name: "HelloComponent",
        components: {MainComponent}
    }
</script>

<style scoped>
    .hello{
        font-family: "Nunito", sans-serif;
    }
</style>
