<template>
    <div class="index">
        <div  v-show="!isMobile">
            <Top></Top>
            <el-container>
                <el-header style="height:30%">
                    <Carousel></Carousel>
                </el-header>
                <el-main>
                       <ArticleBodyContent ></ArticleBodyContent>
                        <ArticleBodyRight></ArticleBodyRight>
                        <Drawer></Drawer>
                </el-main>
                <el-footer>
                    <Backtop></Backtop>
                </el-footer>
            </el-container>
            <Special></Special>
        </div>

        <div  v-show="isMobile">
              <TopMobile></TopMobile>
              <ArticleBodyContentMobile ></ArticleBodyContentMobile>
        </div>

    </div>
</template>

<script>
    import Top from '@/components/front/Top'
    import Carousel from '@/components/front/Carousel'
    import Backtop from '@/components/front/Backtop'
    import Special from '@/components/common/Special'
    import Drawer from '@/components/front/Drawer'
    import ArticleBodyRight from '@/components/front/ArticleBodyRight'
    import ArticleBodyContent from '@/components/front/ArticleBodyContent'
    import ArticleBodyContentMobile from '@/components/front/mobile/ArticleBodyContentMobile'
    import TopMobile from '@/components/front/mobile/TopMobile'
    import store from '@/store/index.js'
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
            ArticleBodyContent,
            ArticleBodyRight,
            ArticleBodyContentMobile,
            TopMobile,
            Special
        },
        computed:{
            ...mapState('home', {
                isMobile: "isMobile",
            })
        },
        mounted(){
            this.isPc()
            console.log(" store.state.home.isMobile" , store.state.home.isMobile)
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
                store.state.home.isMobile = !flag
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