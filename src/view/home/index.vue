<template>
    <HeroContent/>
    <div class="py-8 sm:py-20 px-4 sm:px-0 container mx-auto">
        <Articles/>
    </div>
</template>

<script>
    import HeroContent from "./hero.vue"
    import Articles from "../../components/Articals.vue"
    export default {
        name:"Hero",

        components:{
            HeroContent,
            Articles
        }
    }
</script>































