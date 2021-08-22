<template>
    <div>
        <Navbar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/frontend/Foot.vue'
import Navbar from '@/components/frontend/Nav.vue'
export default {
    name : 'FrontendLayout',
    components:{
        Navbar,Footer

    }
}
</script>

<style>
main{
    @apply pt-20 pb-20
}
</style>