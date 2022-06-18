<template>


    <div class="space-y-8 sm:space-y-16">
        <Artical/>
        <Artical/>
        <Artical/>
        <Artical/>

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

        components:{
            Artical,
        }
    }

</script>