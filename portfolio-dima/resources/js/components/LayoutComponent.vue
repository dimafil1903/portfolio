<template>
  <b-container fluid  class="m-0 p-0">

        <HelloComponent v-bind:msg="msg" v-if="renderComponent && !contentComponent"></HelloComponent>
        <PreLoader  v-if="!contentComponentReady && contentComponent "></PreLoader>
        <ContentComponent @hook:mounted="contentComponentReadyFunc" v-if="contentComponent"></ContentComponent>

  </b-container>
</template>

<script>
    import HelloComponent from "./HelloComponent";
    import MyNameComponent from "./MyNameComponent";
    import ContentComponent from "./ContentComponent";
    import PreLoader from "./PreLoader";
    export default {
        name: "LayoutComponent",
        components: {PreLoader, ContentComponent, MyNameComponent, HelloComponent},
        data() {
            return {
                centered:"justify-content-center align-items-center d-flex",
                component:"HelloComponent",
                msg:"",
                msgs:["Hello","My Name Is\nDima Filipenko","Welcome"],
                renderComponent:true,
                contentComponent:false,
                contentComponentReady:false,
                i:0,

            }
        },
        methods:{
            changeMsg() {
                this.msg=this.msgs[this.i]
                this.forceRerender()
                this.i++;
                if( this.i <= this.msgs.length ){
                    setTimeout( this.changeMsg, 3000 );
                }else {
                    this. contentComponent=true;
                }

    },

        forceRerender() {
                // Remove my-component from the DOM
                this.renderComponent = false;

                // If you like promises better you can
                // also use nextTick this way
                this.$nextTick().then(() => {

                    // Add the component back in
                    this.renderComponent = true;
                })
            },
            contentComponentReadyFunc() {
               this.contentComponentReady = true
            }

        },
        mounted() {

            this.changeMsg();




        }
    }
</script>

<style scoped>

</style>
