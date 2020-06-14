<template>
  <b-container fluid >
    <b-container >
        <HelloComponent v-bind:msg="msg" v-if="renderComponent"></HelloComponent>

        </b-container>
  </b-container>
</template>

<script>
    import HelloComponent from "./HelloComponent";
    import MyNameComponent from "./MyNameComponent";
    export default {
        name: "MainComponent",
        components: {MyNameComponent, HelloComponent},
        data() {
            return {
                centered:"justify-content-center align-items-center d-flex",
                component:"HelloComponent",
                msg:"",
                msgs:["Hello","My Name Is\nDima Filipenko","Welcome"],
                renderComponent:true,
                i:0,

            }
        },
        methods:{
           async changeMsg() {
                this.msg=this.msgs[this.i]
                this.forceRerender()
                this.i++;
                if( this.i < this.msgs.length ){
                    setTimeout( this.changeMsg, 3000 );
                }
                //this.renderComponent = false;
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


        },
        mounted() {

            this.changeMsg().then(()=>{
                    this.renderComponent = false
            }

            );



        }
    }
</script>

<style scoped>

</style>
