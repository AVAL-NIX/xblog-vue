<template>
    <div>
        <div v-if="!isMobile" >
        <el-container>
            <transition name="fade">
                <Top v-show="topShow"></Top>
            </transition>
            <transition name="fade">
                <ArticleTop v-show="articleTopShow"></ArticleTop>
            </transition>
            <el-main>
                <ArticleDetail></ArticleDetail>
            </el-main>
            <el-footer>
                <Backtop></Backtop>
            </el-footer>
        </el-container>
        </div>
        <div v-else>
            <ArticleTop ></ArticleTop>
            <el-container >
                    <ArticleDetail></ArticleDetail>
            </el-container>
        </div>
    </div>
</template>

<script>
    import ArticleDetail from '@/components/ArticleDetail'
    import Top from '@/components/Top'
    import TopMobile from '@/components/mobile/TopMobile'
    import ArticleTop from '@/components/ArticleTop'
    import Backtop from '@/components/Backtop'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'ArticleIndex',
        components: {
            ArticleDetail,
            Top,
            Backtop,
            TopMobile,
            ArticleTop
        },
        data(){
            return{

            }
        },
        computed: {
            ...mapState({
                topShow: state => state.article.top,
                articleTopShow: state => state.article.articleTop,
            }),
            ...mapState('home', {
                isMobile: "isMobile",
            })
        },
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>