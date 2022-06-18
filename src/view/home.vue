<template>
    <div class="container">
        <div class="home mt-10 my-16 border border-sky-2">
            <div class="destinations">
                <router-link class="float-left mx-5" v-for="item in destinations" :key="item.id" :to="item.slug">
                    <h2 >{{item.name}}</h2>
                    <img :src="`/images/${item.image}`" :alt="item.name">
                </router-link>
            </div>
        </div>

        

    </div>

</template>

<script>
    import allData from "../data.json"

    export default {
        data(){
            return {
                destinations : allData.destinations,
            }
        }
    }

</script>