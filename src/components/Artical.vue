<template>
    <div class="grid sm:grid-cols-5 gap-4 sm:gap-12">
        <div class="col-span-3 h-64 sm:h-488px">
            <img src="public/images/image-1.jpg"
                 alt="Article"
                 class="w-full h-full object-cover"
            >
        </div>
        <div class="col-span-2 mt-2 flex flex-col justify-between">
            <div class="">
                <h4 class="text-base text-gray-500">Category</h4>
                <h3 class="mt-1  text-2xl ">
                    <router-link to="/article/slug"
                                 class="
                                 hover:text-red-500
                                 front-bold
                                 transition-colors
                                 duration-300
                                "
                    >Lorem ipsum dolor sit amet.</router-link>
                </h3>
                <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum doloremque ea eos facilis harum iure necessitatibus obcaecati praesentium quasi?</p>
            </div>
            <div class="mt-1 text-base text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="ml-2">
                    5 minit ago
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import computed from "vue"
    export  default {


        props:{
            layout:{
                type:String,
                default:"list",
            }
        },

        setup(props){
            let isGrid = computed
        },
    }
</script>