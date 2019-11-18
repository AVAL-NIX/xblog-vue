<template>
    <div class="index">
        <div  v-show="!isMobile">
            <Top></Top>
            <el-container>
                <el-header style="height:30%">
                    <Carousel></Carousel>
                </el-header>
                <nuxt/>
                <el-footer>
                    <Backtop></Backtop>
                </el-footer>
            </el-container>

        </div>
        <div  v-show="isMobile">
              <TopMobile></TopMobile>
              <ArticleBodyContentMobile ></ArticleBodyContentMobile>
        </div>

    </div>
</template>

<script>
    import Top from '~/components/Top'
    import Carousel from '~/components/Carousel'
    import Backtop from '~/components/Backtop'
    import Drawer from '~/components/Drawer'
    import ArticleBodyRight from '~/components/ArticleBodyRight'
    import ArticleBodyContentMobile from '~/components/ArticleBodyContentMobile'
    import TopMobile from '~/components/TopMobile'
    import store from '~/store/index.js'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'Index',
        data(){
            return{
            }
        },
        components: {
            Carousel,
            Backtop,
            Drawer,
            Top,
            ArticleBodyRight,
            ArticleBodyContentMobile,
            TopMobile,
        },
        computed:{
            ...mapState('home', {
                isMobile: "isMobile",
            })
        },
        mounted(){
        },
        methods:{
        }
    }
</script>

<style scoped>
    .index {}
</style>