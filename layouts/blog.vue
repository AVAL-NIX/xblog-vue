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
    import ArticleBodyContentMobile from '~/components/mobile/ArticleBodyContentMobile'
    import TopMobile from '~/components/mobile/TopMobile'
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
            this.isPc()
        },
        methods:{
            isPc(){
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone",
                            "SymbianOS", "Windows Phone",
                            "iPad", "iPod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                this.$store.state.home.isMobile = !flag
            }
        },
        metaInfo: {
            title: 'Avalon博客',
            meta: [{
                name: 'java,python',
                content: 'java,python代码'
            }],
            link: [{
                rel: 'github',
                href: 'https://github.com/AVAL-NIX'
            }]
        }
    }
</script>

<style scoped>
    .index {}
</style>