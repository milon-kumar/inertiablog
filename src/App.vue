<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <div class="flex flex-col h-full">
        <Navbar/>
        <div class="flex-1">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
  // import Navbar from '../src/view/includes/header_nav'
  import Footer from "./components/Footer.vue";
  import Navbar from './components/Navbar.vue';
  export default {

    components:{
      Footer,
      Navbar,
    }
  }

</script>
