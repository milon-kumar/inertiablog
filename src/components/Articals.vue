<template>


    <div class="space-y-8 sm:space-y-16">
        <Artical :layout="layout"/>
        <Artical :layout="layout"/>

    </div>

    <div class="mt-8 sm:mt-12">
        <router-link to="/articles"
                     class="px-4 py-2 bg-red-500 text-white rounded"
        >View All</router-link>
    </div>




</template>

<script>

    import Artical from "./Artical.vue";

    export default {

        props:{
            layout:{
              type:String,
              default:"list",
          }
        },

        components:{
            Artical,
        }
    }

</script>