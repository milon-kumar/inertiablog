<template>
    <InnerPageHero imageUrl="public/images/image-3.jpg" title="Contract Us Me Here"/>

    <div class="container mx-auto px-4 py-8 sm:py-8 sm:px-0">
        <div class="grid sm:grid-cols-3 sm:gaps-4">
            <div class=""><span class="text-gray-500">Address :</span> Lorem ipsum dolor</div>
            <div class=""><span class="text-gray-500">Email :</span> loremipsum@gmail.com</div>
            <div class=""><span class="text-gray-500">Phone :</span> +91 251 236584</div>
        </div>
        <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div class="rounded bg-gray-300">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29207.256526814897!2d90.41200259136359!3d23.786323482954444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1655621114924!5m2!1sen!2sbd"
                        class="w-full"
                        height="450"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div class="p-8 bg-gray-300 rounded">
                <form action="" class="space-y-4">
                    <div class="">
                        <input type="text"
                               class="px-4 py-2 w-full border focus:border-red-500 focus:outline-none rounded bg-gray-200"
                               placeholder="Enter name"
                               required
                        >
<!--                        <span class="text-red-500 text-sm my-2 block">Plise Fild is requird</span>-->
                    </div>

                    <div class="">
                        <input type="email"
                               class="px-4 py-2 w-full border focus:border-red-500 focus:outline-none rounded bg-gray-200"
                               placeholder="Enter Email"
                               required
                        >
<!--                        <span class="text-red-500 text-sm my-2 block">Plise Fild is requird</span>-->
                    </div>

                    <div class="">
                        <textarea name=""
                                  id=""
                                  rows="5"
                                  placeholder="Enter Message"
                                  class="px-4 py-2 w-full border focus:border-red-500 focus:outline-none rounded bg-gray-200"
                        ></textarea>
<!--                        <span class="text-red-500 text-sm my-2 block">Plise Fild is requird</span>-->
                    </div>

                    <div class="bg-green-600 px-4 py-2 rounded text-white w-full">Lorem ipsum dolor sit amet.</div>
                    <div class="bg-red-600 px-4 py-2 rounded text-white w-full">Lorem ipsum dolor sit amet.</div>
                    <button class="px-4 py-2 sm:px-8 text-white rounded focus:outline-none bg-red-500">Submit</button>


                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import InnerPageHero from "../../components/InnerPageHero.vue";
    export default {
        components: {
            InnerPageHero,
        }
    }
</script>